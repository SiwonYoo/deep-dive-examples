/* 25.5 메서드 */

/* 25-11 */
(() => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
})();

/* 25-14 */
(() => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  const me = new Person("Kim");
  console.log(me); // Person { name: 'Kim' }
})();

/* 25-15 */
(() => {
  // class Person {
  //   constructor(){}
  //   constructor(){}
  // } // SyntaxError: A class may only have one constructor
})();

/* 25-16 */
(() => {
  class Person {
    constructor() {}
  }

  const me = new Person();
  console.log(me); // Person {}
})();

/* 25-18 */
(() => {
  class Person {
    constructor() {
      this.name = "Lee";
      this.address = "Seoul";
    }
  }

  const me = new Person();
  console.log(me); // Person { name: 'Lee', address: 'Seoul' }
})();

/* 25-19*/
(() => {
  class Person {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
  }

  const me = new Person("Kim", "Busan");
  console.log(me); // Person { name: 'Kim', address: 'Busan' }
})();

/* 25-20 */
(() => {
  class Person {
    constructor(name) {
      this.name = name;

      return {};
    }
  }

  const me = new Person("Lee");
  console.log(me); // {}
})();

/* 25-21 */
(() => {
  class Person {
    constructor(name) {
      this.name = name;

      return 100;
    }
  }

  const me = new Person("Lee");
  console.log(me); // Person { name: 'Lee' }
})();

/* 25-23 */
(() => {
  class Person {
    // constructor(생성자)
    constructor(name) {
      this.name = name;
    }

    // 프로토타입 메서드
    sayHi() {
      console.log(`Hi! My name is ${this.name}`);
    }
  }

  const me = new Person("Lee");
  me.sayHi(); // Hi! My name is Lee
})();

/* 25-26, 27, 28 */
(() => {
  class Person {
    // constructor(생성자)
    constructor(name) {
      this.name = name;
    }

    // 정적 메서드
    static sayHi() {
      console.log("Hi!");
    }
  }

  Person.sayHi(); // Hi!

  const me = new Person("Lee");
  // me.sayHi(); // TypeError: me.sayHi is not a function
})();

/* 25-29, 30 */
(() => {
  class Square {
    // ① constructor (생성자)
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    // ② 프로토타입 메서드
    area1() {
      return this.width * this.height;
    }

    // ③ 정적 메서드
    static area2(width, height) {
      return width * height;
    }
  }

  // 인스턴스 생성
  const square = new Square(10, 10);

  // area1: 프로토타입 메서드
  console.log(square.area1()); // 100
  // console.log(Square.area1()); // TypeError: Square.area1 is not a function

  // area2: 정적 메서드
  // console.log(square.area2(10, 10)); // TypeError: square.area2 is not a function
  console.log(Square.area2(10, 10)); // 100
})();

/* 25-31 */
(() => {
  // 표준 빌트인 객체의 정적 메서드
  Math.max(1, 2, 3); // 3
  Number.isNaN(NaN); // true
  JSON.stringify({ a: 1 }); // {"a":1}
  Object.is({}, {}); // false
  Reflect.has({ a: 1 }, "a"); // true
})();
