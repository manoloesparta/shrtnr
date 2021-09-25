export class KVHandler {
  constructor(kv) {
    this.kv = kv
  }

  async set(key, jason) {
    await this.kv.put(key, jason)
  }

  async get(key) {
    return await this.kv.get(key)
  }

  async keys() {
    const everything = await this.kv.list()
    return everything.keys
  }
}
