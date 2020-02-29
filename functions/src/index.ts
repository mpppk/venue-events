import * as functions from "firebase-functions";
import { JSDOM } from "jsdom";

export const helloWorld = functions.https.onRequest((request, response) => {
  JSDOM.fromURL("https://example.com/", {}).then(dom => {
    console.log(dom.serialize());
    response.send("Hello from Firebase!\n\n");
  });
});
