
export function onRequestGet(context) {
  return new Response(`Got request for todo id ${context.params.id}`)
}
