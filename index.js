addEventListener('fetch', event => {
  const method = event.request.method

  if (method == 'GET') {
    event.respondWith(getAllDailys(event.request))
  } else if (method == 'POST') {
    event.respondWith(createDaily(event.request))
  } else if (method == 'PUT') {
    event.respondWith(updateDaily(event.request))
  } else if (method == 'DELETE') {
    event.respondWith(removeDaily(event.request))
  } else {
    event.respondWith(methodNotAllowed(event.request))
  }
})

async function getAllDailys(request) {
  return makeResponse('Here are all dailyes')
}

async function createDaily(request) {
  return makeResponse('New daily created')
}

async function removeDaily(request) {
  return makeResponse('Daily deleted')
}

async function updateDaily(request) {
  return makeResponse('Daily updated')
}

async function methodNotAllowed(request) {
  return makeResponse('Method not allowed')
}

function makeResponse(content) {
  return new Response(content, { headers: { 'content-type': 'text/plain' } })
}
