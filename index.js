import { Router } from 'itty-router'
import { makeResponse, endpointHandler } from './shrtnr/utils'
import {
  imFeelingLuckyController,
  getFullUrlController,
  createShortenUrlController,
} from './shrtnr/controllers'
import { KVHandler } from './shrtnr/handlers'

const router = Router()

router.get('/', () => {
  const res = JSON.stringify({ message: 'hello there' })
  return makeResponse(res, 200)
})

router.get('/:hash', request => {
  return endpointHandler(getFullUrlController, request)
})

router.post('/short', async request => {
  let h = new KVHandler(URL_HASH);
  let b = h.get("a.com");
  console.log(b)
  return endpointHandler(createShortenUrlController, await request.json())
})

router.get('/lucky', request => {
  return endpointHandler(imFeelingLuckyController, request)
})

router.all('*', () => makeResponse('Method not allowed', 405))

addEventListener('fetch', async e => {
  e.respondWith(router.handle(e.request));
})
