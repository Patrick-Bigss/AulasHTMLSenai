function buscarCEP(){
    let cepDigitado = document.getElementById("cep").value

    if (cepDigitado === "") {
    return;
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
