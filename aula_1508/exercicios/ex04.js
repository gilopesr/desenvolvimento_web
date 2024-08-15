// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%.

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
