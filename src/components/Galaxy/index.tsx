import { CryptoContext, Language } from "context/CryptoContext";
import React, { useContext, useEffect, useRef } from "react";
import { GalaxyCanvas } from "./Canvas";
import logo from "../../assets/logo_white_gray.png";
import "./canvas.css";
import AboutPopup from "components/AboutPopup/AboutPopup";
import useHandleClickOutside from "hooks/useHandleClickOutside";

interface Props {}

const Galaxy: React.FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const galaxyCanvasRef = useRef<GalaxyCanvas | null>(null);
  const [isAboutPopupOpen, setIsAboutPopupOpen] = React.useState(false);
  const aboutPopupRef = useRef<any>(null);
  useHandleClickOutside({
    wrapperRef: aboutPopupRef,
    setOpenBooleanState: setIsAboutPopupOpen,
  });
  const { cryptoData, markets, language, setLanguage } =
    useContext(CryptoContext);

  useEffect(() => {
    if (!galaxyCanvasRef.current) {
      return;
    }
    galaxyCanvasRef.current.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (!canvasRef.current) {
      return () => {};
    }
    const galaxyCanvas = new GalaxyCanvas(canvasRef.current, markets.length);
    galaxyCanvasRef.current = galaxyCanvas;
    return () => {
      if (galaxyCanvasRef.current) {
        galaxyCanvasRef.current.destroy();
      }
    };
  }, [markets]);

  useEffect(() => {
    if (!cryptoData || !galaxyCanvasRef.current) {
      return;
    }
    for (const crypto of cryptoData) {
      if (crypto[0] === "KRW-BTC") {
        //krw-btc is sun
        if (!galaxyCanvasRef.current.sun) {
          // galaxyCanvasRef.current.setSun(
          //   crypto[0].replace("KRW-", ""),
          //   crypto[1].increaseRatio,
          //   crypto[1].foreColor,
          //   crypto[1].backColor,
          //   crypto[1].logoImg,
          //   crypto[1].volume,
          //   crypto[1].currentPrice,
          //   crypto[1].rsi,
          //   crypto[1].mfi
          // );
        } else {
          galaxyCanvasRef.current.sun.update({
            increaseRatio: crypto[1].increaseRatio,
            rsi: crypto[1].rsi,
            currentPrice: crypto[1].currentPrice,
            mfi: crypto[1].mfi,
          });
        }
      } else {
        const indexOfPlanet = galaxyCanvasRef.current.planets.findIndex(
          (element) => element.name === crypto[0].replace("KRW-", "")
        );
        if (indexOfPlanet === -1) {
          if (
            crypto[1].coefficient &&
            crypto[1].volume &&
            crypto[1].currentPrice &&
            crypto[1].support &&
            crypto[1].resistance &&
            crypto[1].rsi
          ) {
            galaxyCanvasRef.current.addPlanet(
              crypto[0].replace("KRW-", ""),
              crypto[1].increaseRatio,
              crypto[1].coefficient,
              crypto[1].volume,
              crypto[1].currentPrice,
              crypto[1].support,
              crypto[1].resistance,
              crypto[1].rsi,
              crypto[1].foreColor,
              crypto[1].backColor,
              crypto[1].logoImg,
              crypto[1].mfi
            );
          }
        } else {
          galaxyCanvasRef.current.planets[indexOfPlanet].update({
            increaseRatio: crypto[1].increaseRatio,
            coefficient: crypto[1].coefficient,
            rsi: crypto[1].rsi,
            currentPrice: crypto[1].currentPrice,
          });
        }
      }
    }
  }, [cryptoData]);

  useEffect(() => {
    const onResize = () => {
      if (!divRef.current || !galaxyCanvasRef.current) {
        return;
      }
      const rect = divRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio;

      galaxyCanvasRef.current.setSize(rect.width, rect.height, dpr);
      galaxyCanvasRef.current.scale(dpr, dpr);
      galaxyCanvasRef.current.drawScene();
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        background:
          "linear-gradient(111.08deg, rgba(0, 0, 0, 0.8) 5.71%, rgba(0, 15, 45, 0.8) 54.7%, rgba(0, 0, 0, 0.8) 98.84%)",
      }}
      ref={divRef}
    >
      <div style={{ position: "absolute", width: 200, left: 20, top: 30 }}>
        <img src={logo} style={{ width: "100%", height: "auto" }} alt="logo" />
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",

          right: 50,
          top: 50,
          fontSize: 11,
          color: "white",
          fontFamily: "Noto Sans KR",
        }}
      >
        <div
          onClick={() => {
            setLanguage(Language.KOREAN);
          }}
          style={{
            padding: "0px 5px",
            opacity: language === Language.KOREAN ? 0.6 : 0.3,
            cursor: "pointer",
          }}
        >
          KOR
        </div>
        <div style={{ opacity: 0.3 }}> | </div>
        <div
          onClick={() => {
            setLanguage(Language.ENGLISH);
          }}
          style={{
            padding: "0px 5px",
            opacity: language === Language.ENGLISH ? 0.6 : 0.3,
            cursor: "pointer",
          }}
        >
          ENG
        </div>
      </div>
      <AboutPopup
        isOpen={isAboutPopupOpen}
        setIsOpen={setIsAboutPopupOpen}
        language={language}
      />
      <div
        className="question_button"
        onClick={() => setIsAboutPopupOpen((prev) => !prev)}
      >
        ?
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Galaxy;
