/* 28.3 Number 메서드 */

/* 28-19 */
(() => {
  console.log(Number.isNaN(undefined)); // false
  console.log(isNaN(undefined)); // true

  console.log(Number.isNaN(3)); // false
  console.log(isNaN(3)); // false

  console.log(Number.isNaN(Infinity)); // false

  console.log(Number.isNaN(0 / 0)); // true
  console.log(Number.isNaN(Math.sqrt(-1))); // true
  console.log(Number.isNaN(1 / "a")); // true
})();
