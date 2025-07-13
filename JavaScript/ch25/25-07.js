/* 25.7 프로퍼티 */

/* 25-34 */
(() => {
  class Person {
    constructor(name) {
      // 인스턴스 프로퍼티
      this.name = name;
    }
  }

  const me = new Person("Kim");

  console.log(me); // Person { name: 'Kim' }
  console.log(me.name); // Kim
})();

/* 25-36, 37 */
(() => {
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    // setter 함수
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(" ");
    }
  }

  const me = new Person("Ungmo", "Lee");
  console.log(me); // Person { firstName: 'Ungmo', lastName: 'Lee' }

  // 데이터 프로퍼티를 통한 프로퍼티 값 참조
  console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee

  // 접근자 프로퍼티를 통한 프로퍼티 값 저장
  me.fullName = "Heegun Lee";
  console.log(me); // Person { firstName: 'Heegun', lastName: 'Lee' }

  // 접근자 프로퍼티를 통한 프로퍼티 값 참조
  console.log(me.fullName); // Heegun Lee

  console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));
  // { get: [Function: get fullName], set: [Function: set fullName], enumerable: false, configurable: true }

  console.log(
    Object.getOwnPropertyNames(me), // [ 'firstName', 'lastName' ]
    Object.getOwnPropertyNames(Object.getPrototypeOf(me)) // [ 'constructor', 'fullName'
  );
})();

/* 25-40 */
(() => {
  class Person {
    // 클래스 필드 정의
    name = "Lee";
  }

  const me = new Person();
  console.log(me); // Person { name: 'Lee' }
})();

/* 25-42 */
(() => {
  // class Person {
  //   this.name='Kim';
  // }
})();

/* 25-41 */
(() => {
  class Person {
    name = "Lee";

    constructor() {
      // console.log(name); // ReferenceError: name is not defined
    }
  }

  new Person();
})();

/* 25-43 */
(() => {
  class Person {
    name;
  }

  const me = new Person();
  console.log(me); // Person { name: undefined }
})();

/* 25-44, 45 */
(() => {
  class Person {
    name;

    constructor(name) {
      this.name = name;
    }
  }

  const me = new Person("Lee");
  console.log(me); // Person { name: 'Lee' }
})();

/* 25-46 */
(() => {
  class Person {
    name = "Lee";

    getName = function () {
      return this.name;
    };

    getName2 = () => this.name;
  }
  const me = new Person();
})();

/* 25-50 */
(() => {
  class Person {
    #name = "";

    constructor(name) {
      this.#name = name;
    }
  }

  const me = new Person("Lee");

  // console.log(me.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
})();

/* 25-51 */
(() => {
  class Person {
    // private 필드 정의
    #name = "";

    constructor(name) {
      this.#name = name;
    }

    // 접근자 프로퍼티
    get name() {
      return this.#name.trim();
    }
  }

  const me = new Person("  Lee  ");
  console.log(me.name); // Lee
})();

/* 25-52 */
(() => {
  class Person {
    // #name; // 추가하면 에러 안 남
    constructor(name) {
      // this.#name = name; // SyntaxError: Private field '#name' must be declared in an enclosing class
    }
  }
})();

/* 25-53 */
(() => {
  class MyMath {
    static PI = 22 / 7;

    static #num = 10;

    static #increment() {
      return ++MyMath.#num;
    }

    static publicI;
  }

  console.log(MyMath.PI); // 3.142857142857143
  console.log(MyMath.increment()); // 11
})();
