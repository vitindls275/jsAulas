// seliciona input
    var input = document.querySelector("#inputText")

// adicionar evento de foco, perder foco
    input.addEventListener("focus", mudaCor);
    input.addEventListener("keypress", mudaCorVerifica);
  
    function mudaCor(){
        let resposta = document.querySelector("#resposta");
        input.style.background = "yellow";
        resposta.innerHTML = "digite uma senha maior que 3 digitos"
    }

// perde foco, se tiver menos que 3, vermelho, se maior que 3 verde
    function mudaCorVerifica(){
        let inputValor = input.value.length;
    }
// 