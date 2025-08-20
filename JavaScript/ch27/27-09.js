/* 27.9 배열 고차 함수 */

/* 27-etc (p.538) */
(() => {
  const arr = [1, 2, 3];
  const result = arr.map((x) => {
    console.log(x);
  });
  console.log("arr", arr); // arr [ 1, 2, 3 ]
  console.log("result", result); // result [ undefined, undefined, undefined ]
})();

/* 27-128 */
(() => {
  // some: 하나라도 조건을 만족하면 true 반환
  // 조건을 만족하면 바로 순회 종료. 남은 요소는 돌지 않음.
  const result = [5, 10, 15].some((item) => {
    console.log(item); // 5 10
    return item >= 10;
  });

  console.log("result", result); // result true
})();
