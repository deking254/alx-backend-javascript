export default class HolbertonClass {
  constructor(size, location) {
    if (size.constructor.name === 'Number') {
      this._size = size;
    }
    if (location.constructor.name === 'String') {
      this._location = location;
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
