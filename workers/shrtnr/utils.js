export function makeResponse(text, status, ctype = 'application/json') {
  return new Response(text, {
    status: status,
    headers: { 'Content-Type': ctype },
  })
}

export async function endpointHandler(
  func,
  request,
  ctype = 'application/json',
) {
  try {
    const res = await func(request)
    return makeResponse(res, 200, ctype)
  } catch (err) {
    console.error(err, err.stack)
    return makeResponse('Internal server error', 500, ctype)
  }
}

export async function getJson(request) {
  return await request.json()
}

export function randomInt(max) {
  return Math.floor(Math.random() * max)
}

export const notFoundWebsite = `
<h1>Shortened link not found</h1>
`
