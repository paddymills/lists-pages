import { Context } from "../types";

export function onRequestGet(context: Context) {
  return new Response(`Got request for todo id ${context.params.id}`)
}
