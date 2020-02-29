import { JSDOM } from "jsdom";
import * as fs from "fs";
import { parseYokohamaArenaHTML } from "../src/parse-yokohama-arena";

describe("parseYokohamaArena", () => {
  const filePath = "__tests__/data/arena.html";
  const html = fs.readFileSync(filePath).toString();

  it("parse data of yokohama arena", async () => {
    const events = parseYokohamaArenaHTML(html);
    expect(events).toHaveLength(14);
  });
});
