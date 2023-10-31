
function calcularTotal(event) {
    event.preventDefault();
    produto(event);
    itensDivulgação(event);
}

function bottonOrçamento(event){
    event.preventDefault();
    totalfinal(event);
    moedas(event);
}

function gebi(id){
    return document.getElementById(id)
}


function produto(event) {
    event.preventDefault();

    var xcafe = parseInt(document.getElementById('idcafe').value);
    var xbolo = parseInt(document.getElementById('idbolo').value);
    var xcachorro = parseInt(document.getElementById('idcachorro').value);

    var ycafe = parseInt(document.getElementById('ValorCafe').value); 
    var ybolo = parseInt(document.getElementById('ValorBolo').value);
    var ycachorro = parseInt(document.getElementById('ValorCachorro').value); 

    var recupera1 = parseInt(document.getElementById('numero_participantes').value); 

    return somar(xcafe, xbolo, xcachorro, ycafe, ybolo, ycachorro, recupera1);
}

function somar(xcafe, xbolo, xcachorro, ycafe, ybolo, ycachorro, recupera1) {
    var totalcafe = recupera1 * ycafe * xcafe;
    document.getElementById('idTotal1').value = totalcafe; //adciona um id a variavel totalcafe
    var totalbolo = recupera1 * ybolo * xbolo;
    document.getElementById('idTotal2').value = totalbolo;
    var totalcachorro = recupera1 * ycachorro * xcachorro;
    document.getElementById('idTotal3').value = totalcachorro;
}


function itensDivulgação(event) {
    event.preventDefault();

    var xBanner = parseInt(document.getElementById('idBanner').value);
    var xCrachá = parseInt(document.getElementById('idCrachá').value);
    var xCamiseta = parseInt(document.getElementById('idCamiseta').value);

    var yBanner = parseInt(document.getElementById('ValorBanner').value); 
    var yCrachá = parseInt(document.getElementById('ValorCrachá').value); 
    var yCamiseta = parseInt(document.getElementById('ValorCamiseta').value); 

    var recupera2 = parseInt(document.getElementById('numero_participantes').value); 

    return somarItens(xBanner, xCrachá, xCamiseta, yBanner, yCrachá, yCamiseta, recupera2);
}

function somarItens(xBanner, xCrachá, xCamiseta, yBanner, yCrachá, yCamiseta, recupera2) {
    var totalBanner = recupera2 * yBanner * xBanner;
    var totalCrachá = recupera2 * yCrachá * xCrachá;
    var totalCamiseta = recupera2 * yCamiseta * xCamiseta;

    document.getElementById('idTotal4').value = totalBanner;
    document.getElementById('idTotal5').value = totalCrachá;
    document.getElementById('idTotal6').value = totalCamiseta;
}

function totalfinal(event){
    event.preventDefault();
    
    var resultadoA = parseInt(document.getElementById('idTotal1').value) +
    parseInt(document.getElementById('idTotal2').value) +
    parseInt(document.getElementById('idTotal3').value);

    var resultadoB = parseInt(document.getElementById('idTotal4').value) +
    parseInt(document.getElementById('idTotal5').value) +
    parseInt(document.getElementById('idTotal6').value);
    var resultadoc = resultadoB + resultadoA;

    document.getElementById('idtotalF1').value = resultadoA;
    document.getElementById('idtotalF2').value = resultadoB;
    document.getElementById('idtotalF0').value = resultadoc;

}

function montartexto(){
  var participantes = gebi("numero_participantes").value

  var pqcafe = gebi("idcafe").value
  var pqbolo = gebi("idbolo").value
  var pqcachorro = gebi("idcachorro").value

  var pvcafe = gebi("ValorCafe").value
  var pvbolo = gebi("ValorBolo").value
  var pvcachorro = gebi("ValorCachorro").value

  var pqbanner = gebi("idBanner").value
  var pqcracha = gebi("idCrachá").value
  var pqcamiseta = gebi("idCamiseta").value

  var pvbanner = gebi("ValorBanner").value
  var pvcracha = gebi("ValorCrachá").value
  var pvcamiseta = gebi("ValorCamiseta").value

  var total1 = gebi("idTotal1").value
  var total2 = gebi("idTotal2").value
  var total3 = gebi("idTotal3").value
  var total4 = gebi("idTotal4").value
  var total5 = gebi("idTotal5").value
  var total6 = gebi("idTotal6").value

  var pAlimenticios = gebi("idtotalF1").value
  var divulgação = gebi("idtotalF2").value
  var totalEvento = gebi("idtotalF0").value

  var euro1 = gebi("euroA").value
  var euro2 = gebi("euroB").value
  var euro3 = gebi("euroC").value

  var dolar1 = gebi("dolarA").value
  var dolar2 = gebi("dolarB").value
  var dolar3 = gebi("dolarC").value

  gebi('texto').value = "neste evento contaremos com " + participantes + " participantes " +
                        " para a alimentação contaremos com " + pqcafe + " unidades de café custando " + pvcafe + " por unidade, dando um total de " + total1 + 
                        " também contaremos com " + pqbolo + " unidades de bolo custando " +  pvbolo + " por unidade, dando um total de " + total2 + 
                        " também contaremos com " + pqcachorro + " unidades de cachorro-quente custando " +  pvcachorro + " por unidade, dando um total de " + total3 + 

                        " para os itens de divulgação contaremos com " +  pqbanner + " unidades de banners custando " + pvbanner + " por unidade, dando um total de " + total4 + 
                        " também contaremos com " + pqcracha + " unidades de crachás custando " + pvcracha + " por unidade, dando um total de " + total5 + 
                        " também contaremos com " + pqcamiseta + " unidades de camisatas custando " + pvcamiseta + " por unidade, dando um total de " + total6 + 

                        " o valor total dos alimentos é: " + pAlimenticios + " em euro é: " + euro1 + " em dolar é: " + dolar1 +
                        " o valor total dos itens de divulgação é: " + divulgação + " em euro é: " + euro2 + " em dolar é: " + dolar2 +
                        " o valor total do evento é: " + totalEvento + " em euro é: " + euro3 + " em dolar é: " + dolar3 +
                        " esse texto foi feito pelo Rafael Zanelatto";
}







window.onload = function recupera(){
    
    if (localStorage.getItem("total_inscritos")) {
   
    var totalInscritos = localStorage.getItem("total_inscritos");    
    
    totalInscritos = parseInt(totalInscritos, 10);  
    document.getElementById('numero_participantes').value = totalInscritos
    }
}

function moedas(event){
    let dolar = prompt('escreva o valor do dolar')
    let euro = prompt('escreva o valor do euro')
    let dolarA = gebi("idtotalF1").value
    let dolarB = gebi("idtotalF2").value
    let dolarC = gebi("idtotalF0").value
    let euroA = gebi("idtotalF1").value
    let euroB = gebi("idtotalF2").value
    let euroC = gebi("idtotalF0").value
    let rstdolarA = dolarA / dolar
    let rstdolarB = dolarB / dolar
    let rstdolarC = dolarC / dolar
    let rsteuroA = euroA / euro
    let rsteuroB = euroB / euro
    let rsteuroC = euroC / euro
    gebi("dolarA").value = "$" + rstdolarA
    gebi("dolarB").value = "$" + rstdolarB
    gebi("dolarC").value = "$" + rstdolarC
    gebi("euroA").value = "€" + rsteuroA
    gebi("euroB").value = "€" + rsteuroB
    gebi("euroC").value = "€" + rsteuroC
}