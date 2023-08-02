export default class Menu {
  constructor(lista, botaoMenu) {
    this.lista = document.querySelector(lista);
    this.botaoMenu = document.querySelector(botaoMenu);
    this.alteraMenu = this.alteraMenu.bind(this);
    this.active = this.active.bind(this);
  }

  bubblingHTML(eventoTarget) {
    const html = document.documentElement;
    html.addEventListener('click', verificaTarget);
    const activeGambiarra = this.active;

    function verificaTarget(eventHTML) {
      if (!eventoTarget.contains(eventHTML.target)) {
        html.removeEventListener('click', verificaTarget);
        activeGambiarra();
      }
    }
    return this;
  }

  active() {
    this.lista.classList.toggle('active');
    return this;
  }

  alteraMenu(event) {
    this.lista.classList.toggle('active');
    if (this.lista.classList.contains('active')) {
      this.bubblingHTML(event.currentTarget.parentElement);
    }

    return this;
  }

  init() {
    this.botaoMenu.addEventListener('click', this.alteraMenu);
    return this;
  }
}
