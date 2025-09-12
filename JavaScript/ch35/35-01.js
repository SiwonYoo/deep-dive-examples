/* 35. 스프레드 문법 */

/* 35-01 */
(() => {
  console.log(...[1, 2, 3]); // 1 2 3

  // 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
  // console.log(...{ a: 1, b: 2 }); // TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
  // ECMAScript2018에서 추가되었지만, 객체 리터럴 내부에서만 사용하능하다.
  console.log({ ...{ a: 1, b: 2 } }); // { a: 1, b: 2 }

  // [...] 배열 전개 연산자에 들어가는 값은 이터러블이어야 한다.
  // console.log([...{ a: 1, b: 2 }]); // TypeError: {(intermediate value)(intermediate value)} is not iterable

  console.log({ ...[1, 2, 3] }); // { '0': 1, '1': 2, '2': 3 }
})();
