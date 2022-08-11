module.exports = function check(str, bracketsConfig) {

  const BRACKETS_PAIR = {};

  bracketsConfig.forEach(element => {
    BRACKETS_PAIR[`${element[1]}`] = `${element[0]}`;
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    let currentSymbol = str[i];

    let topElement = stack[stack.length - 1];

    if (stack.length > 0 && topElement === BRACKETS_PAIR[currentSymbol]) {
      stack.pop();
    } else {
      stack.push(currentSymbol);
    }
  }
  
  return stack.length === 0;

}
