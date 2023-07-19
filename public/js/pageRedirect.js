import observadorAction from './observador.js'

export default function redirecionaPagina(){
    const cardsFather = document.querySelector('[data-card]');

    if(cardsFather){
        const desconectar = observadorAction(hearClick, cardsFather);

        function hearClick(){
            const cards = document.querySelectorAll('.card');
            
            cards.forEach((card, index) =>{
                card.addEventListener('click', ()=>{
                    redirecione(index);
                });
            });

            function redirecione(index){
                localStorage.index = index;
                window.location.href = 'receitaUnica.html';
            }

            desconectar.disconnect();
        }

        
    }
    
}