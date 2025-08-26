/* 31.6 자주 사용하는 정규표현식 */

/* 31-34 */
(() => {
  const target = "12345";
  console.log(/^\d+$/.test(target)); // true

  const target2 = "abb";
  console.log(target2.match(/^ab$/)); // null
  console.log(/^ab$/.test(target2)); // false
  console.log(target2.match(/^ab+$/)); // [ 'abb', index: 0, input: 'abb', groups: undefined ]
  console.log(/^ab+$/.test(target2)); // true
  console.log(target2.match(/^(a|b)+$/)); // [ 'abb', 'b', index: 0, input: 'abb', groups: undefined ]
  console.log(/^(a|b)+$/.test(target2)); // true

  // a로 시작, b로 종료 (중간 상관 없음)
  console.log(/^a.*b$/.test(target2)); // true
})();

/* 31-37 */
(() => {
  const email = "siwon@gmail.com";

  const regExp = /^[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  console.log(regExp.test(email)); // true
})();
