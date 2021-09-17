class KVHandler {
    constructor(kv) {
        this.kv = kv
    }

    set(key, jason) {
        this.kv.put(key, jason)
    }

    get(key) {
        return this.kv.get(key)
    }
}