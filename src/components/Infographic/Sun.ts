import { CryptoDataFields } from "context/CryptoContext";
import { changeRelativeValueToRealValue } from "utils/clamp";
import { wrapText } from "utils/text";
import { convertCartesianToScreenPoint } from "../../utils/cartesian";
import { Vector2 } from "../../utils/math/Vector2";

export class Sun {
  canvas: HTMLCanvasElement;
  static radius = 130;
  color = "#FFFF4D";
  brightness: number = 0;
  position: Vector2 = new Vector2(0, 0);
  MIN_BRIGHTNESS = 2;
  MAX_BRIGHTNESS = 20;
  foreColor: string;
  backColor: string;
  name: string;
  time: string;
  dpr: number;
  canvasDrawPosition: Vector2;
  totalBuzz: number;
  constructor(
    canvas: HTMLCanvasElement,
    name: string,
    time: string,
    foreColor: string,
    backColor: string,
    totalBuzz: number,
    dpr: number
  ) {
    this.name = name;
    this.totalBuzz = totalBuzz;
    this.canvas = canvas;
    this.foreColor = foreColor;
    this.backColor = backColor;
    this.name = name;
    this.time = time;
    this.dpr = dpr;
    this.canvasDrawPosition = convertCartesianToScreenPoint(
      this.canvas,
      this.position,
      this.dpr
    );
    this.setBrightness(0);
  }

  setBrightness(increaseRatio: number) {
    this.brightness = changeRelativeValueToRealValue(
      increaseRatio,
      -1,
      1,
      this.MIN_BRIGHTNESS,
      this.MAX_BRIGHTNESS
    );
  }

  drawBrightnessInner(drawPosition: Vector2, ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(
      drawPosition.x,
      drawPosition.y,
      Sun.radius + this.brightness / 2,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = this.foreColor;
    ctx.globalAlpha = 0.4;
    ctx.fill();
    ctx.restore();
  }

  update(data: Partial<{ time: string; name: string; totalBuzz: number }>) {
    if (data.time) {
      this.time = data.time;
    }
    if (data.name) {
      this.name = data.name;
    }
    if (data.totalBuzz) {
      this.totalBuzz = data.totalBuzz;
    }
  }

  drawBrightnessOuter(drawPosition: Vector2, ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(
      drawPosition.x,
      drawPosition.y,
      Sun.radius + this.brightness,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = this.foreColor;
    ctx.globalAlpha = 0.2;
    ctx.fill();
    ctx.restore();
  }

  drawSun(drawPosition: Vector2, ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(drawPosition.x, drawPosition.y, Sun.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.backColor;
    ctx.fill();
    ctx.restore();
  }
  draw() {
    const ctx = this.canvas.getContext("2d")!;
    const drawPosition = convertCartesianToScreenPoint(
      this.canvas,
      this.position,
      this.dpr
    );
    this.canvasDrawPosition = drawPosition;
    this.drawBrightnessInner(drawPosition, ctx);
    this.drawBrightnessOuter(drawPosition, ctx);
    this.drawSun(drawPosition, ctx);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
    ctx.font = "35px Righteous";
    const wrappedText = wrapText(
      ctx,
      this.name,
      drawPosition.x,
      drawPosition.y,
      200,
      35
    );
    let lastYLocation = 0;
    wrappedText.forEach((line, index) => {
      ctx.fillText(
        String(line[0]).trim(),
        line[1] as number,
        line[2] as number
      );
      lastYLocation = line[2] as number;
    });

    ctx.save();
    ctx.font = "24px Righteous";
    ctx.fillText(this.time, drawPosition.x, lastYLocation + 40);
    ctx.stroke();
  }

  setDpr(dpr: number) {
    this.dpr = dpr;
  }
}
