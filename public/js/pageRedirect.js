import observadorAction from './observador.js'

export default function redirecionaPagina(){
    const cardsFather = document.querySelector('[data-card]');

    if(cardsFather){
        const desconectar = observadorAction(hearClick, cardsFather);

        function hearClick(){
            const cards = document.querySelectorAll('.card');
            const events = ['click', 'touchstart'];

            events.forEach(evento =>{
                cards.forEach((card, index) =>{
                    card.addEventListener(evento, ()=>{
                        redirecione(index);
                    });
                });
            })

            function redirecione(index){
                localStorage.index = index;
                window.location.href = 'receitaUnica.html';
            }

            desconectar.disconnect();
        }

        
    }
    
}