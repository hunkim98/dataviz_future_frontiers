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
  increaseRatio: number;
  foreColor: string;
  backColor: string;
  name: string;
  dpr: number;
  logoImage: HTMLImageElement;
  volume: number;
  price: number;
  rsi: number;
  canvasDrawPosition: Vector2;
  mfi: number;
  avgBuzzFeed: number = 0;
  constructor(
    canvas: HTMLCanvasElement,
    name: string,
    increaseRatio: number,
    foreColor: string,
    backColor: string,
    dpr: number,
    logoImg: string,
    volume: number,
    price: number,
    rsi: number,
    mfi: number,
    avgBuzzFeed: number
  ) {
    const logoImage = new Image();
    this.rsi = rsi;
    logoImage.src = logoImg;
    this.volume = volume;
    this.price = price;
    this.logoImage = logoImage;
    this.canvas = canvas;
    this.foreColor = foreColor;
    this.backColor = backColor;
    this.name = name;
    this.dpr = dpr;
    this.increaseRatio = increaseRatio;
    this.canvasDrawPosition = convertCartesianToScreenPoint(
      this.canvas,
      this.position,
      this.dpr
    );
    this.mfi = mfi;
    this.setBrightness(increaseRatio);
    this.avgBuzzFeed = avgBuzzFeed;
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
      this.increaseRatio = data.increaseRatio;
      this.setBrightness(data.increaseRatio);
    }
    if (data.currentPrice) {
      this.price = data.currentPrice;
    }
    if (data.rsi) {
      this.rsi = data.rsi;
    }
    if (data.mfi) {
      this.mfi = data.mfi;
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

  drawLogo(drawPosition: Vector2, ctx: CanvasRenderingContext2D) {
    ctx.save();
    const imageSize = Sun.radius * 1;
    ctx.globalAlpha = 0.8;
    ctx.drawImage(
      this.logoImage,
      drawPosition.x - imageSize / 2,
      drawPosition.y - imageSize / 2,
      imageSize,
      imageSize
    );
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
    this.drawLogo(drawPosition, ctx);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
    ctx.font = "18px Righteous";
    ctx.fillText(this.name, drawPosition.x, drawPosition.y + Sun.radius + 20);
  }

  setDpr(dpr: number) {
    this.dpr = dpr;
  }
}
