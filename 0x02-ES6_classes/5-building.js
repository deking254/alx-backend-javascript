export default class Building {
  constructor(sqft){
    if (sqft.constructor.name === "Number") {
      this._sqft = sqft;
      if (!this.hasOwnProperty("evacuationWarningMessage")) {
        throw new Error("Class extending Building must override evacuationWarningMessage");
      }
    }
  }
  get sqft() {
    return this._sqft;
  }
  evacuationWarningMessage() {
     
  }
}
