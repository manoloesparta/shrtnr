class UrlsRepo {
  constructor(handler) {
    this.handler = handler
  }

  saveUrl(url) {
    const { link, hash } = url
    this.handler.set(link, hash)
  }

  getHash(link) {
    return this.handler.get(link)
  }
}

class HashRepo {
  constructor(handler) {
    this.handler = handler
  }

  saveHash(url) {
    const { link, hash } = url
    this.handler.set(hash, link)
  }

  getLink(hash) {
    return this.handler.get(hash)
  }
}
