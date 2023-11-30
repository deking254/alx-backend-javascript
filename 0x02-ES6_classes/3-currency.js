export default class Currency {
  constructor(code, name){
    if (code.constructor.name === "String"){
      this._code = code;
    }
    if (name.constructor.name === "String"){
      this._name = name;
    }
  }
  get code(){
    return this._code;
  }
  set code(code){
    this._code = code;
  }
  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }
  displayFullCurrency(){
    return `${this._name} (${this._code})`;
  }
}
