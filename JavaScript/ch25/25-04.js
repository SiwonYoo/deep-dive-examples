/* 25.4 인스턴스 생성 */

/* 25-08 */
(() => {
  class Person {}

  // 인스턴스 생성
  const me = new Person();
  console.log(me); // Person {}
})();

(() => {
  class Person {}

  const me = Person(); // TypeError: Class constructor Person cannot be invoked without 'new'
})();

(() => {
  const Person = class MyClass {};

  console.log(MyClass); // ReferenceError: MyClass is not defined
  const you = new MyClass(); // ReferenceError: MyClass is not defined
})();
