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
  "#9b5fe0",
  "#16a4d8",
  "#60dbe8",
  "#8bd346",
  "#efdf48",
  "#f9a52c",
  "#d64e12",
];

interface FrontiersContextElements {
  frontiers: Map<string, FrontierData[]>;
  currentFrontier: {
    title: string;
    data: FrontierData[];
    totalBuzz: number;
  } | null;
  changeFrontier: (frontierName: string) => void;
}

const FrontiersContext = createContext<FrontiersContextElements>(
  {} as FrontiersContextElements
);

const FrontiersContextProvider: React.FC<Props> = ({ children }) => {
  const [frontiers, setFrontiers] = useState<Map<string, FrontierData[]>>(
    new Map()
  );
  const [currentFrontier, setCurrentFrontier] = useState<{
    title: string;
    data: FrontierData[];
    totalBuzz: number;
  } | null>(null);
  const changeFrontier = (frontierName: string) => {
    const data = frontiers.get(frontierName);
    if (data) {
      console.log(
        "from frontier",
        data.reduce((acc, curr) => {
          if (curr.buzz) {
            return acc + Number(curr.buzz);
          } else {
            return acc;
          }
        }, 0)
      );
      setCurrentFrontier({
        title: frontierName,
        data,
        totalBuzz: data.reduce((acc, curr) => {
          if (curr.buzz) {
            return acc + curr.buzz;
          } else {
            return acc;
          }
        }, 0),
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
      for (
        let it = frontierSet.values(), val: string = "";
        (val = it.next().value);

      ) {
        const filtered = frontierData.filter((d) => d.frontier === val);
        const totalBuzz = filtered.reduce((acc, curr) => {
          if (curr.buzz) {
            return acc + curr.buzz;
          } else {
            return acc;
          }
        }, 0);
        setFrontiers((prev) => {
          const newMap = new Map(prev);
          newMap.set(
            val,
            filtered.map((d) => ({ ...d, avgBuzz: totalBuzz }))
          );
          return newMap;
        });
      }
    });
  }, []);

  useEffect(() => {
    const allFrontierData = frontiers.values();
    const firstFrontier = allFrontierData.next().value;
    if (firstFrontier) {
      setCurrentFrontier({
        title: firstFrontier[0].frontier,
        data: firstFrontier,
        totalBuzz: firstFrontier.reduce((acc: any, curr: any) => {
          if (curr.buzz) {
            return acc + curr.buzz;
          } else {
            return acc;
          }
        }, 0),
      });
    }
    // setCurrentFrontier(frontiers)
  }, [frontiers, setCurrentFrontier]);

  return (
    <FrontiersContext.Provider
      value={{ frontiers, currentFrontier, changeFrontier }}
    >
      {children}
    </FrontiersContext.Provider>
  );
};

export { FrontiersContext, FrontiersContextProvider };
