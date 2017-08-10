let defineProps = require('../Object/defineProps');


let inMemoryStorage = new class InMemoryStorage {
    constructor() {
        this.storage = Object.create(null);
        this.length = 0;
    }
    
    getItem(key) {
        let { storage } = this;
        return (key in storage) ? storage[key] : null;
    }
    setItem(key, value) {
        let { storage } = this;
        storage[key] = value;
        this.length = Object.keys(storage).length;
    }
    removeItem(key) {
        let { storage } = this;
        delete storage[key];
        this.length = Object.keys(storage).length;
    }
    clear() {
        for (let key of Object.keys(this.storage))
          this.removeItem(key);
    }
    key(index) {
        return (index >= 0 && index < this.length) ? Object.keys(this.storage)[index] : null;
    }
}();

/**
 * Class representing administration for a single storage key.
 */
class Storage {
    constructor(key, options = {}) {
        if (!key)
          throw new Error('Storage: Constructor called without a key.');
        
        if (typeof options === 'string')
          options = { type: options };
        options = Object.assign({
            type: 'localStorage',
            serialize: JSON.stringify,
            deserialize: JSON.parse,
        }, options);
        
        let { type, serialize, deserialize } = options;
        defineProps(this, {
            key: [key],
            storage: [Storage.getSupportedStorage(type)],
            serialize: [serialize],
            deserialize: [deserialize],
        });
    }
    
    static getSupportedStorage(preferredType) {
        if (preferredType === 'localStorage' && 'localStorage' in window)
          return window.localStorage;
        else if (preferredType === 'sessionStorage' && 'sessionStorage' in window)
          return window.sessionStorage;
        return inMemoryStorage;
    }
    
    get() {
        return this.deserialize(this.storage.getItem(this.key));
    }
    set(value) {
        this.storage.setItem(this.key, this.serialize(value));
    }
    remove() {
        this.storage.removeItem(this.key);
    }
    exists() {
        return this.get() !== null;
    }
}


module.exports = Storage;