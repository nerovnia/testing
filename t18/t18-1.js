function User(defaultName) {
  let _name = defaultName;
  return {
    getName() {
      return _name;
    },

    setName(name) {
      _name = name;
    }
  }
}

const user = User('Jose Trumpet');
user.setName('Tina McCortney')
console.dir(user.getName());
