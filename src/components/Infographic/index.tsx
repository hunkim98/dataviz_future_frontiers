import { FrontiersContext } from "context/FrontiersContext";
import React, { useContext, useEffect, useRef } from "react";
import { InfographicCanvas } from "./Canvas";

const Infographic = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const infographicCanvasRef = useRef<InfographicCanvas | null>(null);

  const { frontiers, changeFrontier, currentFrontier } =
    useContext(FrontiersContext);

  useEffect(() => {
    if (!canvasRef.current) {
      return () => {};
    }
    if (infographicCanvasRef.current) {
      return;
    }
    const infographicCanvas = new InfographicCanvas(canvasRef.current);
    infographicCanvasRef.current = infographicCanvas;
    return () => {};
  }, [frontiers]);

  useEffect(() => {
    if (!infographicCanvasRef.current) {
      return;
    }
    if (!currentFrontier) {
      return;
    }
    infographicCanvasRef.current.setSun(currentFrontier.title, "#555", "#fff");
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
