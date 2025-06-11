/* 19.11 직접 상속 */

/* 예제 19-51 */
(() => {
  // 프로토타입이 null인 객체를 생성한다. 프로토타입 체인의 종점에 위치한다.
  let obj = Object.create(null);
  console.log(Object.getPrototypeOf(obj) === null); // true
  // Object.prototype을 상속받지 못한다.
  // console.log(obj.toString()); // TypeError: obj.toString is not a function

  // obj = {};
  obj = Object.create(Object.prototype);
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

  // obj = { x: 1 };
  obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 2 },
  });
  console.log(obj.x); // 1
  console.log(obj.y); // 2
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

  const myProto = { x: 10 };
  obj = Object.create(myProto);
  console.log(obj.x); // 10
  console.log(Object.getPrototypeOf(obj) === myProto); // true

  function Person(name) {
    this.name = name;
  }
  // obj = new Person('Lee');
  obj = Object.create(Person.prototype);
  // obj.name = "Lee";
  console.log(obj.name); // Lee
  console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

  console.log(Person.name); // Person // 함수 객체의 이름(정적 속성) this.name과 무관
  console.log(obj.name); // Lee
  console.log("***", obj.keys);
  console.log(obj.hasOwnProperty("name"));
})();

/* 19-52 */
(() => {
  const obj = { a: 1 };

  console.log(obj.hasOwnProperty("a")); // true
  console.log(obj.propertyIsEnumerable("a")); // true
})();

/* 19-53 */
(() => {
  const obj = Object.create(null);
  obj.a = 1;

  console.log(Object.getPrototypeOf(obj) === null); // true
  // console.log(obj.hasOwnProperty("a")); // TypeError: obj.hasOwnProperty is not a function
})();

/* 19-54 */
() => {
  const obj = Object.create(null);
  obj.a = 1;

  console.log(Object.prototype.hasOwnProperty.call(obj, "a")); // true
};

(() => {
  const myProto = { x: 10 };

  const obj = {
    y: 20,
    __proto__: myProto,
  };

  console.log(obj.x, obj.y); // 10 20
  console.log(Object.getPrototypeOf(obj) === myProto); // true

  console.log(obj.hasOwnProperty("x")); // false
  console.log(obj.__proto__.hasOwnProperty("x")); // true
})();
