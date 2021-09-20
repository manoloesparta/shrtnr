import { Router } from 'itty-router'
import { makeResponse } from './shortener/utils'
import {
  shortenUrlController,
  imFeelingLuckyController,
  loginController,
  signUpController,
  getUserFullUrlController,
  shortenUserFullUrlController,
  deleteUserShortenedUrlController,
  getFullUrlController,
} from './shortener/controllers'

const router = Router()

// Public

router.get('/', () => {
  return makeResponse('Hello there', 200)
})

router.get('/:hash', request => {
  try {
    getFullUrlController(request)
    return makeResponse('', 200)
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.post('/short', request => {
  try {
    shortenUrlController(request)
    return makeResponse('', 200)
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.get('/lucky', request => {
  try {
    imFeelingLuckyController(request)
    return makeResponse('', 200)
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

// Config

router.all('*', () => makeResponse('Method not allowed', 405))

addEventListener('fetch', e => {
  e.respondWith(router.handle(e.request))
})
