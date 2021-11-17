let outStr = "Hello";
console.log(outStr);

let funcOutStr = ``;

function firstFunc(args) {
  args.forEach(function(arg) {
    funcOutStr += `Hello, ${arg}!`;
  });
  return funcOutStr;
}
