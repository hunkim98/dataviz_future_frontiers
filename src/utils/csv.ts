import Papa from "papaparse";

async function fetchCsv(fileName: string) {
  const response = await fetch(`${process.env.PUBLIC_URL}/data/${fileName}`);
  const reader = response.body!.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = await decoder.decode(result.value);
  return csv;
}
export async function GetData(fileName: string) {
  const data = Papa.parse(await fetchCsv(fileName));
  return data;
}
