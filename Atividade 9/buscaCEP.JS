function buscarCEP(){
    let cepDigitado = document.getElementById("cep").value

    if (cepDigitado === "") {
    return;

     // Remove o hífen, caso exista
    // Também remove qualquer outro caractere que não seja número
    cepDigitado = cepDigitado.replace(/\D/g, "");

     // Verifica se possui exatamente 8 números
    if (cepDigitado.length !== 8) {
        alert("CEP inválido! Digite um CEP com exatamente 8 números.");

    // Atualiza o campo mostrando apenas números
    document.getElementById("cep").value = cepDigitado;
}
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(function(resposta){
            return resposta.json();

        })
        .then(function(dados){
            if(dados.erro){
                alert("CEP não encontrado")
                return;
            }
            document.getElementById("Logradouro").value= dados.logradouro;
            document.getElementById("Bairro").value= dados.bairro;
            document.getElementById("Cidade").value= dados.localidade;
            document.getElementById("UF").value= dados.uf;
 
        })
    }

const campoCEP = document.getElementById("cep");
campoCEP.addEventListener('focusout', buscarCEP);
