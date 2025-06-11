/* 19.3 __proto__ 접근자 프로퍼티 */

/* 19-06 */
(() => {
  const obj = {};
  const parent = { x: 1 };

  console.log(obj.x); // undefined
  console.log(obj.__proto__); // [Object: null prototype] {}
  console.log(parent.__proto__); // [Object: null prototype] {}

  obj.__proto__;
  obj.__proto__ = parent;

  console.log(obj.x); // 1
  console.log(obj.__proto__.x === obj.x); // true
})();

/* 19-07 */
(() => {
  const person = { name: "Lee" };
  console.log(person.hasOwnProperty("__proto__")); // false
  console.log(Object.prototype.hasOwnProperty("__proto__")); // true
  console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
  // { get: [Function: get __proto__], set: [Function: set __proto__], enumerable: false, configurable: true }
  console.log({}.__proto__ === Object.prototype); // true

  // getPrototypeof
  console.log(Object.prototype.hasOwnProperty("getPrototypeOf")); // false
  console.log(Object.hasOwnProperty("getPrototypeOf")); // true
})();

/* 19-09 */
(() => {
  const obj = Object.create(null, { name: { value: "Yoo", enumerable: true } });
  console.log(obj); // [Object: null prototype] { name: 'Yoo' }
  console.log(obj.name); // Yoo

  console.log(obj.__proto__); // undefined
  console.log(Object.getPrototypeOf(obj)); // null
  console.log(obj.constructor); // undefined
})();

/* 19-10 */
(() => {
  const obj = {};
  const parent = { x: 1 };

  console.log(obj); // {}
  console.log(Object.getPrototypeOf(obj)); // [Object: null prototype] {}
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

  Object.setPrototypeOf(obj, parent);
  console.log(Object.getPrototypeOf(obj)); // { x: 1 }
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // false
  console.log(Object.getPrototypeOf(obj) === parent); // true

  console.log(obj.x); // 1
})();
