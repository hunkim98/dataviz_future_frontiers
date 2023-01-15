import { FrontiersContext } from "context/FrontiersContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { InfographicCanvas } from "./Canvas";

enum FrontierTime {
  "_2025" = "2025",
  "_2030" = "2030",
  "_2035" = "2035",
  "_2040" = "2040",
  "beyond" = "beyond",
}
const Infographic = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const infographicCanvasRef = useRef<InfographicCanvas | null>(null);

  const { frontiers, changeFrontier, currentFrontier } =
    useContext(FrontiersContext);

  const [time, setTime] = useState<FrontierTime>(FrontierTime._2025);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const isDeltaPositive = event.deltaY < 0;
      const isDeltaOverFifty = Math.abs(event.deltaY) > 20;
      if (isDeltaPositive && isDeltaOverFifty) {
        if (time === FrontierTime._2025) {
          setTime(FrontierTime._2030);
        } else if (time === FrontierTime._2030) {
          setTime(FrontierTime._2035);
        } else if (time === FrontierTime._2035) {
          setTime(FrontierTime._2040);
        } else if (time === FrontierTime._2040) {
          setTime(FrontierTime.beyond);
        }
      } else if (!isDeltaPositive && isDeltaOverFifty) {
        if (time === FrontierTime.beyond) {
          setTime(FrontierTime._2040);
        } else if (time === FrontierTime._2040) {
          setTime(FrontierTime._2035);
        } else if (time === FrontierTime._2035) {
          setTime(FrontierTime._2030);
        } else if (time === FrontierTime._2030) {
          setTime(FrontierTime._2025);
        }
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [time]);

  useEffect(() => {
    if (!infographicCanvasRef.current) {
      return;
    }
    const sun = infographicCanvasRef.current.sun;
    if (!sun) {
      return;
    }
    infographicCanvasRef.current.sun!.update({
      time,
    });
  }, [time]);

  useEffect(() => {
    if (!canvasRef.current) {
      return () => {};
    }
    if (!infographicCanvasRef.current) {
      const infographicCanvas = new InfographicCanvas(canvasRef.current);
      infographicCanvasRef.current = infographicCanvas;
    }
  }, [frontiers]);

  useEffect(() => {
    if (!infographicCanvasRef.current) {
      return;
    }
    if (!currentFrontier) {
      return;
    }
    infographicCanvasRef.current.setSun(
      currentFrontier.title,
      "#555",
      "#fff",
      FrontierTime._2025,
      currentFrontier.avgBuzz
    );
    infographicCanvasRef.current.setPlanet(
      currentFrontier.data,
      FrontierTime._2025
    );
  }, [currentFrontier]);

  useEffect(() => {
    const onResize = () => {
      if (!divRef.current || !infographicCanvasRef.current) {
        return;
      }
      const rect = divRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio;

      infographicCanvasRef.current.setSize(rect.width, rect.height, dpr);
      infographicCanvasRef.current.scale(dpr, dpr);
      infographicCanvasRef.current.drawScene();
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
      }}
      ref={divRef}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 5,
        }}
      >
        {frontiers &&
          Array.from(frontiers.keys()).map((frontier) => {
            return (
              <button
                key={frontier}
                onClick={() => {
                  changeFrontier(frontier);
                }}
              >
                {frontier}
              </button>
            );
          })}
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Infographic;
