/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
import observadorAction from './observador.js';

export default class RedirecionaPagina {
  constructor(cardsFather) {
    this.cardsFather = document.querySelector(cardsFather);

    this.hearClick = this.hearClick.bind(this);
  }

  redirecione(index, eventClick) {
    eventClick.preventDefault();
    localStorage.index = index;
    window.location.href = 'receitaUnica.html';
  }

  hearClick() {
    const cards = document.querySelectorAll('.card');
    const events = ['click', 'touchstart'];

    cards.forEach((card, index) => {
      events.forEach((evento) => {
        card.addEventListener(evento, (eventClick) => {
          this.redirecione(index, eventClick);
        });
      });
    });
    this.desconectar.disconnect();
  }

  init() {
    if (this.cardsFather) {
      this.desconectar = observadorAction(this.hearClick, this.cardsFather);
    }
  }
}
