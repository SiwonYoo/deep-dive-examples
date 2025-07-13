/* 25.6 클래스의 인스턴스 생성 과정 */

/* 25-32 */
(() => {
  class Person {
    constructor(name) {
      // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다. this: Person {}

      // 2. this에 바인딩되어 있는 인스턴스를 초기화한다. this: Person { name: undefined }
      this.name = name;

      // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    }
  }

  new Person();
})();
