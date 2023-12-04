/* 
* Приватное поле для класса
*/

function Animal(defaultName = "") {
  let _name = defaultName;
  return class AnimalClass {
    get name() {
      return _name;
    }

    set name(name) {
      _name = name;
    }
  }
}

const animal = new (Animal("rabbit"))();

console.log(animal);
console.log(animal.name);