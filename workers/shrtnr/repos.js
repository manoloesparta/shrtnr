import { Short } from './models'

export class UrlsRepo {
  constructor(handler) {
    this.handler = handler
  }

  async saveUrl(shrt) {
    const { url, hash } = shrt
    await this.handler.set(url, hash)
  }

  async getHash(url) {
    const hash = await this.handler.get(url)
    return Short.withHash(url, hash)
  }

  async isUrlRegistered(url) {
    const res = await this.handler.get(url)
    return res !== null
  }
}

export class HashRepo {
  constructor(handler) {
    this.handler = handler
  }

  async saveHash(shrt) {
    const { url, hash } = shrt
    await this.handler.set(hash, url)
  }

  async getUrl(hash) {
    const url = await this.handler.get(hash)
    return Short.withHash(await url, hash)
  }

  async isHashRegistered(hash) {
    const res = await this.handler.get(hash)
    return res !== null
  }

  async getHashByIndex(index) {
    const all = await this.handler.keys()
    const specific = await all[index]
    return specific.name
  }

  async hashesCount() {
    const keys = await this.handler.keys()
    return keys.length
  }
}
