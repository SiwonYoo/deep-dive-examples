/* 37.2 Map */

/* 37-43 */
(() => {
  const lee = { name: "Lee" };
  const kim = { name: "Kim" };

  const map = new Map([
    [lee, "developer"],
    [kim, "designer"],
  ]);

  const arr = [
    [lee, "developer"],
    [kim, "designer"],
  ];

  for (const entry of map) {
    console.log(entry); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
  }

  for (const elem of arr) {
    console.log(elem); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
  }

  console.log([...map]); // [ [ { name: 'Lee' }, 'developer' ], [ { name: 'Kim' }, 'designer' ] ]
  console.log([...arr]); // [ [ { name: 'Lee' }, 'developer' ], [ { name: 'Kim' }, 'designer' ] ]

  const [a, b] = map;
  console.log(a, b); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
  const [x, y] = arr;
  console.log(x, y); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
})();

/* 37-44 */
(() => {
  const lee = { name: "Lee" };
  const kim = { name: "Kim" };

  const map = new Map([
    [lee, "developer"],
    [kim, "designer"],
  ]);

  // 1. Map.prototype.keys
  const keys = map.keys();
  console.log(keys.next()); // { value: { name: 'Lee' }, done: false }
  console.log(keys.next()); // { value: { name: 'Kim' }, done: false }
  console.log(keys.next()); // { value: undefined, done: true }

  // [Symbol.iterator]() 메서드를 가지고 있다.
  console.log(typeof keys[Symbol.iterator]); // function
  // [Symbol.iterator]() 메서드는 자기 자신(this)을 반환한다.
  console.log(keys[Symbol.iterator]() === keys); // true

  for (const key of map.keys()) {
    console.log(key); // { name: 'Lee' } { name: 'Kim' }
  }

  // 2. Map.prototype.values
  for (const value of map.values()) {
    console.log(value); // developer designer
  }

  console.log(typeof map.values()[Symbol.iterator]); // function

  // 3. Map.prototype.entries
  for (const entry of map.entries()) {
    console.log(entry); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
  }

  for (const entry of map) {
    console.log(entry); // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
  }

  // entries 메서드와 map 자체의 차이점은?
  // map은 오직 이터러블
  // entries는 이터레이터이면서 이터러블
  console.log(typeof map[Symbol.iterator]); // function
  // console.log(map.next()); // TypeError: map.next is not a function
  console.log(typeof map.entries()[Symbol.iterator]); // function
  console.log(map.entries().next()); // { value: [ { name: 'Lee' }, 'developer' ], done: false }

  // [Symbol.iterator]() 메서드는 자기 자신(this)을 반환한다.
  const entries = map.entries();
  console.log(entries[Symbol.iterator]() === entries); // true

  // 항상 새로운 이터레이터 객체를 반환하기 때문에 아래처럼 비교하면 안됨
  console.log(map.entries()[Symbol.iterator]() === map.entries()); // false
})();

(() => {
  const A = new Set([1, 2, 3]);
  const B = new Set([2, 3, 4]);
})();
