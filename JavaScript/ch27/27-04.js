/* 27.4 배열 생성 */

/* 27-29 */
(() => {
  const arr1 = Array.from({ length: 3 }, (_, i) => i);
  console.log(arr1); // [ 0, 1, 2 ]

  const arr2 = Array.from({ length: 3 }, (_, i) => {
    console.log(_); // undefined undefined undefined
    return i;
  });
  console.log(arr2); // [ 0, 1, 2 ]
})();
