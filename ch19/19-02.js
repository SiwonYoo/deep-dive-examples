/* 19.2 상속과 프로토타입 */

/* 19-04 */
(() => {
  function Circle(radius) {
    this.radius = radius;
  }

  Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
  };

  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  console.log(circle1.getArea === circle2.getArea); // true

  console.log(circle1.getArea()); // 3.141592653589793
  console.log(circle2.getArea()); // 12.566370614359172

  console.log(Circle); // [Function: Circle]
  console.log(Circle.prototype); // { getArea: [Function (anonymous)] }
  console.log(Circle.prototype.constructor); // [Function: Circle]

  console.log(Object.getPrototypeOf(circle1)); // { getArea: [Function (anonymous)] }
  console.log(circle1.__proto__); // { getArea: [Function (anonymous)] }
  console.log(Object.getPrototypeOf(circle1) === circle1.__proto__); // true
})();
