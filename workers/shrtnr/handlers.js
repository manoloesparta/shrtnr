export class KVHandler {
  constructor(namespace) {
    this.namespace = namespace
  }

  async set(key, jason) {
    const res = await this.namespace.put(key, jason)
    return res
  }

  async get(key) {
    const res = await this.namespace.get(key)
    return res
  }

  async keys() {
    const everything = await this.namespace.list()
    return everything.keys
  }
}
