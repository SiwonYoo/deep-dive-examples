/* 19.09 프로토타입의 교체 */

/* 19-40, 19-41 */
(() => {
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      },
    };

    return Person;
  })();

  const me = new Person("Lee");
  me.sayHello(); // Hi! My name is Lee

  console.log(me.constructor); // [Function: Object]
  console.log(me.constructor === Person); // false
  console.log(me.constructor === Object); // true

  // 교체하지 않았다면, me.constructor === Person => true
})();

(() => {
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  console.log("교체 전:", me.constructor); // 교체 전: [Function: Person]
  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false
  console.log(Person.prototype); // {}
  console.log(me.__proto__.hasOwnProperty("constructor")); // true
  console.log(Object.getOwnPropertyDescriptors(me.__proto__));
  // { constructor: { value: [Function: Person], writable: true, enumerable: false, configurable: true } }

  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };

  const you = new Person("Kim");

  console.log("교체 후:", you.constructor); // 교체 후: [Function: Object]
  console.log(you.constructor === Person); // false
  console.log(you.constructor === Object); // true
  console.log(Person.prototype); // { sayHello: [Function: sayHello] }
  console.log(you.__proto__.hasOwnProperty("constructor")); // false
  console.log(Object.getOwnPropertyDescriptors(you.__proto__));
  // { sayHello: { value: [Function: sayHello], writable: true, enumerable: true, configurable: true } }

  // me.__proto__와 Person의 연결 관계 확인
  // me.__proto__(기존 prototype)에서 Person에는 접근 가능하나,
  // Person에서 me.__proto__에는 접근할 수 없다. (단방향 연결)
  console.log(me.__proto__); // {}
  console.log(me.__proto__.constructor); // [Function: Person]
  console.log(me.__proto__.constructor.prototype); // { sayHello: [Function: sayHello] }
  console.log(me.__proto__.constructor.prototype.constructor); // [Function: Object] // Object.prototpye의 constructor (프로토타입 체인을 타고 올라감)
})();

/* 19-42 */
(() => {
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      constructor: Person,
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      },
    };

    return Person;
  })();

  const me = new Person("Lee");
  me.sayHello(); // Hi! My name is Lee

  console.log(me.constructor); // [Function: Person]
  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false
})();

/* 19-43, 19-44 */
(() => {
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  const parent = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };

  Object.setPrototypeOf(me, parent); // me.__proto__ = parent

  me.sayHello(); // Hi! My name is Lee

  console.log(me.constructor); // [Function: Object]
  console.log(me.constructor === Person); // false
  console.log(me.constructor === Object); // true
})();

/* 19-45 */
(() => {
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  const parent = {
    constructor: Person,
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };

  Person.prototype = parent;

  Object.setPrototypeOf(me, parent); // me.__proto__ = parent

  me.sayHello(); // Hi! My name is Lee

  console.log(me.constructor); // [Function: Person]
  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false

  console.log(Person.prototype === Object.getPrototypeOf(me)); // true
})();
