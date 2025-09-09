/* 34.3 for...of 문 */

/* 32-etc p.618 */
(() => {
  function Person() {}
  Person.prototype.sayHi = function () {};

  const me = new Person();

  console.log(me.__proto__); // { sayHi: [Function (anonymous)] }

  me.sayME = function () {};

  // for...in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]] 값이 true인 프로퍼티를 순회하며 열거한다.
  for (let key in me) {
    console.log(key); // sayME sayHi
  }

  // 자신의 프로퍼티만 출력하기
  for (let key in me) {
    if (me.hasOwnProperty(key)) console.log(key); // sayME
  }
})();
