/* 25.3 클래스 호이스팅 */

/* 25-05 */
(() => {
  class Person {}
  console.log(typeof Person); // function
})();

(() => {
  console.log(Person); // ReferenceError: Cannot access 'Person' before initialization
  class Person {}
})();

(() => {
  const Person = "";
  {
    // Person은 호이스팅되었지만 TDZ에 빠져있다.
    console.log(Person); // ReferenceError: Cannot access 'Person' before initialization
    class Person {}
  }
})();
