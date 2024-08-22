function welcome(){
    console.log('olá mundo!');
}

//welcome(); 

function boasVindas(){
    let bemVindo = 'Seja Bem Vindo'
    return bemVindo;
}


//console.log(boasVindas());

// function soma(){
//     return 2+2;
// }

// let addValor = soma();
// let incrementa = addValor + 6;
// console.log(incrementa);

function soma(valor1, valor2){
     return valor1 + valor2;
}

let valor1 = 4;
let valor2 = 6;

let result = soma(valor1, valor2);

console.log(result);