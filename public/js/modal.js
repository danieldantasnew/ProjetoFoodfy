import observadorAction from './observador.js'
import * as fetch from './fetch.js'

export default function modalAction(){
    
    const cardsFather = document.querySelector('[data-card]');

    if(cardsFather){
        
       const desconectar = observadorAction(activeModal,cardsFather)
        
        function activeModal(Mutation){
            const cards = document.querySelectorAll('.card');
            const modal = document.querySelector('[data-modal="modal"]');
            const closeModal = document.querySelector('[data-modal="closeModal"] img');

            
            modal.addEventListener('click', closeModalFunction);
            closeModal.addEventListener('click', closeModalFunction);
        
            // Identificará o clique longo
            let timeOut;

            cards.forEach((card, index) =>{

                window.addEventListener('resize', ()=>{
                    tamanhoTelaDispositivos();
                });
                
    
                function tamanhoTelaDispositivos(){
                    const tamanhoTela = window.matchMedia('(max-width: 600px)').matches;
                    
                    if(tamanhoTela){
                        const hammer = new Hammer(card);
                        hammer.on("press", ()=>{
                            handleCard(index)
                        });
                    }
    
                    else{
                        card.addEventListener('mousedown', ()=>{
                            timeOut = setTimeout(()=>{
                                handleCard(index); 
                            }, 1000);     
                        });

                        card.addEventListener('mouseup', ()=>{
                            clearTimeout(timeOut);
                        });
        
                    }
                }

                tamanhoTelaDispositivos();  

            });

        
            function handleCard(index){
                modal.classList.add('active');
                localStorage.index = index;
                fetch.recebeDados(index);
            }
      
            function closeModalFunction(event){
                if(event.target == modal || event.target == closeModal){
                    modal.classList.remove('active');
                }
            }

            desconectar.disconnect();
        }
    }
    
}





    // const modalOverlay = document.querySelector(".modal_overlay");
    // const cards = document.querySelectorAll(".card");
    
    // for (let card of cards){
    //     card.addEventListener("click", function(){
    //         const imagemID = card.getAttribute("id")
    //         const textCard = card.querySelector('.card_titulo').innerHTML 
    //         /*no textCard ele irá pegar todo o conteúdo que estará em card_titulo e colocar na constante textCard*/

    //         modalOverlay.classList.add("active");
    //         modalOverlay.querySelector(".modal_conteudo img").src = `${imagemID}`
    //         modalOverlay.querySelector('.titulosModal').innerHTML  = textCard
    //         /*em ModalOverlayselecionando o objeto titulosModal é repassado as informações contidas em textCard assim mostrando as informações que estão no card no MODAL*/

    //         /*Para essa questão do modal você pode pesquisar sobre innerHTML ou textContent*/

    //     })
    // }

    // document.querySelector(".close_modal").addEventListener("click", function(){
    //     modalOverlay.classList.remove("active");
    //     modalOverlay.querySelector("modal_conteudo img").src = ""
    // });