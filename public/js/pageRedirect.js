/* eslint-disable no-use-before-define */
import observadorAction from './observador.js';

export default function redirecionaPagina() {
  const cardsFather = document.querySelector('[data-card]');

  if (cardsFather) {
    const desconectar = observadorAction(hearClick, cardsFather);

    // eslint-disable-next-line no-inner-declarations
    function hearClick() {
      const cards = document.querySelectorAll('.card');

      cards.forEach((card, index) => {
        window.addEventListener('resize', () => {
          tamanhoTelaDispositivos();
        });
        function tamanhoTelaDispositivos() {
          const tamanhoTela = window.matchMedia('(max-width: 600px)').matches;
          if (tamanhoTela) {
            // eslint-disable-next-line no-undef
            const hammer = new Hammer(card);
            hammer.on('tap', () => {
              redirecione(index);
            });
          } else {
            card.addEventListener('click', () => {
              redirecione(index);
            });
          }
        }
        //remover funcao tamanhoTeladispositivos pois é possível fazer com touchstart e click
        //precisa apenas passar o event.preventDefault() qnd for passar os 2 eventos
        tamanhoTelaDispositivos();
      });

      function redirecione(index) {
        localStorage.index = index;
        window.location.href = 'receitaUnica.html';
      }

      desconectar.disconnect();
    }
  }
}
