export function makeResponse(text, status) {
  return new Response(text, {
    status: status,
    headers: { 'Content-Type': 'application/json' },
  })
}
