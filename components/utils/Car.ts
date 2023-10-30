class Car {
  _name: string;
  _position: string;

  constructor(_name: string) {
    this._name = _name;
    this._position = "";
  }

  advance(value: number) {
    if (value >= 4) {
      this._position += "=";
    }
  }

  getName() {
    return this._name;
  }

  getPosition() {
    return this._position;
  }
}

export default Car;
