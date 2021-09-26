import { Short } from './models'

export class UrlsRepo {
  constructor(handler) {
    this.handler = handler
  }

  saveUrl(shrt) {
    const { url, hash } = shrt
    this.handler.set(url, hash)
  }

  getHash(url) {
    const hash = this.handler.get(url)
    return Short.withHash(url, hash)
  }

  isUrlRegistered(url) {
    const res = this.handler.get(url)
    return res !== null
  }
}

export class HashRepo {
  constructor(handler) {
    this.handler = handler
  }

  saveHash(shrt) {
    const { url, hash } = shrt
    this.handler.set(hash, url)
  }

  getUrl(hash) {
    const url = this.handler.get(hash)
    return Short.withHash(url, hash)
  }

  isHashRegistered(hash) {
    const res = this.handler.get(hash)
    return res !== null
  }

  getHashByIndex(index) {
    const all = this.handler.keys()
    const realIndex = index % all.length
    return all[realIndex]
  }

  hashesCount() {
    return this.handler.keys().length
  }
}
