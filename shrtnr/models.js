import Hashes from 'jshashes'

export class Short {
  constructor(url) {
    this.url = url
    this.hash = this.generateHash()
  }

  generateHash() {
    const SHA1 = new Hashes.SHA1()
    const hash = SHA1.hex(this.url)
    return hash.substring(0, 7)
  }

  toJson() {
    return JSON.stringify({
      url: this.url,
      hash: this.hash,
    })
  }
}
