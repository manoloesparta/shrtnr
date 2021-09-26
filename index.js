import { Router } from 'itty-router'
import { 
  makeResponse, 
  endpointHandler,
  notFoundWebsite 
} from './shrtnr/utils'
import {
  imFeelingLuckyController,
  getFullUrlController,
  createShortenUrlController,
} from './shrtnr/controllers'

const router = Router()

router.get('/', () => {
  const res = JSON.stringify({ message: 'hello there' })
  return makeResponse(res, 200)
})

router.get('/null', request => {
  return makeResponse(notFoundWebsite, 200, 'text/html')
})

router.get('/lucky', async request => {
  return endpointHandler(imFeelingLuckyController, request)
})

router.get('/:hash', async request => {
  return endpointHandler(getFullUrlController, request, 'text/html')
})

router.post('/short', async request => {
  return endpointHandler(createShortenUrlController, await request.json())
})

router.all('*', () => makeResponse('Method not allowed', 405))

addEventListener('fetch', async e => {
  e.respondWith(router.handle(e.request))
})
