/* 25.1 클래스는 프로토타입의 문법적 설탕인가? */

/* 25-01 */
(() => {
  var Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype.sayHi = function () {
      console.log(`Hi! My name is ${this.name}`);
    };

    return Person;
  })();

  var me = new Person("Lee");
  me.sayHi();
})();
