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
console.log(person.lastName); // Lee

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
// lastName { value: 'Lee', writable: false, enumerable: false, configurable: false }

Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);
// fullName { get: [Function: get], set: [Function: set], enumerable: true, configurable: true }

person.fullName = "Heegun Lee";
console.log(person.fullName); // Heegun Lee
console.log(person); // { firstName: 'Heegun', fullName: [Getter/Setter] }

/* 16-09 */
