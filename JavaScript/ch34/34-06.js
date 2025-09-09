/* 34.6 사용자 정의 이터러블 */

/* 34-12 */
(() => {
  // 피보나치 수열을 구현한 사용자 정의 이터러블
  const fibonacci = {
    // symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
    [Symbol.iterator]() {
      let [pre, cur] = [0, 1];
      const max = 10;

      return {
        // Symbol.iterator 메서드는 next 메서드를 반환해야 한다.
        next() {
          [pre, cur] = [cur, pre + cur];

          // next 메서드는 이터레이터 리절트 객체를 반환해야 한다.
          return { value: cur, done: cur >= max };
        },
      };
    },
  };

  for (const num of fibonacci) {
    console.log(num);
  } // 1 2 3 5 8
})();
