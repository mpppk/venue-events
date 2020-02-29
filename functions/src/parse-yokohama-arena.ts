import { JSDOM } from "jsdom";
import { YokohamaArenaData, YokohamArenaEvent } from "./model";

export const parseYokohamaArenaHTML = (html: string): YokohamArenaEvent[] => {
  const lines = html.split(/\r\n|\r|\n/);
  const dataLine = lines.filter(line => line.includes("var data ="))[0];
  const dataStr = dataLine.replace("var data = ", "").replace(";", "");
  const data: YokohamaArenaData = JSON.parse(dataStr);
  return data.events.map(e => e.event);
};
