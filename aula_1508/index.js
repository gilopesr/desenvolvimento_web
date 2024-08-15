let nome = "Giovana"; 
let altura = 1.60;

nome = "zoe";

console.log(nome);
console.log(altura);

let num1 = 21;
let num2 = 43;
let num3 = 5;

let media = (num1+num2+num3)/3;
console.log(media);

let nome2 = "Funcionario fulano";
let salario = 1412.00;

aumento = salario * 0.1;
let novo_salario = aumento + salario

console.log(novo_salario);

let A = 12;
let B = 120;
let C = 0;

if (A == B) {
    C = A + B;
}else{
    C = A * B;
}

console.log(C);

let valorProd = 9254;
let parcela = 5;
let pagamento = 0;

if (parcela == 3) {
    pagamento = valorProd + (valorProd*0.1);
    console.log(pagamento);
} else if(parcela == 5){
    pagamento = valorProd + (valorProd*0.2);
    console.log(pagamento);
} else{
    console.log("parcela invalida");
}

