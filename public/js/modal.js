/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
import observadorAction from './observador.js';
import * as fetch from './fetch.js';

export default class Modal {
  constructor(cardFather) {
    this.cardsFather = document.querySelector(cardFather);
  }

  bindMetodos() {
    this.activeModal = this.activeModal.bind(this);
    this.closeModalFunction = this.closeModalFunction.bind(this);
    this.tamanhoTelaDispositivos = this.tamanhoTelaDispositivos.bind(this);
  }

  closeModalFunction(event, modal, closeModal) {
    if (event.target === modal || event.target === closeModal) {
      modal.classList.remove('active');
    }
  }

  handleCard(index, modal) {
    modal.classList.add('active');
    localStorage.index = index;
    fetch.recebeDados(index);
  }

  tamanhoTelaDispositivos(card, index, timeOut, modal) {
    // Identificará o clique longo
    const tamanhoTela = window.matchMedia('(max-width: 600px)').matches;

    if (tamanhoTela) {
    // eslint-disable-next-line no-undef
      const hammer = new Hammer(card);
      hammer.on('press', () => {
        this.handleCard(index, modal);
      });
    } else {
      card.addEventListener('mousedown', () => {
        timeOut = setTimeout(() => {
          // eslint-disable-next-line no-use-before-define
          this.handleCard(index, modal);
        }, 1000);
      });

      card.addEventListener('mouseup', () => {
        clearTimeout(timeOut);
      });
    }
  }

  resizeTela(cards, modal) {
    let timeOut;

    cards.forEach((card, index) => {
      window.addEventListener('resize', () => {
        this.tamanhoTelaDispositivos(card, index, timeOut, modal);
        //criar função debounce
      });
      this.tamanhoTelaDispositivos(card, index, timeOut, modal);
    });
  }

  activeModal() {
    const cards = document.querySelectorAll('.card');
    const modal = document.querySelector('[data-modal="modal"]');
    const closeModal = document.querySelector('[data-modal="closeModal"] img');

    modal.addEventListener('click', (event) => this.closeModalFunction(event, modal, closeModal));
    closeModal.addEventListener('click', (event) => this.closeModalFunction(event, modal, closeModal));

    this.resizeTela(cards, modal);

    this.desconectar.disconnect();
    return this;
  }

  init() {
    this.bindMetodos();

    if (this.cardsFather) {
      this.desconectar = observadorAction(this.activeModal, this.cardsFather);
    }
    return this;
  }
}
