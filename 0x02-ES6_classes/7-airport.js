export default class Airport {
  constructor(name, code) {
    if (name.constructor.name === 'String') {
      this._name = name;
    }
    if (code.constructor.name === 'String') {
      this._code = code;
    }
  }
  toString() {
    return `[object ${this._code}]`;
  }
}
