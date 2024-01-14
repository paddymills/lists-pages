export function onRequest(context: EventContext) {
  console.log(context);
  return new Response("Hello from the test function!");
}
