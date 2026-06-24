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

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado
      window.alert("O resultado é:"   + resultado);

    salvarHistorico("divisão",primeiroNumero,segundoNumero, resultado)

}


    function salvarHistorico(nomeDaFuncao, primeiroNumero, segundoNumero, resultado) {
    console.log("-------------------------------")
    console.log("Entrou na função salvarHistorico");
    console.log("Função utilizada:soma");
    console.log("Primeiro número:", primeiroNumero);
    console.log("Segundo número:", segundoNumero);
    console.log("Resultado:", resultado);
    console.log("-------------------------------")
}