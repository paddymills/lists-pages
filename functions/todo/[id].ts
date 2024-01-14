
export function onRequestGet(context: EventContext) {
  return new Response(`Got request for todo id ${context.params.id}`)
}
