
import { type Context } from "../types";

export function onRequestGet(context: Context): Response {
  return new Response(JSON.stringify(
    [
      { "id": 1, "text": "First" },
      { "id": 2, "text": "Second" },
      { "id": 3, "text": "Third" },
    ]
  ));
}
