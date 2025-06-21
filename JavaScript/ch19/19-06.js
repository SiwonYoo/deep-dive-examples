/* 19.6 객체 생성 방식과 프로토타입의 결정 */

/* 예제 19-28 */
(() => {
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  Person.prototype.sayHello = function () {
    console.log(`Hi: My name is ${this.name}`);
  };

  const you = new Person("Kim");
  me.sayHello(); // Hi: My name is Lee
  you.sayHello(); // Hi: My name is Kim

  console.log(Person.prototype.__proto__); // [Object: null prototype] {}
  console.log(Person.hasOwnProperty("name")); // true
  console.log(Person.__proto__); // [Function (anonymous)] Object
  console.log(Person.__proto__.__proto__); // [Object: null prototype] {}

  console.log(you instanceof Person);

  class Foo {
    x = 2;
  }
  console.log(Foo.__proto__); // [Function (anonymous)] Object
  console.log(Foo.__proto__ === Function.prototype); // true
  console.log(Foo.prototype.__proto__); // [Object: null prototype] {}

  /* 
  Function ----- Function.prototype    Object ----- Object.prototype
                        |                                 |
                      Person ---------------------- Person.prototype
                                                        |    |
                                                        me   you
  */

  console.log("***");
  console.log(Person.__proto__.constructor); // [Function: Function]
  console.log(Function.__proto__); // [Function (anonymous)] Object
  console.log(Object.__proto__); // [Function (anonymous)] Object
  console.log(Function.__proto__.constructor); // [Function: Function]

  console.log(Function.__proto__.__proto__); // [Object: null prototype] {}
  console.log(Function.__proto__.__proto__.__proto__); // null
})();

/* 자바스크립트의 특별한 내장 객체 구조 */
(() => {
  // Function은 생성자 함수이므로 Function의 인스턴스다.
  // Function 객체는 Function 생성자 함수에 의해 생성되었다. (자기참조 구조)
  // JavaScript의 내장 객체 초기화 로직에 따른 특수한 구조이기 때문
  console.log(Function instanceof Function); // true

  // Object와 Function이 서로 얽혀 있는 특별한 내장 객체 구조
  console.log(Function instanceof Object); // true
  console.log(Object instanceof Function); // true

  // 자바스크립트는 내장 객체를 초기화할 때 이런 서로 얽힌 구조를 만들어 놓는다.
  // Function, Object, Function.prototype, Object.prototype은 특별하게 설정되어 있어 일반적인 객체/함수 관계로 설명되지 않는 부분이 있다.
})();
