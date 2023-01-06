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
  buzzIndex: number;
  timeSeries: Array<FrontierTimeSeriesData>;
}

interface FrontiersContextElements {
  frontiers: Map<string, FrontierData> | undefined;
}

const FrontiersContext = createContext<FrontiersContextElements>(
  {} as FrontiersContextElements
);

const FrontiersContextProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    GetData("frontiers.csv").then((res) => {
      console.log(res);
    });
  }, []);
  const [frontiers, setFrontiers] = useState<Map<string, FrontierData>>(
    new Map()
  );

  return (
    <FrontiersContext.Provider value={{ frontiers }}>
      {children}
    </FrontiersContext.Provider>
  );
};

export { FrontiersContext, FrontiersContextProvider };
