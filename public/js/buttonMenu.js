export default function buttonMenu() {
  const lista = document.querySelector('[data-menu="lista"]');
  const botaoMenu = document.querySelector('[data-menu="btn-menu"]');

  function alteraMenu(event) {
    lista.classList.add('active');

    // console.log(lista.contains(event.currentTarget))
    // eslint-disable-next-line no-use-before-define
    bubblingHTML(active, event.target);
    function active() {
      lista.classList.remove('active');
    }
  }

  function bubblingHTML(funcaoAtive, eventoTarget) {
    const html = document.documentElement;

    // eslint-disable-next-line no-use-before-define
    html.addEventListener('click', verificaTarget);

    function verificaTarget(eventHTML) {
      if (!eventHTML.target.contains(eventoTarget)) {
        funcaoAtive();
        html.removeEventListener('click', verificaTarget);
        // Corrigir para ficar apenas nos filhos da lista e não do menu inteiro
      }
    }
  }

  botaoMenu.addEventListener('click', alteraMenu);
}
