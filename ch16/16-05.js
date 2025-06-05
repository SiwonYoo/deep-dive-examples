/* 16.5 객체 변경 방지 */

/* 16-10 */
(() => {
  const person = { name: "Yoo" };
  console.log(Object.isExtensible(person)); // true

  Object.preventExtensions(person);
  console.log(Object.isExtensible(person)); // false

  person.age = 20;
  console.log(person); // { name: 'Yoo' }

  delete person.name;
  console.log(person); // {}

  // Object.defineProperty(person, "age", { value: 20 });
  // TypeError: Cannot define property age, object is not extensible
})();

/* 16-11 */
(() => {
  const person = { name: "Yoo" };
  console.log(Object.isSealed(person)); // false

  Object.seal(person);
  console.log(Object.isSealed(person)); // true

  console.log(Object.getOwnPropertyDescriptors(person));
  // { name: { value: 'Yoo', writable: true, enumerable: true, configurable: false } }

  person.age = 20;
  console.log(person); // { name: 'Yoo' }

  delete person.name;
  console.log(person); // { name: 'Yoo' }

  person.name = "Lee";
  console.log(person); // { name: 'Lee' }
  Object.defineProperty(person, "name", { value: "Kim" });
  console.log(person); // { name: 'Kim' }

  // Object.defineProperty(person, "name", { configurable: true });
  // TypeError: Cannot redefine property: name
})();

/* 16-12 */
(() => {
  const person = { name: "Yoo" };
  console.log(Object.isFrozen(person)); // false

  Object.freeze(person);
  console.log(Object.isFrozen(person)); // true

  console.log(Object.getOwnPropertyDescriptors(person));
  // { name: { value: 'Yoo', writable: false, enumerable: true, configurable: false } }

  person.age = 20;
  console.log(person); // { name: 'Yoo' }

  delete person.name;
  console.log(person); // { name: 'Yoo' }

  person.name = "Lee";
  console.log(person); // { name: 'Yoo' }

  // Object.defineProperty(person, "name", { configurable: true });
  // TypeError: Cannot redefine property: name
})();
