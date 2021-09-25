import { KVHandler } from './handlers'
import { Short } from './models'

export async function getFullUrlController(request) {}

export function createShortenUrlController(request) {
  const { url } = request.body
  const shrt = new Short(url + Date.now())

  const hashRepo = new HashRepo(new KVHandler(HASH_URL))
  const urlsRepo = new UrlsRepo(new KVHandler(URL_HASH))

  return shrt.toJson()
}

export async function imFeelingLuckyController(request) {}
