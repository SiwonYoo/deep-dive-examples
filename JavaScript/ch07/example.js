console.log(5 != 8); // true (5 == 8 : false)
console.log(5 != 5); // false (5 == 5 : true)
console.log(5 != "5"); // false (5 == '5' : true)

console.log(5 !== 8); // true (5 === 8 : false)
console.log(5 !== 5); // false (5 === 5 : true)
console.log(5 !== "5"); // true (5 === '5' : false)

// let x = 2;
// let result = x % 2 ? "홀수" : "짝수";

// console.log(result); // 짝수

let x = 10;
let result;

if (x % 2) result = "홀수";
else result = "짝수";

console.log(result); // 짝수

x = 3;
console.log(!!3);

console.log(!0); // true
console.log(!"Hello"); // true

console.log(!!3);
console.log(!!null);
console.log(!!"null");
console.log(!!0);
console.log(!!"Hello");

!0; // true (0: false)
!"Hello"; // false ('Hello': true)

!!0; // false
!!"Hello"; // true
!!3; // true
!!null; // false
!!"null"; // true

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

true || true; // true
true || false; // true
false || true; // true
false || false; // false

true && true; // true
true && false; // false
false && true; // false
false && false; // false

10 * 2 + 3; // 23
10 * (2 + 3); // 50

console.log(10 * 2 + 3);
console.log(10 * (2 + 3));

2 ** 2; // 2^2 = 4
2 ** 2.5; // 2^(2.5) = 5.65685424949238
2 ** 0; // 2^0 = 1
2 ** -2; // 2^(-2) = 0.25

// 음수를 거듭제곱의 밑으로 사용하려면 괄호로 묶어야 한다.
(-5) ** 2; // (-5)^2 = 25

console.log((-5) ** 2);

console.log(2 ** 2);
console.log(2 ** 2.5);
console.log(2 ** 0);
console.log(2 ** -2);

console.log(Math.pow(2, 2)); // 2^2 = 4
console.log(Math.pow(2, 2.5)); // 2^(2.5) = 5.65685424949238
console.log(Math.pow(2, 0)); // 2^0 = 1
console.log(Math.pow(2, -2)); // 2^(-2) = 0.25

Math.pow(2, 2); // 2^2 = 4
Math.pow(2, 2.5); // 2^(2.5) = 5.65685424949238
Math.pow(2, 0); // 2^0 = 1
Math.pow(2, -2); // 2^(-2) = 0.25

// 지수 연산자는 우결합성을 갖는다.
2 ** (3 ** 2);
2 ** (3 ** 2);
(2 ** 3) ** 2;

console.log(2 ** (3 ** 2));
console.log(2 ** (3 ** 2));
console.log((2 ** 3) ** 2);

let num = 5;
num **= 2; // num = num ** 2
console.log(num); //25

console.log(2 * 5 ** 2);

// 문자열 연결 연산자
"1" + 2;
1 + "2";

// 산술 연산
1 + 2; // 3

// true는 1로 타입 변환된다.
1 + true; // 2
// false는 0으로 타입 변환된다.
1 + false; // 1
// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2);
console.log(1 + true);
console.log(1 + false);
console.log(1 + null);
console.log(+undefined);
console.log(1 + undefined);

5 * 4;
"My name is " + "Deepdive";

let foo = null;

typeof foo; // "object"
typeof foo === null; // false
foo === null; // true

console.log(typeof foo);
console.log(typeof foo === null);
console.log(foo === null);

typeof undeclared; // undefined
console.log(typeof undeclared);
