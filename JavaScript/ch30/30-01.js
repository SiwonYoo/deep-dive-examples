/* 30.1 Date 생성자 함수 */

/* 30-01 */
(() => {
  console.log(new Date()); // Tue Aug 26 2025 21:36:31 GMT+0900 (한국 표준시)
})();

/* 30-02 */
(() => {
  console.log(Date()); // Tue Aug 26 2025 21:36:31 GMT+0900 (한국 표준시)
})();

/* 30-03 */
(() => {
  console.log(new Date(0)); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
  console.log(new Date(1 * 24 * 60 * 60 * 1000)); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
  console.log(new Date(-1 * 24 * 60 * 60 * 1000)); // Wed Dec 31 1969 09:00:00 GMT+0900 (한국 표준시)
})();

/* 30-04 */
(() => {
  console.log(new Date("May 26, 2020 10:00:00")); // Tue May 26 2020 10:00:00 GMT+0900 (한국 표준시)
  console.log(new Date("2020/03/26/10:00:00")); // Thu Mar 26 2020 10:00:00 GMT+0900 (한국 표준시)
})();

/* 30-05 */
(() => {
  // 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00:00:00:00
  console.log(new Date(2020, 2)); // Sun Mar 01 2020 00:00:00 GMT+0900 (한국 표준시)
  console.log(new Date(2020, 2, 26, 10, 0, 0, 0)); // Thu Mar 26 2020 10:00:00 GMT+0900 (한국 표준시)
  console.log(new Date("2020/3/26/10:00:00:00")); // Thu Mar 26 2020 10:00:00 GMT+0900 (한국 표준시)
})();
