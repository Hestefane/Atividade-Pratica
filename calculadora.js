const args = process.argv.slice(2);

const soma = () => {
    console.log(parseInt(args[1]) + parseInt(args[2]));
};

const sub = () => {
    console.log(parseInt(args[1]) - parseInt(args[2]));
};

const div = () => {
    const divisor = parseInt(args[2]);
    if (divisor === 0) {
        console.log("Erro: Não é permitido divisão por zero.");
    } else {
        console.log(parseInt(args[1]) / divisor);
    }
};

switch (args[0]) {
    case 'soma':
        soma();
        break;

    case 'sub':
        sub();
        break;

    case 'div':
        div();
        break;

    default:
        console.log('does not support', args[0]);
}
