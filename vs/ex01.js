let salario = 100;
let salarioAjustado = 0;
let porcentagem = 0
if(salario<=280){
    porcentagem = 20;
    salarioReajustado =
    salario + ((salario*porcentagem)/100)
}else if (salario > 280 && salario <= 700){
    porcentagem = 15;
    salarioReajustado =
    salario + ((salario*porcentagem)/100)

    
console.log(porcentagem)

}
