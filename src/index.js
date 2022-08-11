module.exports = function check(str, bracketsConfig) {

    const OPEN_BRACKETS = ['(', '{', '[','|'];
    const BRACKETS_PAIR = {};
    // [')']: '(',
    // ['}']: '{',
    // [']']: '[',
    //'()' - строка
    bracketsConfig.forEach(element => {
        BRACKETS_PAIR[`${element[1]}`] = `${element[0]}`;
    })

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if (OPEN_BRACKETS.includes(currentSymbol)) {//Проверяем или текущий символ - открывающая скобка
            stack.push(currentSymbol);// если да - кладем ее в стек
        } else {// если НЕТ, не открывающая - значит закрывающая
            if (stack.length === 0) { //то проверяем или стек пуст, если стек пуст, а текущая скобка закрывает,
                return false;// значит порядок нарушен, в стеке нет открывающей скобки -  и возвращаем фалс
            }

            let topElement = stack[stack.length - 1];// если стек не пуст, проверяем верхний элемент

            //проверяем совпадает ли элемент в стеке паре для текущего символа
            if (BRACKETS_PAIR[currentSymbol] === topElement) {//на данном этапе текущий символ - закрывающий [')']: '(', а в стеке у нас уже лежит '('
                stack.pop();
            }
            else {//если скобка, которая пришла и которая лежит в стеке отличается, то фалс
                return false;
            }
        }
    }
    return stack.length === 0;// если после всех проверок стек пуст - то последовательность верна

}
