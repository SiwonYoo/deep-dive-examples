/* 19.10 instanceof 연산자 */

/* 19-46 */
(() => {
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  console.log(me instanceof Person); // true
  console.log(me instanceof Object); // true
})();

/* 19-47, 19-48 */
(() => {
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  // 프로토타입으로 교체할 객체
  const parent = {};

  // me 객체의 프로토타입 교체
  Object.setPrototypeOf(me, parent);

  // Person 생성자 함수와 parent 객체는 연결되어 있지 않음
  console.log(Person.prototype === parent); // false
  console.log(parent.constructor === Person); // false

  // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않음
  console.log(me instanceof Person); // false
  // Object.prototype의 me 객체의 프로토타입이 체인 상에 존재
  console.log(me instanceof Object); // true

  // parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩
  Person.prototype = parent;

  console.log(me instanceof Person); // true
  console.log(me instanceof Object); // true
})();

/* 19-49 */
(() => {
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  function isInstanceof(instance, constructor) {
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건: 프로토타입 체인의 종점(prototype === null)에 다다른 경우
    if (prototype === null) return false;

    return (
      // 위에서 취득한 prototype이 생성자 함수(constructor)의 prototype이면 true 반환
      prototype === constructor.prototype ||
      // 그렇지 않다면(false이면) 상위 프로토타입으로 이동 후 재귀 호출
      isInstanceof(prototype, constructor)
    );
  }

  console.log(isInstanceof(me, Person)); // true
  console.log(isInstanceof(me, Object)); // true
  console.log(isInstanceof(me, Array)); // false
})();

/* 19-50 */
(() => {
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      },
    };

    return Person;
  })();

  const me = new Person("Lee");

  // constructor 연결이 파괴되어도 instanceof는 아무런 양향을 받지 않는다.
  console.log(me.constructor === Person); // false

  // Person.prototype이 me 객체의 프로토타입 체인 상에 존재
  console.log(me instanceof Person); // true
  // Object.prototype이 me 객체의 프로토타입 체인 상에 존재
  console.log(me instanceof Object); // true
})();
