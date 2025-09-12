/* 33.5 심벌과 프로퍼티 은닉 */

/* 33-14 */
(() => {
  const obj = {
    [Symbol("mySymbol")]: 1,
    general: 2,
    [Symbol.for("mySymbolFor")]: 3,
    general2: 4,
  };

  console.log(Object.keys(obj)); // [ 'general', 'general2' ]
  console.log(Object.getOwnPropertyNames(obj)); // [ 'general', 'general2' ]
  console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(mySymbol), Symbol(mySymbolFor) ]

  const [symbolKey1, symbolKey2] = Object.getOwnPropertySymbols(obj);

  console.log(symbolKey1, symbolKey2); // Symbol(mySymbol) Symbol(mySymbolFor)
  console.log(obj[symbolKey1], obj[symbolKey2]); // 1 3
  // console.log(Symbol(mySymbol)); // ReferenceError: mySymbol is not defined
  console.log(obj[Symbol.for("mySymbolFor")]); // 3
})();
