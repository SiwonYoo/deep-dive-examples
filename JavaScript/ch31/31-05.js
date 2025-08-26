/* 31.5 패턴 */

/* 31-21 */
(() => {
  const target = "A AA B BB Aa Bb";
  const target2 = "AB BA Ba AAB";

  const regExp = /[AB]+/g;
  console.log(target.match(regExp)); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]
  console.log(target2.match(regExp)); // [ 'AB', 'BA', 'B', 'AAB' ]

  const regExp2 = /A+|B+/g;
  console.log(target.match(regExp2)); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]
  console.log(target2.match(regExp2)); // [ 'A', 'B', 'B', 'A', 'B', 'AA', 'B' ]

  const regExp3 = /A|B+/g;
  console.log(target.match(regExp3)); // [ 'A', 'A', 'A', 'B', 'BB', 'A', 'B' ]
  console.log(target2.match(regExp3)); // [ 'A', 'B', 'B', 'A', 'B', 'A', 'A', 'B' ]

  const regExp4 = /(A|B)+/g;
  console.log(target.match(regExp4)); // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]
  console.log(target2.match(regExp4)); // [ 'AB', 'BA', 'B', 'AAB' ]
})();
