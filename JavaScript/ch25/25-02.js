/* 25.2 클래스 정의 */

/* 25-04 */
(() => {
  class Person {
    // ① constructor (생성자)
    constructor(name) {
      this.name = name;
    }

    // ② 프로토타입 메서드
    sayHi() {
      console.log(`Hi! My name is ${this.name}`);
    }

    // ③ 정적 메서드
    static sayHello() {
      console.log("Hello!");
    }
  }

  // 인스턴스 생성
  const me = new Person("Lee");

  console.log(me); // Person { name: 'Lee' }

  console.log(me.name); // Lee
  me.sayHi(); // Hi! My name is Lee
  Person.sayHello(); // Hello!
})();
