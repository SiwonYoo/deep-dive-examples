/* 26.5 매개변수 기본값 */

/* 26-62 */
(() => {
  function sum(x, y = 0, z) {
    console.log("arguments:", arguments);
    console.log("sum:", x + y + z);
  }

  console.log(sum.length); // 1

  sum(1);
  // arguments: [Arguments] { '0': 1 }
  // sum: NaN

  sum(1, 2);
  // arguments: [Arguments] { '0': 1, '1': 2 }
  // sum: NaN

  sum(1, 2, 3);
  // arguments: [Arguments] { '0': 1, '1': 2, '2': 3 }
  // sum: 6

  sum(1, undefined, 3);
  // arguments: [Arguments] { '0': 1, '1': undefined, '2': 3 }
  // sum: 4
})();
