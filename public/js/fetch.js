let informacoesCard = {};

export async function fetchDados(){
    try{
        const dados = await fetch('./dados.json');
        const dadosJson = await dados.json();
        informacoesCard = dadosJson;
        localStorage.informacoesCard = JSON.stringify(informacoesCard); /*converto JSON para string*/
    }
    catch(erro){
        console.log(erro)
    }

}

export function recebeDados(index){
    const imagemModal = document.querySelector('.card_imagem-modal div');
    const modalTitulo = document.querySelector('.card_titulo-modal h1');
    const nomeAutorModal = document.querySelector('.card_autor-modal p');
    const ingredientes = document.querySelector('.ingredientes');


    imagemModal.id = informacoesCard[index].srcImagem;
    imagemModal.classList.add('design-imagem-card-modal');
    modalTitulo.innerText = informacoesCard[index].titulo;
    nomeAutorModal.innerText = informacoesCard[index].autor;
    ingredientes.innerHTML = informacoesCard[index].ingredientes;
}