import { createContext, useEffect, useState } from "react";
import Papa from "papaparse";
import { GetData } from "utils/csv";

interface Props {
  children: React.ReactNode;
}

export interface FrontierTimeSeriesData {
  time: string;
  content: string;
}
export interface FrontierData {
  name: string;
  frontier: string;
  buzz: number;
  type: string;
  now: string;
  2025: string;
  2030: string;
  2040: string;
  2050: string;
  beyond: string;
  sources: string; // separated by comma
  urls: string[]; //starting from index 12
  // last index is 19
  color: string;
}

export const ExampleColorPallet = [
  "rgb(155,95,224)", //155, 95, 224
  "rgb(22,164,216)", //22, 164, 216
  "rgb(96,219,232)", //96, 219, 232
  "rgb(139,211,70)", //139, 211, 70
  "rgb(239,223,72)", //239, 223, 72
  "rgb(249,165,44)", //249, 165, 44
  "rgb(214,78,18)", //214, 78, 18
];

interface FrontiersContextElements {
  frontiers: Map<string, FrontierData[]>;
  currentFrontier: {
    title: string;
    data: FrontierData[];
    avgBuzz: number;
    totalBuzz: number;
    color: string;
  } | null;
  changeFrontier: (frontierName: string) => void;
  minMaxAvgBuzz:
    | {
        min: number;
        max: number;
      }
    | undefined;
  minMaxTotalBuzz:
    | {
        min: number;
        max: number;
      }
    | undefined;
}

const FrontiersContext = createContext<FrontiersContextElements>(
  {} as FrontiersContextElements
);

const FrontiersContextProvider: React.FC<Props> = ({ children }) => {
  const [frontiers, setFrontiers] = useState<Map<string, FrontierData[]>>(
    new Map()
  );
  const [minMaxAvgBuzz, setMinMaxAvgBuzz] = useState<{
    min: number;
    max: number;
  }>();
  const [minMaxTotalBuzz, setMinMaxTotalBuzz] = useState<{
    min: number;
    max: number;
  }>();
  const [currentFrontier, setCurrentFrontier] = useState<{
    title: string;
    data: FrontierData[];
    avgBuzz: number;
    totalBuzz: number;
    color: string;
  } | null>(null);
  const changeFrontier = (frontierName: string) => {
    const data = frontiers.get(frontierName);

    if (data) {
      console.log("data", data[0].color);
      setCurrentFrontier({
        title: frontierName,
        data,
        avgBuzz: data.reduce((acc, curr) => {
          if (curr.buzz) {
            return acc + curr.buzz / data.length;
          } else {
            return acc;
          }
        }, 0),
        totalBuzz: data.reduce((acc, curr) => {
          if (curr.buzz) {
            return acc + curr.buzz;
          } else {
            return acc;
          }
        }, 0),
        color: data[0].color,
      });
    }
  };
  useEffect(() => {
    GetData("frontiers.csv").then((res) => {
      const frontierSet = new Set<string>();
      const frontierData: FrontierData[] = [];
      let frontiersCount = 0;

      for (let i = 1; i < res.data.length; i++) {
        const row = res.data[i] as any;
        const name = row[0];
        const frontier = row[1];
        if (!frontierSet.has(frontier)) {
          frontiersCount++;
        }
        const buzz = row[2];
        const type = row[3];
        const now = row[4];
        const _2025 = row[5];
        const _2030 = row[6];
        const _2040 = row[7];
        const _2050 = row[8];
        const beyond = row[9];
        const sources = row[10];
        const urls = row.slice(11, 19);
        const data: FrontierData = {
          name,
          frontier,
          buzz: Number(buzz.replace(/,/g, "")),
          type,
          now,
          "2025": _2025,
          "2030": _2030,
          "2040": _2040,
          "2050": _2050,
          beyond,
          sources,
          urls,
          color: ExampleColorPallet[frontiersCount % ExampleColorPallet.length],
        };
        if (frontier) {
          frontierSet.add(frontier);
        }
        frontierData.push(data);
      }
      let maxAvg = 0;
      let minAvg = Number.MAX_VALUE;
      let maxTotalBuzz = 0;
      let minTotalBuzz = Number.MAX_VALUE;
      for (
        let it = frontierSet.values(), val: string = "";
        (val = it.next().value);

      ) {
        const filtered = frontierData.filter((d) => d.frontier === val);
        const avgBuzz = filtered.reduce((acc, curr) => {
          if (curr.buzz) {
            return acc + curr.buzz / filtered.length;
          } else {
            return acc;
          }
        }, 0);
        const totalBuzz = filtered.reduce((acc, curr) => {
          if (curr.buzz) {
            return acc + curr.buzz;
          } else {
            return acc;
          }
        }, 0);
        if (avgBuzz > maxAvg) {
          maxAvg = avgBuzz;
        }
        if (avgBuzz < minAvg) {
          minAvg = avgBuzz;
        }
        if (totalBuzz > maxTotalBuzz) {
          maxTotalBuzz = totalBuzz;
        }
        if (totalBuzz < minTotalBuzz) {
          minTotalBuzz = totalBuzz;
        }

        setFrontiers((prev) => {
          const newMap = new Map(prev);
          newMap.set(
            val,
            filtered.map((d) => ({ ...d, avgBuzz: avgBuzz }))
          );
          return newMap;
        });
      }
      setMinMaxTotalBuzz({ min: minTotalBuzz, max: maxTotalBuzz });
      setMinMaxAvgBuzz({ min: minAvg, max: maxAvg });
    });
  }, []);

  useEffect(() => {
    const allFrontierData = frontiers.values();
    const firstFrontier = allFrontierData.next().value;
    if (firstFrontier) {
      setCurrentFrontier({
        title: firstFrontier[0].frontier,
        data: firstFrontier,
        avgBuzz: firstFrontier.reduce((acc: any, curr: any) => {
          if (curr.buzz) {
            return acc + curr.buzz / firstFrontier.length;
          } else {
            return acc;
          }
        }, 0),
        totalBuzz: firstFrontier.reduce((acc: any, curr: any) => {
          if (curr.buzz) {
            return acc + curr.buzz;
          } else {
            return acc;
          }
        }, 0),
        color: firstFrontier[0].color,
      });
    }
    // setCurrentFrontier(frontiers)
  }, [frontiers, setCurrentFrontier]);

  return (
    <FrontiersContext.Provider
      value={{
        frontiers,
        currentFrontier,
        changeFrontier,
        minMaxAvgBuzz,
        minMaxTotalBuzz,
      }}
    >
      {children}
    </FrontiersContext.Provider>
  );
};

export { FrontiersContext, FrontiersContextProvider };
