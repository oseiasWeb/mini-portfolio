// Pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

// Identificar o click no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba);
    
        apresentarInformacoesAba(aba);

    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado");
}

function apresentarInformacoesAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // Mostrar conteúdo da aba selecionada
    const idElementoDeInformacoesAba = `informacao-${aba.id}`

    const informacaoAserMostratada = document.getElementById(idElementoDeInformacoesAba)
    informacaoAserMostratada.classList.add("selecionado")
}