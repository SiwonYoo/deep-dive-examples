/* 30.2 Date 메서드 */

/* 30-06 */
(() => {
  const now = Date.now();
  console.log(now); // 1756211791918
  console.log(new Date(now)); // Tue Aug 26 2025 21:36:31 GMT+0900 (한국 표준시)
})();

/* 30-07 */
(() => {
  // UTC
  console.log(Date.parse("Jan 2, 1970 00:00:00 UTC")); // 86400000
  console.log(Date.parse("1970/01/02/00:00:00 UTC")); // 86400000

  // KST
  console.log(Date.parse("Jan 2, 1970 09:00:00")); // 86400000
  console.log(Date.parse("1970/01/02/09:00:00")); // 86400000

  // Date 객체를 넘겨도 된다.
  console.log(Date.parse(new Date(86400000)));

  // Date를 new 없이 호출하면 반환되는 값은 현재 날짜와 시간의 문자열이다.
  // 인수를 줘도 무시된다. (인자가 있어도 그냥 현재 시간 문자열만 리턴한다.)
  console.log(Date()); // Wed Aug 20 2025 15:58:52 GMT+0900 (Korean Standard Time)
  console.log(Date(86400000)); // Wed Aug 20 2025 15:58:52 GMT+0900 (Korean Standard Time)
  console.log(Date.parse(Date(86400000))); // 1755673132000
})();

/* 30-08 */
(() => {
  console.log(Date.UTC(1970, 0, 2)); // 86400000
  console.log(Date.UTC("1970/1/2")); // NaN
})();

/* 30-10 */
(() => {
  const today = new Date();
  console.log(today); // Tue Aug 26 2025 22:09:03 GMT+0900 (한국 표준시)

  // 년도 지정
  today.setFullYear(2000);
  console.log(today); // Sat Aug 26 2000 22:09:03 GMT+0900 (한국 표준시)
  console.log(today.getFullYear()); // 2000

  // 년도/월/일 지정
  today.setFullYear(1999, 5, 22);
  console.log(today); // Tue Jun 22 1999 22:09:03 GMT+0900 (한국 표준시)
  console.log(today.getFullYear()); // 1999
})();

/* 30-12 */
(() => {
  const today = new Date();
  console.log(today); // Tue Aug 26 2025 22:18:17 GMT+0900 (한국 표준시)

  // 월 지정
  today.setMonth(0);
  console.log(today); // Sun Jan 26 2025 22:18:17 GMT+0900 (한국 표준시)
  console.log(today.getMonth()); // 0

  // 월/일 지정
  today.setMonth(11, 1);
  console.log(today); // Mon Dec 01 2025 22:18:17 GMT+0900 (한국 표준시)
  console.log(today.getMonth()); // 11
})();

/* 30-14 */
(() => {
  const today = new Date();
  console.log(today); // Tue Aug 26 2025 22:18:57 GMT+0900 (한국 표준시)

  // 날짜 지정
  today.setDate(1);
  console.log(today); // Fri Aug 01 2025 22:18:57 GMT+0900 (한국 표준시)
  console.log(today.getDate()); // 1
})();

/* 30-15 */
(() => {
  console.log(new Date("2020/07/24").getDay()); // 5
})();

/* 30-17 */
(() => {
  const today = new Date();
  console.log(today); // Tue Aug 26 2025 22:23:18 GMT+0900 (한국 표준시)

  // 시간 지정
  today.setHours(7);
  console.log(today); // Tue Aug 26 2025 07:23:18 GMT+0900 (한국 표준시)
  console.log(today.getHours()); // 7

  // 시간/분/초/밀리초 지정
  today.setHours(0, 0, 0, 0);
  console.log(today); // Tue Aug 26 2025 00:00:00 GMT+0900 (한국 표준시)
  console.log(today.getHours()); // 0
})();

/* 30-19 */
(() => {
  const today = new Date();
  console.log(today); // Tue Aug 26 2025 22:26:33 GMT+0900 (한국 표준시)

  // 분 지정
  today.setMinutes(50);
  console.log(today); // Tue Aug 26 2025 22:50:33 GMT+0900 (한국 표준시)
  console.log(today.getMinutes()); // 50

  // 분/초/밀리초 지정
  today.setMinutes(5, 10, 999);
  console.log(today); // Tue Aug 26 2025 22:05:10 GMT+0900 (한국 표준시)
  console.log(today.getMinutes()); // 5
})();

/* 30-21 */
(() => {
  const today = new Date();
  console.log(today); // Tue Aug 26 2025 22:29:17 GMT+0900 (한국 표준시)

  // 초 지정
  today.setSeconds(30);
  console.log(today); // Tue Aug 26 2025 22:29:30 GMT+0900 (한국 표준시)
  console.log(today.getSeconds()); // 30

  // 초/밀리초 지정
  today.setSeconds(10, 0);
  console.log(today); // Tue Aug 26 2025 22:29:10 GMT+0900 (한국 표준시)
  console.log(today.getSeconds()); // 10
})();

/* 30-23 */
(() => {
  const today = new Date();
  console.log(today.getMilliseconds()); // 947

  // 밀리초 지정
  today.setMilliseconds(123);
  console.log(today.getMilliseconds()); // 123
})();

/* 30-25 */
(() => {
  const today = new Date("2020/07/24/12:30");
  console.log(today.getTime()); // 1595561400000

  // 8640000ms = 1day
  today.setTime(today.getTime() + 8640000);
  console.log(today.getTime()); // 1595570040000
  console.log(today); // Fri Jul 24 2020 14:54:00 GMT+0900 (한국 표준시)
})();

/* 30-26 */
(() => {
  const today = new Date();
  console.log(today); // 2025-08-22T01:15:06.003Z

  console.log(today.getTimezoneOffset()); // -540
  console.log(today.getTimezoneOffset() / 60); // -9

  console.log(today.toString()); // Fri Aug 22 2025 10:36:18 GMT+0900 (Korean Standard Time)
  console.log(new Date()); // 2025-08-22T01:36:18.996Z
  console.log(today.toISOString()); // 2025-08-22T01:36:18.996Z
  console.log(today.getHours()); // 10
})();

/* 30-27,30-28 */
(() => {
  const today = new Date("2020/7/24/12:30");

  console.log(today.toString()); // Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)

  console.log(today.toDateString()); // Fri Jul 24 2020
  console.log(today.toTimeString()); // 12:30:00 GMT+0900 (한국 표준시)
})();

/* 30-29 */
(() => {
  const today = new Date("2020/7/24/12:30");

  console.log(today.toString()); // Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)
  console.log(today.toISOString()); // 2020-07-24T03:30:00.000Z
})();

/* 30-30, 30-31 */
(() => {
  const today = new Date("2020/7/24/15:30");

  console.log(today.toString()); // Fri Jul 24 2020 15:30:00 GMT+0900 (한국 표준시)
  console.log(today.toLocaleString()); // 2020. 7. 24. 오후 3:30:00

  console.log(today.toLocaleTimeString()); // 오후 3:30:00
  console.log(today.toLocaleDateString()); // 2020. 7. 24.

  console.log(today.toLocaleTimeString("ko-KR")); // 오후 3:30:00
  console.log(today.toLocaleTimeString("en-US")); // 3:30:00 PM
  console.log(today.toLocaleTimeString("ja-JP")); // 15:30:00
})();
