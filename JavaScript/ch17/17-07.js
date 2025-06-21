/* 17.2 생성자 함수 */

/* 17-05 */
(() => {
  function foo() {
    console.log("this:", this);
  }
  foo(); // this: <ref *1> Object [global] { ... }

  const obj = { foo };
  obj.foo(); // this: { foo: [Function: foo] }
  console.log(obj); // { foo: [Function: foo] }

  const inst = new foo(); // this: foo {}
  console.log(inst); // foo {}
})();

/* 17-11 */
(() => {
  function Circle(radius) {
    console.log(this); // Circle {}
    console.log(this instanceof Circle); // true

    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    return { radius: this.radius, getDiameter: this.getDiameter };
  }

  const circle = new Circle(1);
  console.log(circle); // { radius: 1, getDiameter: [Function (anonymous)] }
  console.log(circle.getDiameter()); // 2
  console.log(circle instanceof Circle); // false
})();
