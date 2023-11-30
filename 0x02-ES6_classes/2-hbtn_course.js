export default class HolbertonCourse{
  constructor(name, length, students){
    if (name.constructor.name === "String"){
      this._name = name;
    }
    if (length.constructor.name === "Number"){
      this._length = length;
    }
    if (students.constructor.name === "Array"){
      this._students = students;
    }
    return this;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get length() {
    return this._length;
  }
  set length(length) {
    this._length = length;
  }
  get students() {
    return this._students;
  }
  set students(students) {
    this._students = students;
  }
}
