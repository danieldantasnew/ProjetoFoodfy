/* eslint-disable no-use-before-define */
import observadorAction from './observador.js';

export default class RedirecionaPagina {
  constructor(cardsFather){
    this.cardsFather = document.querySelector(cardsFather);

    this.hearClick = this.hearClick.bind(this);
  }

  redirecione(index) {
    console.log('oi')
    localStorage.index = index;
    window.location.href = 'receitaUnica.html';
  }

  hearClick() {
    const cards = document.querySelectorAll('.card');
    const events = ['click', 'touchstart'];
    console.log()

    cards.forEach((card, index) => {
      events.forEach((evento) => {
        card.addEventListener(evento, () => {
          this.redirecione(index);
        })
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

