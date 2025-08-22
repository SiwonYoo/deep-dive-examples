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

/* 27-118 */
(() => {
  const values = [1, [2, 3], 4, [5, 6]];
  const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
  console.log(flatten); // [ 1, 2, 3, 4, 5, 6 ]

  const makeFlatten = (values) => {
    return values.reduce((acc, cur) => acc.concat(cur), []);
  };

  const valuesDepth1 = [1, [2, 3], 4, [5, 6]];
  console.log(makeFlatten(valuesDepth1)); // [ 1, 2, 3, 4, 5, 6 ]

  // 깊이 1까지만 평탄화
  valuesDepth2 = [1, [[2, 3], 4], [5, 6]];
  console.log(makeFlatten(valuesDepth2)); // [ 1, [ 2, 3 ], 4, 5, 6 ]
  // 중첩 함수 이용
  console.log(makeFlatten(makeFlatten(valuesDepth2))); // [ 1, 2, 3, 4, 5, 6 ]

  // 메서드 체이닝 이용
  console.log(valuesDepth2.reduce((acc, cur) => acc.concat(cur), []).reduce((acc, cur) => acc.concat(cur), [])); // [ 1, 2, 3, 4, 5, 6 ]

  // 원본 배열 수정 X
  console.log(values); // [ 1, [ 2, 3 ], 4, [ 5, 6 ] ]
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
