const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

getInput();


function bin2dec(bin) {
    let dec = 0;
    let expoente = 0;
    for(let i = bin.length-1; i >= 0; i--) {
        const num = Number(bin[i]);
        const result = num*(Math.pow(2, expoente++))
        dec += result;
    }

    return dec;
}

function getInput() {
    reader.question('\nInsira uma string de numeros binarios para ser convertida em numeros decimais:\n', answer => {
        console.log("Resultado: ",bin2dec(answer));
        getInput();
    })
}

