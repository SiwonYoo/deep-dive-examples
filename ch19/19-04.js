/* 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함성자 함수와 프로토타입 */

/* 19-18 */
(() => {
  let obj = new Object();
  console.log(obj);

  class Foo extends Object {}
  let foo = new Foo();
  console.log(foo); // Foo {}
  console.log(Foo.prototype); // {}
  console.log(Foo.prototype.constructor); // [class Foo extends Object]
  console.log(Foo.prototype.__proto__.constructor); // [Function: Object]
  console.log(foo.__proto__ === Foo.prototype); // true
  console.log(Foo.__proto__); // [Function: Object]
  console.log(Foo.prototype.__proto__); // [Object: null prototype] {}
  console.log(Foo instanceof Object); // true
  console.log(Foo.prototype instanceof Object); // true

  obj = new Object(123);
  console.log(obj, typeof obj); // [Number: 123] object

  obj = new Object("123");
  console.log(obj, typeof obj); // [String: '123'] object
})();

/* 클래스 상속 - prototype 연결 관계 */
/*
    Foo1 -------- Foo1.prototype
      ^               ^
      | (__proto__)   | (__proto__)
      |               |
    Foo2 -------- Foo2.prototype
                      ^
                      | (__proto__)
                      |
                    foo2
*/
(() => {
  class Foo1 {
    x = 2;
    log() {
      console.log(this.x);
    }
  }

  class Foo2 extends Foo1 {
    y = 3;
  }

  const foo2 = new Foo2();
  foo2.log(); // 2

  console.log(foo2.__proto__ === Foo2.prototype); // true
  console.log(foo2.__proto__ === Foo1.prototype); // false
  console.log(foo2.constructor); // [class Foo2 extends Foo1]

  console.log(Foo2.__proto__ === Foo1); // true
  console.log(Foo2.prototype.__proto__ === Foo1.prototype); // true
  console.log(Foo2.prototype.__proto__ === Foo1); // false

  console.log(Foo2.prototype instanceof Foo1); // true

  console.log(foo2.x); // 2
  foo2.log(); // 2

  console.log(foo2.hasOwnProperty("x")); // true
  console.log(foo2.hasOwnProperty("log")); // false
  console.log(foo2.__proto__.hasOwnProperty("log")); // false
  console.log(foo2.__proto__.__proto__.hasOwnProperty("log")); // true
  console.log(Foo2.prototype.__proto__.hasOwnProperty("log")); // true

  Foo2.prototype.__proto__ = {}; // 연결 끊기
  console.log(foo2.x); // 2
  // foo2.log(); // TypeError: foo2.log is not a function
})();
