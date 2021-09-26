export function makeResponse(text, status) {
  return new Response(text, {
    status: status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function endpointHandler(func, request) {
  try {
    const res = await func(request)
    return makeResponse(res, 200)
  } catch (err) {
    console.error(err, err.stack)
    return makeResponse('Internal server error', 500)
  }
}

export async function getJson(request) {
  return await request.json()
}

export function randomInt(max) {
  return Math.floor(Math.random() * max) + 1
}
