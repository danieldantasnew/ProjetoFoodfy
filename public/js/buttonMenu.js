export default function buttonMenu() {
  const lista = document.querySelector('[data-menu="lista"]');
  const botaoMenu = document.querySelector('[data-menu="btn-menu"]');

  function alteraMenu(event) {
    lista.classList.toggle('active');
    // eslint-disable-next-line no-use-before-define
    bubblingHTML(active, event.currentTarget.parentElement);
    function active() {
      lista.classList.toggle('active');
    }
  }

  function bubblingHTML(funcaoAtive, eventoTarget) {
    const html = document.documentElement;

    // eslint-disable-next-line no-use-before-define
    html.addEventListener('click', verificaTarget);

    function verificaTarget(eventHTML) {
      if (!eventoTarget.contains(eventHTML.target)) {
        funcaoAtive();
        html.removeEventListener('click', verificaTarget);
      }
    }
  }

  botaoMenu.addEventListener('click', alteraMenu);
}
