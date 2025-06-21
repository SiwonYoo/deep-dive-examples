/* 19.8 오버라이딩과 프로퍼티 섀도잉 */

/* 19-36 ~ 19-39 */
(() => {
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
      console.log(`Hi! My name is ${this.name}`);
    };

    return Person;
  })();

  const me = new Person("Lee");

  // 인스턴스 메서드
  me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
  };

  me.sayHello(); // Hey! My name is Lee

  // 프로퍼티 삭제
  delete me.sayHello;
  me.sayHello(); // Hi! My name is Lee

  delete me.sayHello;
  me.sayHello(); // Hi! My name is Lee

  Person.prototype.sayHello = function () {
    console.log(`프로토타입 메서드 변경`);
  };
  me.sayHello(); // 프로토타입 메서드 변경

  delete Person.prototype.sayHello;
  // me.sayHello(); // TypeError: me.sayHello is not a function
})();
