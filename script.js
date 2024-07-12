'use strict';

// Constructor Function  ------------------------------------
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const shuvo = new Person('Shuvo', 1994);
// console.log(shuvo);
// const masud = new Person('Masud', 1993);
// console.log(masud);

// console.log(shuvo instanceof Person);

// Prototypes  -----------------------------------------------
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.hi = function () {
//   console.log(`Hey there `);
//   console.log(this);
// };

// Person.hi();

// shuvo.calcAge();
// masud.calcAge();

// console.log(shuvo.__proto__);
// console.log(shuvo.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(shuvo));

// Set property on prototype
// Person.prototype.species = 'Homo Sapiens';

// console.log(shuvo.species, masud.species);

// console.log(shuvo.hasOwnProperty('species'));

// console.log(Person.prototype.constructor);

// Prototypal Inheritance on built-in objects  -------------------

// console.log(shuvo.__proto__);
// // Object.prototype (top of the prototype chain)
// console.log(shuvo.__proto__.__proto__);
// console.log(shuvo.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [2, 5, 6, 2, 7, 9, 5, 6, 7, 9];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);

// CODING CHALLENGE 1  ------------------------------------------
/*
const Car = function(manufacturer, speed){
  this.manufacturer = manufacturer;
  this.speed = speed;
};

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(this.speed);
}


const car1 = new Car('BMW', 120);
car1.accelerate();
car1.brake();
car1.brake();
car1.accelerate();

const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
car2.brake();

console.log(car1, car2);
*/

// ES6 Classes  -----------------------------------------------

// class expression
// const PersonCl = class {};

// class declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods ***
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  static hey() {
    console.log(`Hi from PersonCl`);
    console.log(this);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a Full Name!`);
  }

  get fullName() {
    return this._fullName;
  }
};
*/

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// console.log(jessica.__proto__);

// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//   console.log(`Hello ${this.firstName}`);
// }

// jessica.greet();

// const alex = new PersonCl('Alex Hunt', 1991);

// PersonCl.hey();
// alex.hey();

// Custom prototype for Object.create  --------------------------
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const azim = Object.create(PersonProto);
// console.log(azim);
// azim.init('Mr Azim', 2017);

// azim.calcAge();

// console.log(azim.__proto__ === PersonProto);

// Coding Challenge 2 -----------------------------------------
/*
class CarCl {
  constructor(manufacturer, speed) {
    this.manufacturer = manufacturer;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford.speedUS);

ford.speedUS = 50;
console.log(ford);
*/

///////////////////////////////////////////////////////////////////
// Inheritance Between 'Classes': Constructor Function  -----------

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hey i'm ${this.firstName} from dept. of ${this.course}`);
};

const shuvo = new Student('Shazzad Shuvo', 1994, 'Computer Science');

console.log(shuvo);
shuvo.introduce();
// shuvo.calcAge();

console.log(shuvo.__proto__);
console.log(shuvo.__proto__.__proto__);

console.log(shuvo instanceof Student);
console.log(shuvo instanceof Person);
console.log(shuvo instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(shuvo.__proto__);
console.log(shuvo.__proto__.__proto__);
*/

// Coding Challenge 3 -------------------------------------------
/*
const Car = function(manufacturer, speed){
  this.manufacturer = manufacturer;
  this.speed = speed;
};

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function(manufacturer, speed, charge){
  Car.call(this, manufacturer, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
};

EV.prototype.accelerate = function(){
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.manufacturer} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
*/

///////////////////////////////////////////////////////////////////
// Inheritance Between 'Classes': ES6 Classes  --------------------
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods ***
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  static hey() {
    console.log(`Hi from PersonCl`);
    console.log(this);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a Full Name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hey i'm ${this.fullName} from dept. of ${this.course}`);
  }

  calcAge() {
    console.log(
      `Hi i'm ${this.fullName} and ${
        2037 - this.birthYear
      } of age but feeling like a ${2037 - this.birthYear + 10}`
    );
  }
};

const shazzad = new StudentCl('Shazzad Shuvo', 2000, 'Computer Engineering');
console.log(shazzad);
shazzad.introduce();
shazzad.calcAge();
*/

///////////////////////////////////////////////////////////////////
// Inheritance Between 'Classes': Object.create()  ----------------
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hey i'm ${this.firstName} from dept. of ${this.course}`);
};

const mike = Object.create(StudentProto);
mike.init('Mike Hopkins', 2011, 'Aeronautics');
mike.introduce();
mike.calcAge();
*/

// Encapsulation: Protected & Private class fields & Methods

// Public Fields
// Private Fields
// Public Methods
// Private Methods

class Account {
  // Public Fields
  locale = navigator.language;

  // Private Fields
  _movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  // Public Methods
  // public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
      return this;
    }
  }

  // Private Method

  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper is a static method');
  }
}

const acc1 = new Account('Shazzad', 'USD', 1111);
acc1.deposit(200);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1);

// console.log(acc1.movements);

Account.helper();

acc1.deposit(300).deposit(500).withdraw(55).requestLoan(28000).withdraw(6000);
console.log(acc1.getMovements());

/////////////////////////////////////////////////////////////
// Coding Challenge 4  --------------------------------------

class CarCl {
  constructor(manufacturer, speed) {
    this.manufacturer = manufacturer;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
};

class EVCl extends CarCl {
  #charge;
  constructor(manufacturer, speed, charge) {
    super(manufacturer, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.manufacturer} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().chargeBattery(67).accelerate().brake();
console.log(rivian.speedUS);
