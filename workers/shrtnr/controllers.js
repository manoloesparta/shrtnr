import { KVHandler } from './handlers'
import { HashRepo, UrlsRepo } from './repos'
import { Short } from './models'
import { randomInt } from './utils'

const hashRepo = new HashRepo(new KVHandler(HASH_URL))
const urlsRepo = new UrlsRepo(new KVHandler(URL_HASH))

export async function createShortenUrlController({ url }) {
  // Check url is online
  await fetch(url)

  // Assure that hasnt been registered before
  if (await urlsRepo.isUrlRegistered(url)) {
    const shrt = await urlsRepo.getHash(url)
    return shrt.toJson()
  }

  // Ensure it has a unique hash
  let shrt = new Short(url)
  while (await hashRepo.isHashRegistered(shrt.hash)) {
    shrt = new Short(url)
  }

  // Save in the corresponding kv stores
  await hashRepo.saveHash(shrt)
  await urlsRepo.saveUrl(shrt)

  // Return the url with an associated hash
  return shrt.toJson()
}

export async function getFullUrlController({ params }) {
  // Parse hash and get document
  const hash = decodeURIComponent(params.hash)
  const url = await hashRepo.getUrl(hash)

  // Return redirect html
  return url.toRedirectHtml()
}

export async function imFeelingLuckyController(request) {
  // Get a random index in valid range
  const index = randomInt(await hashRepo.hashesCount())
  const hash = await hashRepo.getHashByIndex(index)
  const shrt = await hashRepo.getUrl(hash)

  // Return associated redirect page
  return shrt.toJson()
}
