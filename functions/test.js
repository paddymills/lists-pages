export function onRequest(context) {
  console.log(context);
  return new Response("Hello from the test function!");
}
