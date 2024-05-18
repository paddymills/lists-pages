import { Context } from "./types";

export function onRequest(context: Context) {
  console.log(context);
  return new Response("Hello from the test function!");
}
