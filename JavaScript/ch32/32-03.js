/* 32.3 String 메서드 */

/* 32-14 */
(() => {
  const str = "Hello world";

  console.log(str.includes("Hello")); // true
  console.log(str.includes(" ")); // true
  console.log(str.includes("")); // true
  console.log(str.includes("x")); // false
  console.log(str.includes()); // false

  const str2 = "undefined";
  console.log(str2.includes()); // true

  const str3 = "";
  console.log(str3.includes()); // false

  const str4 = "3";
  console.log(str4.includes(3)); // true
})();

/* 32-21 */
(() => {
  const str = "hello";
  console.log(str.charAt(4)); // o
  console.log(str.charAt(5)); // ''
  console.log(str.charAt(-1)); // ''
  console.log(typeof str.charAt(-1)); // stirng

  console.log(str.charAt(2)); // l
  console.log(str.charCodeAt(2)); // 108
  console.log(str.codePointAt(2)); // 108
})();

/* 32-26 */
(() => {
  const str = "hello world";

  console.log(str.substring(0, 5)); // hello
  console.log(str.slice(0, 5)); // hello

  console.log(str.substring(-5)); // hello world
  console.log(str.slice(-5)); // world

  console.log(str.substring(NaN)); // hello world
  console.log(str.slice(NaN)); // hello world

  console.log(str.substring(4, NaN)); // hell
  console.log(str.slice(4, NaN)); // ''

  console.log(str.substring(5, 0)); // hello
  console.log(str.slice(5, 0)); // ''
})();

/* 32-33 */
(() => {
  const str = "abc";
  console.log(str.repeat(3.9)); // abcabcabc
  // console.log(str.repeat(-1)); // RangeError: Invalid count value: -1
  // console.log(str.repeat(Infinity)); // RangeError: Invalid count value: Infinity
  console.log(str.repeat(NaN)); // ''
})();

/* 32-35 */
(() => {
  const str = "Hello world";

  // 특수한 교체 패턴 ($&: 검색된 문자열)
  console.log(str.replace("world", "<strong>$&</strong>")); // Hello <strong>world</strong>
})();

/* 32-37 */
(() => {
  const str = "Hello Hello";
  console.log(str.replace(/hello/gi, "Lee")); // Lee Lee
  console.log(str.replace(/hello/i, "Lee")); // Lee Hello
})();

/* 32-38 */
(() => {
  // 카멜 케이스 -> 스네이크 케이스
  function camelToSnake(camelCase) {
    return camelCase.replace(/.[A-Z]/g, (match) => {
      console.log(match); // oW
      return match[0] + "_" + match[1].toLowerCase();
    });
  }

  const camelCase = "helloWorld";
  console.log(camelToSnake(camelCase)); // hello_world

  // 스네이크 케이스 -> 카멜 케이스
  function snakeToCamel(snakeCase) {
    return snakeCase.replace(/_[a-z]/g, (match) => {
      console.log(match); // _w
      return match[1].toUpperCase();
    });
  }

  const snakeCase = "hello_world";
  console.log(snakeToCamel(snakeCase)); // helloWorld
})();

/* 32-38 */
(() => {
  const str = "How   are\nyou  doing?";
  console.log(str.split(" ")); // [ 'How', '', '', 'are\nyou', '', 'doing?' ]
  console.log(str.split(" ")[3]);
  /* are
    you */
  console.log(str.split(/\s/)); // [ 'How', '', '', 'are', 'you', '', 'doing?' ]
})();
