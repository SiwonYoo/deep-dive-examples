let x = 1;

let foo = () => {
  let x = 10;
  bar();
}

let bar = () => {
  console.log(x);
}

foo();