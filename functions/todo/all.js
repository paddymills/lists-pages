
export function onRequestGet(context) {
  return new Response(JSON.stringify(
    [
      { "id": 1, "text": "First" },
      { "id": 2, "text": "Second" },
      { "id": 3, "text": "Third" },
    ]
  ));
}
