 function soma(){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado
      window.alert("O resultado é:"   + resultado);

    salvarHistorico("Soma",primeiroNumero,segundoNumero, resultado)

}

function subtração(){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado
      window.alert("O resultado é:"   + resultado);

    salvarHistorico("subtração",primeiroNumero,segundoNumero, resultado)

}

function multiplicação (){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado
      window.alert("O resultado é:"   + resultado);

    salvarHistorico("multiplicação",primeiroNumero,segundoNumero, resultado)

}

function divisão (){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado
      window.alert("O resultado é:"   + resultado);

    salvarHistorico("divisão",primeiroNumero,segundoNumero, resultado)

}


    function salvarHistorico(nomeDaFuncao, primeiroNumero, segundoNumero, resultado) {
    console.log("-------------------------------")
    console.log("Entrou na função salvarHistorico");
    console.log("Função utilizada:", nomeDaFuncao);
    console.log("Primeiro número:", primeiroNumero);
    console.log("Segundo número:", segundoNumero);
    console.log("Resultado:", resultado);
    console.log("-------------------------------")

      let operacao = {
        funcao: nomeDaFuncao,
        numero1: primeiroNumero,
        numero2: segundoNumero,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));
}

function apagarLocalStorage(){
  let confirmaApagar =  window.confirm("Você deseja apagar seu histórico?")

  if(confirmaApagar){
  localStorage.clear();
  }

}

function CalcularImposto() {

    let valor = Number(document.getElementById("valorProduto").value);

    let imposto = 0;
    let valorFinal = 0;

    // Produto abaixo de 50 dólares
    if (valor < 50) {

        imposto = valor * 0.20;

    } else {

        // 20% + 90%
        imposto = (valor * 0.20) + (valor * 0.90);

    }

    valorFinal = valor + imposto;

    document.getElementById("resultado-imposto").innerHTML =
        "US$ " + valorFinal.toFixed(2);

    window.alert("Valor final: US$ " + valorFinal.toFixed(2));

    salvarHistoricoImposto(valor, imposto, valorFinal);
}


   function salvarHistoricoImposto(valor, imposto, valorFinal) {

    let historicoLocal = JSON.parse(localStorage.getItem("historicoImportacao")) || [];

    let operacao = {
        valor: valor,
        imposto: imposto,
        valorFinal: valorFinal
    };

    historicoLocal.push(operacao);

    localStorage.setItem(
        "historicoImportacao",
        JSON.stringify(historicoLocal)
    );
}
