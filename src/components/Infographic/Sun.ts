import { CryptoDataFields } from "context/CryptoContext";
import { changeRelativeValueToRealValue } from "utils/clamp";
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
  dpr: number;
  canvasDrawPosition: Vector2;
  constructor(
    canvas: HTMLCanvasElement,
    name: string,
    foreColor: string,
    backColor: string,
    dpr: number
  ) {
    this.name = name;
    this.canvas = canvas;
    this.foreColor = foreColor;
    this.backColor = backColor;
    this.name = name;
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

  update(data: Partial<CryptoDataFields>) {
    if (data.increaseRatio) {
      this.setBrightness(data.increaseRatio);
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
    this.drawBrightnessInner(drawPosition, ctx);
    this.drawBrightnessOuter(drawPosition, ctx);
    this.drawSun(drawPosition, ctx);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
    ctx.font = "18px Righteous";
    ctx.fillText(this.name, drawPosition.x, drawPosition.y + Sun.radius + 20);
  }

  setDpr(dpr: number) {
    this.dpr = dpr;
  }
}
