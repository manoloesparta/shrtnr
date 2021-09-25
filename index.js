import { Router } from 'itty-router'
import { makeResponse } from './shrtnr/utils'
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

router.get('/:hash', request => {
  try {
    getFullUrlController(request)
    return makeResponse('', 200)
  } catch (err) {
    console.error(err, err.stack)
    return makeResponse(' interal error', 500)
  }
})

router.post('/short', request => {
  try {
    const res = createShortenUrlController(request)
    return makeResponse(res, 200)
  } catch (err) {
    console.error(err, err.stack)
    return makeResponse('Internal server error', 500)
  }
})

router.get('/lucky', request => {
  try {
    imFeelingLuckyController(request)
    return makeResponse('', 200)
  } catch (err) {
    console.error(err, err.stack)
    return makeResponse('Internal server error', 500)
  }
})

router.all('*', () => makeResponse('Method not allowed', 405))

addEventListener('fetch', e => {
  e.respondWith(router.handle(e.request))
})
