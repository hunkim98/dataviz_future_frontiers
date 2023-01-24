import { CryptoDataFields } from "context/CryptoContext";
import {
  changeRelativeValueToRealValue,
  changeRelativeValueToRealValueInversed,
} from "utils/clamp";
import { generateRandomName } from "utils/generateRandomName";
import { convertCartesianToScreenPoint } from "../../utils/cartesian";
import { Vector2 } from "../../utils/math/Vector2";
import { Rotator2D } from "../../utils/rotator2d";
import { Spaceship, SpaceshipDirection } from "./Spaceship";
import { Sun } from "./Sun";
import { returnRandomInRange } from "utils/randomInRange";
import Sentiment from "sentiment";
import { wrapText } from "utils/text";

export class Planet {
  name: string;
  canvas: HTMLCanvasElement;
  rotator: Rotator2D;
  radius: number;
  position: Vector2;
  speed: number;
  distanceFromSun: number;
  spaceShips: Array<Spaceship>;
  ctx: CanvasRenderingContext2D;
  greenness: number | null = null;
  spaceShipDirection = SpaceshipDirection.IN;
  //   spaceShipCount: number;
  //   spaceShipDirection: SpaceshipDirection;
  //   spaceShipRegenerationInterval: number;
  foreColor: string;
  // iceAgeImage: HTMLImageElement;
  backColor: string;
  isPopupOpen: boolean = false;
  content: string;
  canvasDrawPosition: Vector2;
  dpr: number;
  buzz: number;
  maxBuzzIndex: number;
  minBuzzIndex: number;
  sentimentDegree: number;
  sun: Sun;
  constructor(
    canvas: HTMLCanvasElement,
    name: string,
    content: string,
    foreColor: string,
    backColor: string,
    maxBuzzIndex: number,
    minBuzzIndex: number,
    angleTiltRatio: number,
    buzz: number,
    dpr: number,
    sun: Sun
  ) {
    this.name = name;
    this.sun = sun;
    this.buzz = buzz;
    this.maxBuzzIndex = maxBuzzIndex;
    this.minBuzzIndex = minBuzzIndex;
    this.content = content;
    this.foreColor = foreColor;
    this.backColor = backColor;
    this.canvas = canvas;
    this.rotator = new Rotator2D(angleTiltRatio * 360);
    this.radius = changeRelativeValueToRealValue(
      buzz,
      minBuzzIndex,
      maxBuzzIndex,
      60,
      100
    );
    this.spaceShips = [];
    this.ctx = this.canvas.getContext("2d")!;
    this.distanceFromSun = 300;
    this.speed = 0.05;
    this.dpr = dpr;

    const sentiment = new Sentiment();
    this.sentimentDegree = sentiment.analyze(this.content).score;
    const positionAffineVector = new Vector2(this.distanceFromSun, 0).toAffine(
      true
    );
    const rotateAffineMatrix = this.rotator.getRotateAffineMatrix();

    this.position = rotateAffineMatrix
      .multiplyVector(positionAffineVector)
      .toVector2();
    this.canvasDrawPosition = convertCartesianToScreenPoint(
      this.canvas,
      this.position,
      this.dpr
    );
    // this.setSpaceShip();
  }

  update(data: Partial<{ title: string; time: string; content: string }>) {
    if (data.content !== undefined) {
      this.content = data.content;
      const sentiment = new Sentiment();
      this.sentimentDegree = sentiment.analyze(this.content).score;
    }
  }

  setSpaceshipInformation(rsi: number) {
    let spaceShipCount = 0;
    let spaceShipDirection: SpaceshipDirection = SpaceshipDirection.IN;
    let spaceShipRegenerationInterval = 20000;
    if (rsi >= 70) {
      spaceShipCount = 3;
      spaceShipDirection = SpaceshipDirection.IN;
      spaceShipRegenerationInterval = 1000;
      // this.iceAgeImage.src = "";
    } else if (60 <= rsi && rsi < 70) {
      spaceShipCount = 1;
      spaceShipDirection = SpaceshipDirection.IN;
      spaceShipRegenerationInterval = 10000;
      // this.iceAgeImage.src = "";
    } else if (40 <= rsi && rsi < 60) {
      spaceShipCount = 0;
      spaceShipDirection = SpaceshipDirection.OUT;
      spaceShipRegenerationInterval = 20000;
      // this.iceAgeImage.src =
      // iceAgeLevel1[Math.floor(Math.random() * iceAgeLevel1.length)];
    } else if (30 <= rsi && rsi < 40) {
      spaceShipCount = 1;
      spaceShipDirection = SpaceshipDirection.OUT;
      spaceShipRegenerationInterval = 10000;
      // this.iceAgeImage.src =
      // iceAgeLevel2[Math.floor(Math.random() * iceAgeLevel2.length)];
    } else {
      spaceShipCount = 3;
      spaceShipDirection = SpaceshipDirection.OUT;
      spaceShipRegenerationInterval = 1000;
      // this.iceAgeImage.src =
      // iceAgeLevel3[Math.floor(Math.random() * iceAgeLevel3.length)];
    }
    return {
      spaceShipCount,
      spaceShipDirection,
      spaceShipRegenerationInterval,
    };
  }

  calcSpeed(increaseRatio: number) {
    const maxSpeed = 0.3;
    const minSpeed = 0.02;

    const speed = changeRelativeValueToRealValue(
      increaseRatio,
      0,
      1,
      minSpeed,
      maxSpeed
    );
    return speed;
  }

  calcDistanceFromSun(correlationCoefficient: number) {
    const minDistance = this.sun.radius + 30 + this.radius;
    const maxDistance = (this.canvas.height + 260) / this.dpr / 2;

    const relativeToRadian = changeRelativeValueToRealValueInversed(
      // the bigger the correlation coefficient
      // the more similar is it to the sun
      correlationCoefficient,
      -0.001,
      0.1,
      (Math.PI * 85) / 180,
      (Math.PI * 89.9) / 180
    );
    // ln x derivative is 1/x
    const tanOfRadian = Math.tan(relativeToRadian);

    const distance = changeRelativeValueToRealValue(
      // the bigger the correlation coefficient
      // the more similar is it to the sun
      tanOfRadian,
      Math.tan((Math.PI * 85) / 180),
      Math.tan((Math.PI * 89.9) / 180),
      minDistance,
      maxDistance
    );
    return distance;
  }

  getCanvasOuterTrajectoryPoint() {
    const rotatorAdvanceAmount = 20;
    const bandWidthDegree = 3;
    const minRotatorDegree =
      this.rotator.degree + rotatorAdvanceAmount - bandWidthDegree;
    const maxRotatorDegree =
      this.rotator.degree + rotatorAdvanceAmount + bandWidthDegree;
    const criterionRotator = new Rotator2D(
      Math.random() * (maxRotatorDegree - minRotatorDegree) + minRotatorDegree
      // Math.random() *
      //   (this.rotator.degree +
      //     bandWidthDegree -
      //     //this can be a number like 370
      //     (this.rotator.degree - bandWidthDegree) +
      //     this.rotator.degree -
      //     bandWidthDegree)
    );
    let quadrant = 0b00; //1st qudrant

    if (criterionRotator.degree <= 90 && criterionRotator.degree >= 0) {
      quadrant = 0b00;
    } else if (criterionRotator.degree <= 180) {
      quadrant = 0b01;
    } else if (criterionRotator.degree <= 270) {
      quadrant = 0b11;
    } else {
      quadrant = 0b10;
    }
    criterionRotator.clamp();

    const canvasEdgeStartPointOffset = 100;
    const isBoundToY = Math.abs(Math.tan(criterionRotator.toRadian())) > 1;
    if (isBoundToY) {
      const y =
        quadrant <= 0b01
          ? (this.canvas.height + canvasEdgeStartPointOffset) / 2
          : -(this.canvas.height + canvasEdgeStartPointOffset) / 2;
      const x = y / Math.tan(criterionRotator.toRadian());
      return { edgePosition: new Vector2(x, y), edgeRotator: criterionRotator };
    } else {
      const x =
        quadrant % 2 === 0
          ? (this.canvas.width + canvasEdgeStartPointOffset) / 2
          : -(this.canvas.width + canvasEdgeStartPointOffset) / 2;
      const y = Math.tan(criterionRotator.toRadian()) * x;
      return { edgePosition: new Vector2(x, y), edgeRotator: criterionRotator };
    }
  }
  setSpaceShip() {
    const { edgePosition, edgeRotator } = this.getCanvasOuterTrajectoryPoint();
    if (this.spaceShips.length < 3) {
      this.spaceShips.push(
        new Spaceship(
          this.canvas,
          edgePosition,
          this.rotator,
          edgeRotator,
          this,
          this.spaceShipDirection,
          generateRandomName(),
          this.dpr
        )
      );
    }
  }

  drawSpaceShips() {
    for (const spaceShip of this.spaceShips) {
      spaceShip.draw();
    }
  }

  removeSpaceShip(spaceShipId: string) {
    this.spaceShips = this.spaceShips.filter(
      (spaceShip) => spaceShip.id !== spaceShipId
    );
  }

  setIsPopupOpen(isPopupOpen: boolean) {
    this.isPopupOpen = isPopupOpen;
  }

  drawTrajectory() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(
      this.canvas.width / this.dpr / 2,
      this.canvas.height / this.dpr / 2,
      this.distanceFromSun,
      0,
      2 * Math.PI,
      false
    );
    this.ctx.strokeStyle = this.foreColor;
    this.ctx.globalAlpha = 0.3;
    this.ctx.lineWidth = 0.5;
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.restore();
  }

  drawOverlay(drawPosition: Vector2) {
    this.ctx.save();
    this.ctx.beginPath();

    this.ctx.lineWidth = 0;
    this.ctx.strokeStyle = "none";

    this.ctx.arc(drawPosition.x, drawPosition.y, this.radius, 0, 2 * Math.PI);
    if (!this.content) {
      this.ctx.fillStyle = `rgba(80, 80, 80, 1)`;
    } else {
      this.ctx.fillStyle = `rgba(255, 255, 255, ${changeRelativeValueToRealValueInversed(
        this.sentimentDegree,
        0,
        5,
        0,
        0.5
      )})`;
    }
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  draw() {
    this.drawSpaceShips();
    this.rotator.degree += this.speed;
    const positionAffineVector = new Vector2(this.distanceFromSun, 0).toAffine(
      true
    );
    const rotateAffineMatrix = this.rotator.getRotateAffineMatrix();
    this.position = rotateAffineMatrix
      .multiplyVector(positionAffineVector)
      .toVector2();
    this.canvasDrawPosition = convertCartesianToScreenPoint(
      this.canvas,
      this.position,
      this.dpr
    );
    // color the planet
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(
      this.canvasDrawPosition.x,
      this.canvasDrawPosition.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    this.ctx.fillStyle = this.foreColor;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    this.drawOverlay(this.canvasDrawPosition);

    this.ctx.save();

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    // this.ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
    const fontSize = 14;
    const lineHeight = 20;
    this.ctx.font = `bold ${fontSize}px Questrial`;
    const wrappedText = wrapText(
      this.ctx,
      this.name,
      this.canvasDrawPosition.x,
      this.canvasDrawPosition.y,
      this.radius,
      lineHeight
    );

    wrappedText.forEach((item) => {
      let lineHeightOffset = 0;
      if (wrappedText.length > 2) {
        lineHeightOffset = ((lineHeight * 1) / 4) * (wrappedText.length - 2);
      }
      this.ctx.fillText(
        String(item[0]).trim(),
        item[1] as number,
        (item[2] as number) -
          (wrappedText.length - 1) * (fontSize / 2) -
          lineHeightOffset
        // lineHeightOffset
      );
    });
    // this.ctx.fillText(
    //   this.rotator.degree.toFixed(2),
    //   drawPosition.x,
    //   drawPosition.y + this.radius + 30
    // );

    this.ctx.restore();
  }
  setDpr(dpr: number) {
    this.dpr = dpr;
    this.spaceShips.forEach((spaceShip) => spaceShip.setDpr(dpr));
  }
}
