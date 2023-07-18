import observadorAction from './observador.js'

export default function redirecionaPagina(){
    const cardsFather = document.querySelector('[data-card]');

    if(cardsFather){
        const desconectar = observadorAction(hearClick, cardsFather);

        function hearClick(){
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card =>{
                card.addEventListener('click', redirecione);
            });

            function redirecione(){
                window.location.href = 'receitaUnica.html'
            }

            desconectar.disconnect();
        }

        
    }
    
}