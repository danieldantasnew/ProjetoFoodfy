export default function fetchDados() {
  const classePai = document.querySelector('[data-receita]');

  const infoLocalStorage = JSON.parse(localStorage.informacoesCard); /*converto string para JSON*/

  if (classePai) {
    const imagem = document.querySelector('.card-receitaU .card_imagem-receitaU div');
    const titulo = document.querySelector('.card_titulo-receitaU h1');
    const autor = document.querySelector('.card_autor-receitaU p');
    const ingredientes = document.querySelector('.ingredientes-receita');
    const modoPreparo = document.querySelector('.modo-preparo');

    imagem.id = infoLocalStorage[localStorage.index].srcImagem;
    imagem.classList.add('card_imagem-receitaU');
    titulo.innerText = infoLocalStorage[localStorage.index].titulo;
    autor.innerText = infoLocalStorage[localStorage.index].autor;
    ingredientes.innerHTML = infoLocalStorage[localStorage.index].ingredientes;
    modoPreparo.innerHTML = infoLocalStorage[localStorage.index].modoPreparo;
  }
}
