addEventListener('fetch', event => {
    event.respondWith(handler(event.request))
});

async function handler(request) {
  return makeResponse('stuff', 200)
}

function makeResponse(content, statusCode) {
  return new Response(content, {
    headers: { 'content-type': 'application/json' },
    status: statusCode,
  })
}
