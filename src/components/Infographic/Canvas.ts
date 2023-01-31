import { FrontierData } from "context/FrontiersContext";
import { convertCartesianToScreenPoint } from "utils/cartesian";
import {
  changeRelativeValueToRealValue,
  changeRelativeValueToRealValueInversed,
} from "utils/clamp";
import { drawRoundRect } from "utils/drawShape";
import { Vector2 } from "utils/math/Vector2";
import { wrapText } from "utils/text";
import { Planet } from "./Planet";
import { Sun } from "./Sun";

export class InfographicCanvas {
  private fps = 24;
  element: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number = 0;
  height: number = 0;
  loop: number = 0;
  sun: Sun | null;
  planets: Array<Planet> = [];
  requestAnimationFrameId: number;
  MIN_PLANET_SIZE = 20;
  MAX_PLANET_SIZE = 80;
  frameCount = 0;
  backgroundLoopMax = 1000;
  dpr: number = 1;
  hoveredPlanet: Planet | null = null;
  isPopupOpen: boolean = false;
  isSunHovered: boolean = false;
  openSourceUrls: (isOpen: boolean) => void;

  currentFrontierColor: { r: number; g: number; b: number } = {
    r: 0,
    g: 25,
    b: 60,
  };

  constructor(
    element: HTMLCanvasElement,
    openSourceUrls: (isOpen: boolean) => void
  ) {
    this.element = element;
    this.openSourceUrls = openSourceUrls;
    this.ctx = element.getContext("2d")!;
    this.sun = null;
    this.render();
    this.requestAnimationFrameId = requestAnimationFrame(this.render);
    this.planets = [];
    this.initialize();
  }

  onMouseClick(e: MouseEvent) {
    if (this.sun) {
      const screenPoint = convertCartesianToScreenPoint(
        this.element,
        this.sun.position,
        this.dpr
      );
      const distanceToSun = screenPoint.squareDistanceTo(
        new Vector2(e.clientX, e.clientY)
      );
      if (Math.sqrt(distanceToSun) < this.sun.radius) {
        this.openSourceUrls(true);
      }
    }
  }

  onMouseMove(e: MouseEvent) {
    let isAnyPlanetHovered = false;
    if (this.sun) {
      const screenPoint = convertCartesianToScreenPoint(
        this.element,
        this.sun.position,
        this.dpr
      );
      const distanceToSun = screenPoint.squareDistanceTo(
        new Vector2(e.clientX, e.clientY)
      );
      if (Math.sqrt(distanceToSun) < this.sun.radius) {
        this.isSunHovered = true;
      } else {
        this.isSunHovered = false;
      }
    }
    for (const planet of this.planets) {
      const screenPoint = convertCartesianToScreenPoint(
        this.element,
        planet.position,
        this.dpr
      );
      const distance = screenPoint.squareDistanceTo(
        new Vector2(e.clientX, e.clientY)
      );
      if (Math.sqrt(distance) < planet.radius) {
        planet.setIsPopupOpen(true);
        isAnyPlanetHovered = true;
        this.hoveredPlanet = planet;
      } else {
        planet.setIsPopupOpen(false);
      }
    }
    if (isAnyPlanetHovered) {
      this.isPopupOpen = true;
    } else {
      this.isPopupOpen = false;
    }
    if (this.isSunHovered) {
      this.hoveredPlanet = null;
      this.isPopupOpen = true;
    }
  }

  drawButton(drawPosition: Vector2) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    this.ctx.arc(drawPosition.x, drawPosition.y, 20, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  drawPopup(drawPosition: Vector2, component: Planet | Sun) {
    if (!this.hoveredPlanet?.content) {
      return;
    }
    const wrappedTextMaxWidth = 180;
    const wrappedTextLineHeight = 20;
    const wrappedTextFontSize = 15;

    const rectPadding = 8;
    const rectHeight = 43;
    const popupPadding = 8;
    const titleMarginTop = popupPadding + 5;
    const headerHeight = titleMarginTop + 22;
    const dataCountToShow = component instanceof Planet ? 5 : 4;
    let dataIndex = 0;
    let quadrant = 0b00;
    if (
      drawPosition.x > this.element.width / this.dpr / 2 &&
      drawPosition.y < this.element.height / this.dpr / 2
    ) {
      quadrant = 0b00;
    } else if (
      drawPosition.x < this.element.width / this.dpr / 2 &&
      drawPosition.y < this.element.height / this.dpr / 2
    ) {
      quadrant = 0b01;
    } else if (
      drawPosition.x < this.element.width / this.dpr / 2 &&
      drawPosition.y > this.element.height / this.dpr / 2
    ) {
      quadrant = 0b11;
    } else {
      quadrant = 0b10;
    }
    const isSunHovered = component instanceof Sun;
    const borderRadius = 10;
    const popupWidth = 210;
    let maxHeight = 0;
    let minHeight = Number.MAX_VALUE;
    this.ctx.save();
    let topLeftPoint = new Vector2(drawPosition.x, drawPosition.y);
    this.ctx.font = `${wrappedTextFontSize}px Questrial`;
    const mockedWrappedText = wrapText(
      this.ctx,
      this.hoveredPlanet.content,
      topLeftPoint.x + 5,
      topLeftPoint.y + 23,
      wrappedTextMaxWidth,
      wrappedTextLineHeight
    );
    mockedWrappedText.forEach((line) => {
      if (line[2] > maxHeight) {
        maxHeight = line[2] as number;
      }
      if (line[2] < minHeight) {
        minHeight = line[2] as number;
      }
    });

    const popupHeight = headerHeight + maxHeight - minHeight + 27 + 40;
    // mockedWrappedText.length * 10;
    // -
    // (mockedWrappedText[2][2] as number);
    //isSunHovered ? 135 : 175;
    this.ctx.restore();
    const width = quadrant % 2 === 0 ? popupWidth : -popupWidth;
    const height = (quadrant & 0b10) === 0b10 ? -popupHeight : popupHeight;

    if (quadrant === 0b01) {
      topLeftPoint = topLeftPoint.add(new Vector2(-popupWidth, 0));
    } else if (quadrant === 0b11) {
      topLeftPoint = topLeftPoint.add(new Vector2(-popupWidth, -popupHeight));
    } else if (quadrant === 0b10) {
      topLeftPoint = topLeftPoint.add(new Vector2(0, -popupHeight));
    }

    this.ctx.save();
    drawRoundRect(
      this.ctx,
      quadrant % 2 === 0
        ? drawPosition.add(new Vector2(borderRadius, 0))
        : drawPosition.subtract(new Vector2(borderRadius, 0)),
      drawPosition,
      borderRadius,
      width,
      height
    );
    this.ctx.fillStyle = `rgba(255,255,255,0.95)`;
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.restore();

    if (!this.hoveredPlanet || !this.sun) {
      return;
    }
    this.ctx.save();

    this.ctx.font = "20px Questrial";
    this.ctx.textAlign = "start";
    this.ctx.fillText(
      this.sun.time !== "beyond" ? "In " + this.sun.time : "Beyond...",
      topLeftPoint.x + 5,
      topLeftPoint.y + 20
    );

    this.ctx.font = `${wrappedTextFontSize}px Questrial`;

    const wrappedText = wrapText(
      this.ctx,
      this.hoveredPlanet.content,
      topLeftPoint.x + 5,
      topLeftPoint.y + 23,
      wrappedTextMaxWidth,
      wrappedTextLineHeight
    );

    let lastLineHeight = 0;

    wrappedText.forEach((item, index) => {
      if (index === wrappedText.length - 1) {
        lastLineHeight = item[2] as number;
      }
      this.ctx.fillText(
        String(item[0]).trim(),
        item[1] as number,
        (item[2] as number) + 20
        // lineHeightOffset
      );
    });

    this.ctx.fillStyle = "rgba(0,0,0, 0.95)";
    this.ctx.fillText(
      "Sentence Positvity: " + this.hoveredPlanet.sentimentDegree,
      topLeftPoint.x + 5,
      lastLineHeight + 20 + 40
    );

    this.ctx.restore();

    // this.ctx.fillStyle = component.foreColor;
    // this.ctx.fill();
    // this.ctx.textAlign = "start";
    // this.ctx.textBaseline = "top";
    // this.ctx.fillStyle = "black";

    // // this.ctx.font = "12px Noto Sans KR";
    // this.ctx.font = "bold 20px Anek Devanagari";
    // this.ctx.fillStyle = "white";

    // const titleYPos = topLeftPoint.y + popupPadding + 5;
    // this.ctx.fillText(component.name, topLeftPoint.x + popupPadding, titleYPos);

    // this.ctx.textAlign = "start";
    // this.ctx.font = "normal 10px Noto Sans KR";
    // //correlation to btc
    // const marketCapYPos = titleYPos + 20 + 2;

    // this.ctx.fillStyle = "black";

    // this.ctx.save();
    // this.ctx.fillStyle = dataIndex % 2 === 0 ? "#D9D9D9" : "#BCBCBC";
    // dataIndex++;
    // this.ctx.fillRect(topLeftPoint.x, marketCapYPos, popupWidth, rectHeight);
    // this.ctx.restore();

    // let correlationYPos = marketCapYPos;
    // //correlation to btc
    // if (!isSunHovered) {
    //   correlationYPos = correlationYPos + rectHeight;
    //   this.ctx.save();
    //   this.ctx.fillStyle = dataIndex % 2 === 0 ? "#D9D9D9" : "#BCBCBC";
    //   dataIndex++;
    //   this.ctx.fillRect(
    //     topLeftPoint.x,
    //     correlationYPos,
    //     popupWidth,
    //     rectHeight
    //   );
    //   this.ctx.restore();
    //   this.ctx.font = "normal 10px Noto Sans KR";
    //   this.ctx.fillText(
    //     this.language === Language.ENGLISH
    //       ? "Correlation to BTC (Distance from Sun)"
    //       : "BTC와의 가격 변동 유사성 (태양과의 거리)",
    //     topLeftPoint.x + popupPadding,
    //     correlationYPos + rectPadding
    //   );
    //   this.ctx.font = "bold 14px Noto Sans KR";
    //   // this.ctx.fillText(
    //   //   (component as Planet).correlationCoefficient.toFixed(5),
    //   //   topLeftPoint.x + popupPadding,
    //   //   correlationYPos + rectPadding + 15
    //   // );
    // }

    // const relativeStrengthYPos = correlationYPos + rectHeight;
    // this.ctx.save();
    // this.ctx.fillStyle = dataIndex % 2 === 0 ? "#D9D9D9" : "#BCBCBC";
    // dataIndex++;
    // this.ctx.fillRect(
    //   topLeftPoint.x,
    //   relativeStrengthYPos,
    //   popupWidth,
    //   rectHeight
    // );
    // this.ctx.restore();
    // //Moving average
    // this.ctx.font = "normal 10px Noto Sans KR";
    // const rsiText =
    //   this.language === Language.ENGLISH
    //     ? "Relative Strength Index (Spaceship in/out)"
    //     : "RSI 과매수 정도 (우주선 유입/출입)";
    // this.ctx.fillText(
    //   isSunHovered ? rsiText.split("(")[0] : rsiText,
    //   topLeftPoint.x + popupPadding,
    //   relativeStrengthYPos + rectPadding
    // );

    // const mfiYPos = relativeStrengthYPos + rectHeight;
    // this.ctx.save();
    // this.ctx.fillStyle = dataIndex % 2 === 0 ? "#D9D9D9" : "#BCBCBC";
    // dataIndex++;
    // this.ctx.fillRect(topLeftPoint.x, mfiYPos, popupWidth, rectHeight);
    // this.ctx.restore();

    // this.ctx.font = "normal 10px Noto Sans KR";
    // const mfiText =
    //   this.language === Language.ENGLISH
    //     ? "Money Flow Index (Planet Ice Age)"
    //     : "MFI 과매수 정도 (행성 빙하기 정도)";
    // this.ctx.fillText(
    //   isSunHovered ? mfiText.split("(")[0] : mfiText,
    //   topLeftPoint.x + popupPadding,
    //   mfiYPos + rectPadding
    // );

    // //clip
    // drawRoundRect(
    //   this.ctx,
    //   quadrant % 2 === 0
    //     ? drawPosition.add(new Vector2(borderRadius, 0))
    //     : drawPosition.subtract(new Vector2(borderRadius, 0)),
    //   drawPosition,
    //   borderRadius,
    //   width,
    //   height
    // );
    // this.ctx.clip();

    // const increaseRatioYPos = mfiYPos + rectHeight;
    // this.ctx.save();
    // this.ctx.fillStyle = dataIndex % 2 === 0 ? "#D9D9D9" : "#BCBCBC";
    // dataIndex++;
    // this.ctx.fillRect(
    //   topLeftPoint.x,
    //   increaseRatioYPos,
    //   popupWidth,
    //   rectHeight
    // );
    // this.ctx.restore();

    // this.ctx.font = "normal 10px Noto Sans KR";
    // const increaseRatioText =
    //   this.language === Language.ENGLISH
    //     ? "MA Increase Rate (Orbit Speed)"
    //     : "가격 이동평균선 증가율 (행성 공전속도)";
    // this.ctx.fillText(
    //   isSunHovered ? increaseRatioText.split("(")[0] : increaseRatioText,
    //   topLeftPoint.x + popupPadding,
    //   increaseRatioYPos + rectPadding
    // );

    // this.ctx.restore();
  }

  setSun(
    name: string,
    foreColor: string,
    backColor: string,
    time: string,
    avgBuzz: number,
    minBuzz: number,
    maxBuzz: number
  ) {
    if (foreColor) {
      const getRGBFromForeColor = foreColor
        .trim()
        .split("(")[1]
        .split(")")[0]
        .split(",") as [string, string, string];
      this.currentFrontierColor = {
        r: parseInt(getRGBFromForeColor[0]),
        g: parseInt(getRGBFromForeColor[1]),
        b: parseInt(getRGBFromForeColor[2]),
      };
    }
    if (!this.sun) {
      this.sun = new Sun(
        this.element,
        name,
        time,
        foreColor,
        backColor,
        avgBuzz,
        this.dpr,
        minBuzz,
        maxBuzz
      );
    } else {
      this.sun.update({ name, time, totalBuzz: avgBuzz, foreColor: foreColor });
    }
  }

  setPlanet(
    frontierDataList: Array<FrontierData>,
    time: "2025" | "2030" | "2040" | "2050" | "beyond",
    totalBuzz: number,
    maxIndividualPlanetBuzz: number,
    minIndividualPlanetBuzz: number,
    currentFrontierMaxBuzz: number,
    currentFrontierMinBuzz: number,
    currentFrontierAvgBuzz: number,
    maxAvgBuzz: number,
    minAvgBuzz: number
  ) {
    if (!this.sun) {
      return;
    }
    console.log(currentFrontierAvgBuzz, "avg");
    // first initialize
    this.planets = frontierDataList.map((frontierData, index) => {
      const name = frontierData.name;
      const buzz = frontierData.buzz;
      const type = frontierData.type;
      const sources = frontierData.sources;
      const urls = frontierData.urls;
      const maxBuzz = frontierDataList
        .map((data) => data.buzz)
        .sort((a, b) => b - a)[0];
      const minBuzz = frontierDataList
        .map((data) => data.buzz)
        .sort((a, b) => a - b)[0];

      const content = frontierData[time] as string;
      return new Planet(
        this.element,
        name,
        content,
        frontierData.color,
        "#aaa",
        maxBuzz,
        minBuzz,
        index / frontierDataList.length,
        buzz,
        this.dpr,
        this.sun!,
        maxIndividualPlanetBuzz,
        minIndividualPlanetBuzz,
        currentFrontierMaxBuzz,
        currentFrontierMinBuzz,
        currentFrontierAvgBuzz,
        maxAvgBuzz,
        minAvgBuzz
      );
    });
  }

  updatePlanets(data: { name: string; content: string }[]) {
    this.planets.forEach((planet) => {
      const queriedData = data.find((element) => element.name === planet.name);
      if (queriedData) {
        planet.update({
          title: queriedData.name,
          content: queriedData.content,
        });
      }
    });
  }

  addPlanet(
    name: string,
    increaseRatio: number,
    correlationCoefficient: number,
    volume: number,
    price: number,
    support: Array<number>,
    resistance: Array<number>,
    rsi: number,
    foreColor: string,
    backColor: string,
    logoImg: string,
    mfi: number
  ) {}

  initialize() {
    // this.planets.push(new Planet(this.element, this.sun.radius + 50, 1, 80));
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
    this.element.addEventListener("mousemove", this.onMouseMove);
    this.element.addEventListener("click", this.onMouseClick);
  }

  setWidth(width: number, devicePixelRatio?: number) {
    this.width = width;
    this.element.width = devicePixelRatio ? width * devicePixelRatio : width;
    this.element.style.width = `${width}px`;
  }

  setHeight(height: number, devicePixelRatio?: number) {
    this.height = height;
    this.element.height = devicePixelRatio ? height * devicePixelRatio : height;
    this.element.style.height = `${height}px`;
  }

  setSize(width: number, height: number, devicePixelRatio?: number) {
    this.setWidth(width, devicePixelRatio);
    this.setHeight(height, devicePixelRatio);
    this.dpr = devicePixelRatio ? devicePixelRatio : this.dpr;
  }

  scale(x: number, y: number) {
    this.ctx.scale(x, y);
    this.sun?.setDpr(this.dpr);
    this.planets.forEach((planet) => planet.setDpr(this.dpr));
  }

  drawBackground() {
    this.ctx.save();
    const grad = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    grad.addColorStop(0, `rgba(0, 0, 0, 0)`);
    grad.addColorStop(
      changeRelativeValueToRealValue(
        this.loop,
        0,
        this.backgroundLoopMax,
        0,
        1
      ),
      `rgba(${this.currentFrontierColor.r}, ${this.currentFrontierColor.g}, ${
        this.currentFrontierColor.b
      }, ${changeRelativeValueToRealValueInversed(
        Math.abs(this.loop - this.backgroundLoopMax / 2),
        0,
        this.backgroundLoopMax / 2,
        0,
        0.15
      )})`
    );
    grad.addColorStop(1, `rgba(0, 0, 0, 0)`);
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.restore();
  }

  render = () => {
    this.frameCount++;
    this.loop++;
    if (this.frameCount === this.fps + 1) {
      this.frameCount = 0;
    }
    if (this.loop === this.backgroundLoopMax + 1) {
      this.loop = 0;
    }
    this.clear();
    // this.drawBackground();
    this.drawScene();

    setTimeout(() => {
      requestAnimationFrame(this.render.bind(this));
    }, 1000 / this.fps);
  };

  drawScene() {
    this.drawBackground();
    this.drawGalaxyComponents();
    if (this.isPopupOpen) {
      if (this.hoveredPlanet) {
        this.drawPopup(
          this.hoveredPlanet.canvasDrawPosition,
          this.hoveredPlanet
        );
      } else {
        //sun popup
        if (this.sun) {
          this.drawPopup(this.sun.canvasDrawPosition, this.sun);
        }
      }
    }
  }

  drawDummy() {}

  drawGalaxyComponents() {
    if (this.sun) {
      this.sun.draw();
    }
    for (const planet of this.planets) {
      planet.drawTrajectory();
    }
    for (const planet of this.planets) {
      planet.draw();
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
