/* 19.13 프로퍼티 존재 확인 */

/* 19-59, 19-60 */
(() => {
  const person = { name: "Lee" };

  console.log("name" in person); // true
  console.log("age" in person); // false

  console.log("toString" in person); // true
})();

/* 19-61 */
(() => {
  const person = { name: "Lee" };

  console.log(Reflect.has(person, "name")); // true
  console.log(Reflect.has(person, "age")); // false

  console.log(Reflect.has(person, "toString")); // true
})();

/* 19-62, 19-63 */
(() => {
  const person = { name: "Lee" };

  console.log(person.hasOwnProperty("name")); // true
  console.log(person.hasOwnProperty("age")); // false

  console.log(person.hasOwnProperty("toString")); // false
})();

/* 19-64 */
(() => {
  const person = {
    name: "Lee",
    address: "Seoul",
  };

  for (const key in person) {
    console.log(key + ": " + person[key]);
    // name: Lee
    // address: Seoul
  }
})();

/* 19-67 ~ 19-69 */
(() => {
  const person = {
    name: "Lee",
    address: "Seoul",
    __proto__: { age: 20 },
  };

  for (const key in person) {
    console.log(key + ": " + person[key]);
    // name: Lee
    // address: Seoul
    // age: 20
  }

  // Object.prototype.toString 프로퍼티의 [[Enumerable]] 값은 false이기 때문에 for...in 문으로 열거할 수 없다.
  console.log("toString" in person); // true
  console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
  // { value: [Function: toString], writable: true, enumerable: false, configurable: true }

  console.log(Object.getOwnPropertyDescriptor(person, "__proto__")); // undefined
  console.log(Object.getPrototypeOf(person)); // { age: 20 }
  console.log("__proto__" in person); // true
})();

/* 19-68 */
(() => {
  const sym = Symbol();
  const obj = {
    a: 1,
    [sym]: 10,
  };

  for (const key in obj) {
    console.log(key + ": " + obj[key]);
    // a: 1
  }
})();

/* 19-69 */
(() => {
  const person = {
    name: "Lee",
    address: "Seoul",
    __proto__: { age: 20 },
  };

  for (const key in person) {
    // 객체 자신의 프로퍼티인지 확인한다.
    if (person.hasOwnProperty(key)) console.log(key + ": " + person[key]);
    // name: Lee;
    // address: Seoul;
  }
})();

/* 19-71 */
(() => {
  const arr = [1, 2, 3];
  arr.x = 10; // 배열도 객체이므로 프로퍼티를 추가할 수 있다.

  // for...in 문
  for (const i in arr) {
    console.log(`${i}: ${arr[i]}`);
    // 0: 1
    // 1: 2
    // 2: 3
    // x: 10
  }

  // 일반 for 문
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i}: ${arr[i]}`);
    // 0: 1
    // 1: 2
    // 2: 3
  }

  // forEach 문
  arr.forEach((v) => console.log(v));
  // 1
  // 2
  // 3

  // for...of 문
  for (const value of arr) {
    console.log(value);
    // 1
    // 2
    // 3
  }
})();

/* 19-72 ~ 19-74 */
(() => {
  const person = {
    name: "Lee",
    address: "Seoul",
    __proto__: { age: 20 },
  };

  console.log(Object.keys(person)); // [ 'name', 'address' ]

  console.log(Object.values(person)); // [ 'Lee', 'Seoul' ]

  console.log(Object.entries(person)); // [ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ]

  Object.entries(person).forEach(([key, value]) => console.log(key, value));
  // name Lee
  // address Seoul
})();
