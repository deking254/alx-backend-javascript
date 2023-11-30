import Currency from "./3-currency";

export default class Pricing{
  constructor(amount, currency){
    if (amount.constructor.name === "Number"){
      this._amount = amount;
    }
    if (currency.constructor.name === "Currency"){
      this._currency = currency;
    }
  }
  get amount(){
    return this._amount;
  }
  set amount(amount){
    this._amount = amount;
  }
  get currency(){
    return this._currency;
  }
  set currency(currency){
    this._currency = currency;
  }
  displayFullPrice(){
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
  static convertPrice(amount, conversionRate){
    if (amount.constructor.name === "Number"){
      this._amount = amount;
    }
    if (conversionRate.constructor.name === "Number"){
      this._conversionRate = conversionRate;
    }
    return this._amount * this._conversionRate;
  }
}
