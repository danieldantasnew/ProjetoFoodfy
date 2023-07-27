/* eslint-disable no-use-before-define */
import observadorAction from './observador.js';
import * as fetch from './fetch.js';

export default function modalAction() {
  const cardsFather = document.querySelector('[data-card]');

  if (cardsFather) {
    // eslint-disable-next-line no-use-before-define
    const desconectar = observadorAction(activeModal, cardsFather);

    // eslint-disable-next-line no-inner-declarations, no-unused-vars
    function activeModal(Mutation) {
      const cards = document.querySelectorAll('.card');
      const modal = document.querySelector('[data-modal="modal"]');
      const closeModal = document.querySelector('[data-modal="closeModal"] img');

      modal.addEventListener('click', closeModalFunction);
      closeModal.addEventListener('click', closeModalFunction);

      // Identificará o clique longo
      let timeOut;

      cards.forEach((card, index) => {
        window.addEventListener('resize', () => {
          tamanhoTelaDispositivos();
        });

        function tamanhoTelaDispositivos() {
          const tamanhoTela = window.matchMedia('(max-width: 600px)').matches;

          if (tamanhoTela) {
          // eslint-disable-next-line no-undef
            const hammer = new Hammer(card);
            hammer.on('press', () => {
              handleCard(index);
            });
          } else {
            card.addEventListener('mousedown', () => {
              timeOut = setTimeout(() => {
                // eslint-disable-next-line no-use-before-define
                handleCard(index);
              }, 1000);
            });

            card.addEventListener('mouseup', () => {
              clearTimeout(timeOut);
            });
          }
        }
        tamanhoTelaDispositivos();
      });

      function handleCard(index) {
        modal.classList.add('active');
        localStorage.index = index;
        fetch.recebeDados(index);
      }

      function closeModalFunction(event) {
        if (event.target === modal || event.target === closeModal) {
          modal.classList.remove('active');
        }
      }

      desconectar.disconnect();
    }
  }
}
