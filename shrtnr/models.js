import Hashes from 'jshashes'

export class Short {
  constructor(url) {
    this.url = url
    this.hash = this.generateHash()
  }

  static withHash(url, hash) {
    const shrt = new Short(url)
    shrt.hash = hash
    return shrt
  }

  generateHash() {
    const SHA1 = new Hashes.SHA1()
    const hash = SHA1.hex(this.url + Date.now())
    return hash.substring(0, 7)
  }

  toJson() {
    return JSON.stringify({
      url: this.url,
      hash: this.hash,
    })
  }
}
