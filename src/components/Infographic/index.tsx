import { ExampleColorPallet, FrontiersContext } from "context/FrontiersContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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

  const {
    frontiers,
    changeFrontier,
    currentFrontier,
    minMaxAvgBuzz,
    minMaxTotalBuzz,
  } = useContext(FrontiersContext);

  const notify = (time: string) =>
    toast(`Timeline set to ${time}`, {
      icon: "👏",
      style: {
        fontFamily: "Roboto",
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  const [time, setTime] = useState<FrontierTime>(FrontierTime._2025);

  useEffect(() => {
    notify(time);
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
    if (time === sun.time) {
      return;
    }

    infographicCanvasRef.current.sun!.update({
      time,
      totalBuzz: currentFrontier?.totalBuzz,
    });
    if (!currentFrontier) {
      return;
    }
    const updatedData = currentFrontier.data.map((frontier) => ({
      name: frontier.name,
      content: frontier[time as "2025" | "2030" | "2040" | "2050" | "beyond"],
    }));
    infographicCanvasRef.current.updatePlanets(updatedData);
  }, [time, currentFrontier]);

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
    if (!minMaxAvgBuzz) {
      return;
    }
    if (!minMaxTotalBuzz) {
      return;
    }
    console.log("min", minMaxAvgBuzz.min, "max", minMaxAvgBuzz.max);
    console.log("avg", currentFrontier.avgBuzz);
    infographicCanvasRef.current.setSun(
      currentFrontier.title,
      currentFrontier.color,
      "#fff",
      FrontierTime._2025,
      currentFrontier.totalBuzz,
      minMaxTotalBuzz.min,
      minMaxTotalBuzz.max
    );
    infographicCanvasRef.current.setPlanet(
      currentFrontier.data,
      FrontierTime._2025,
      currentFrontier.totalBuzz
    );
  }, [currentFrontier, minMaxAvgBuzz, minMaxTotalBuzz]);

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
        backgroundColor: "black",
      }}
      ref={divRef}
    >
      {/* <Toaster position="bottom-center" /> */}
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 60px)",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 5,
          flexWrap: "wrap",
          marginTop: 20,
          padding: "0 30px",
        }}
      >
        {frontiers &&
          Array.from(frontiers.keys()).map((frontier, index) => {
            const frontierData = frontiers.get(frontier);
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: currentFrontier?.title === frontier ? "#555" : "",
                  borderRadius: 5,
                  padding: 5,
                  cursor: "pointer",
                }}
                onClick={() => {
                  changeFrontier(frontier);
                }}
              >
                <div
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: frontierData
                      ? frontierData[0].color
                      : "white",
                  }}
                ></div>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                  key={frontier}
                >
                  {frontier}
                </button>
              </div>
            );
          })}
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Infographic;
