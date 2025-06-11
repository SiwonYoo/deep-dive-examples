/* 19.7 프로토타입 체임 */

/* 19-29 ~ 19.35 */
(() => {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  const me = new Person("Lee");

  console.log(me.hasOwnProperty("name")); // true

  console.log(Object.getPrototypeOf(me) === Person.prototype); // true
  console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true

  console.log(me.foo); // undefined
})();
