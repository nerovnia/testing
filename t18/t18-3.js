function Animal(type, defaultName = "") {
  let _name = defaultName;

  function rabbitRun() {
    console.log(`animal name: ${_name} _ runs with speed VERY FAST: ${this.speed}`);
  }

  function animalRun() {
    console.log(`animal name: ${_name} _ runs with speed: ${this.speed}`);
  }

  return class AnimalClass {
    speed = '20 km/h';

    get name() {
      return _name;
    }

    set name(n) {
      _name = n;
    }

    run = type === "rabbit" ? rabbitRun : animalRun; 
  }
}

const rabbitAnimal = new (Animal("rabbit", "RabbitName"))()
const commonAnimal = new (Animal("common", "CommonName"))()

rabbitAnimal.run();

commonAnimal.run();