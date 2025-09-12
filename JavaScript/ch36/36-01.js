/* 36.1 배열 디스트럭처링 할당 */

/* 36-04 */
(() => {
  // 배열 디스트럭처링 우변은 이터러블이면 충분하다. (꼭 배열이 아니어도 된다.)

  // 사용자 정의 이터러블 (유사 배열 객체가 아닌)
  const iterable = {
    i: 0,
    max: 3,
    next() {
      return this.i < this.max ? { value: this.i++, done: false } : { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  console.log(iterable);
  //{ i: 0, max: 3, next: [Function: next],
  // [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]}

  // 배열이 아닌 이터러블을 배열 디스트럭처링 할당
  const [x, y] = iterable;
  console.log("x:", x, "y:", y); // x: 0 y: 1

  // 이터러블을 할당하지 않으면 에러가 발생한다.
  // 이터러블이 아닌 유사 배열 객체
  const likeArray = {
    0: "apple",
    1: "banana",
    length: 2,
  };

  // 이터러블이 아닌 유사 배열 객체도 배열 디스트럭처링 할당 불가
  // const [a, b] = likeArray; // TypeError: likeArray is not iterable

  // Array.from 메서드를 사용하여 배열로 변환 후 할당 가능
  const [a, b] = Array.from(likeArray);
  console.log("a:", a, "b:", b); // a: apple b: banana
})();
