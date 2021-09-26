import { KVHandler } from './handlers'
import { HashRepo, UrlsRepo } from './repos'
import { Short } from './models'
import { randomInt } from './utils'

const hashRepo = new HashRepo(new KVHandler(HASH_URL))
const urlsRepo = new UrlsRepo(new KVHandler(URL_HASH))

export function getFullUrlController({ params }) {
  const hash = decodeURIComponent(params.hash)
  const url = hashRepo.getUrl(hash)
  return url.toJson()
}

export function createShortenUrlController({ url }) {
  if (urlsRepo.isUrlRegistered(url)) {
    const shrt = urlsRepo.getHash(url)
    return shrt.toJson()
  }

  let shrt = new Short(url)
  while (hashRepo.isHashRegistered(shrt.hash)) {
    shrt = new Short(url)
  }

  hashRepo.saveHash(shrt)
  urlsRepo.saveUrl(shrt)

  return shrt.toJson()
}

export function imFeelingLuckyController(request) {
  const index = randomInt(hashRepo.hashesCount() - 1)
  const shrt = hashRepo.getHashByIndex(index)
  return shrt.toJson()
}
