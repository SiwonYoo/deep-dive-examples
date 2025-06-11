/* 19.12 정적 프로퍼티/메서드 */

/* 19-56 */
(() => {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 정적 프로퍼티
  Person.staticProp = "staticProp";
  // 정적 메서드
  Person.staticMethod = function () {
    console.log("staticMethod");
  };

  const me = new Person("Lee");

  me.sayHello(); // Hi! My name is Lee

  Person.staticMethod(); // staticMethod
  // 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해햐 한다.
  // me.staticMethod(); // TypeError: me.staticMethod is not a function
})();

/* 19-58 */
(() => {
  function Foo() {}

  // 프로토타입 메서드
  Foo.prototype.x = function () {
    console.log("x");
  };

  // 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다.
  const foo = new Foo();
  foo.x(); // x

  // 정적 메서드
  Foo.x = function () {
    console.log("x");
  };

  Foo.x(); // x
})();
