import { Router } from 'itty-router'
import { makeResponse } from './app/utils'
import {
  shortenUrlController,
  imFeelingLuckyController,
  loginController,
  signUpController,
  getUserFullUrlController,
  shortenUserFullUrlController,
  deleteUserShortenedUrlController,
  getFullUrlController,
} from './app/controllers'

const router = Router()

// Public

router.get('/', () => {
  return makeResponse('Hello there', 200)
})

router.get('/:hash', request => {
  try {
    getFullUrlController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.post('/short', request => {
  try {
    shortenUrlController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.get('/lucky', request => {
  try {
    imFeelingLuckyController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.post('/login', request => {
  try {
    loginController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.post('/signup', request => {
  try {
    signUpController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

// User specific

router.get('/:user/short', request => {
  try {
    shortenUserFullUrlController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.post('/:user/:hash', request => {
  try {
    getUserFullUrlController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

router.delete('/:user/:hash', request => {
  try {
    deleteUserShortenedUrlController(request)
    return makeResponse('')
  } catch {
    return makeResponse('Server interal error', 500)
  }
})

// Config

router.all('*', () => makeResponse('Method not allowed', 405))

addEventListener('fetch', e => {
  e.respondWith(router.handle(e.request))
})
