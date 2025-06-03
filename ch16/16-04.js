/* 16.4 프로퍼티 정의 */

/* 16-08 */
const person = {};

Object.defineProperty(person, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);
// firstName { value: 'Ungmo', writable: true, enumerable: true, configurable: true }

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
// lastName { value: 'Lee', writable: false, enumerable: false, configurable: false }

console.log(Object.keys(person)); // [ 'firstName' ]

person.lastName = "Kim";
console.log(person.lastName); // Lee

delete person.lastName;
console.log(person.lastName);
