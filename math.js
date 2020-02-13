function calculate(...args) {

    var result = 0;

    if (args.length > 0) {
        result = Math.round(doOperation(args[0], args.length === 1 ? '+' : args[1], result) * 100) / 100;
        console.log(result);
    }

    function doOperation(num, op, result) {
        console.log('Doing some math... ' + result + ' ' + op + ' ' + num + ' = ?')
        switch (op) {
            case '+':
                return result + num;
            case '-':
                return result - num;
            case '*':
                return result * num;
            case '/':
                return num !== 0 ? result / num : result;
            default:
                console.error('Oops, something went wrong... Please check your operator.');
        }
    }

    function recCalculate(...args) {
        if (args.length === 0) {
            return result;
        }
        result = Math.round(doOperation(args[0], args.length === 1 ? '+' : args[1], result) * 100) / 100;
        console.log(result);
        return recCalculate;
    }

    return recCalculate;
}

calculate(10)(2.71239257, '*')(4.1243545, '/')();