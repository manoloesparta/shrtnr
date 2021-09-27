export function makeResponse(text, status, ctype = 'application/json') {
  return new Response(text, {
    status: status,
    headers: { 
      'Content-Type': ctype,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '86400',
    },
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

export function handleOptions(request) {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '86400',
    },
  })
}
