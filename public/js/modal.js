export default function modalAction(){

    const observer = new MutationObserver(activeModal);
    const cardsFather = document.querySelector('[data-card]');
    observer.observe(cardsFather, {childList: true});

    function activeModal(Mutation){
        const cards = document.querySelectorAll('.card');
        const modal = document.querySelector('[data-modal="modal"]');
        const closeModal = document.querySelector('[data-modal="closeModal"] img');
        let informacoesCard = {};
        
        modal.addEventListener('click', closeModalFunction);
        closeModal.addEventListener('click', closeModalFunction);
    
        // Identificará o clique longo
        let timeOut;
        cards.forEach((card, index) =>{
            card.addEventListener('mousedown', ()=>{
                timeOut = setTimeout(()=>{
                    handleCard(index); 
                }, 1000);     
            });
            
            card.addEventListener('mouseup', ()=>{
                clearTimeout(timeOut);
            });
        });
    
        function handleCard(index){
            informacoesCard.index = index;
            modal.classList.add('active');
            fetchDados();
        }
    
        function closeModalFunction(event){
            if(event.target == modal || event.target == closeModal){
                modal.classList.remove('active');
            }
        }
    
        async function fetchDados(){
            try{
                const dados = await fetch('./dados.json');
                const dadosJson = await dados.json();
                informacoesCard = {
                    imagem: dadosJson[informacoesCard.index].srcImagem,
                    titulo: dadosJson[informacoesCard.index].titulo,
                    autor: dadosJson[informacoesCard.index].autor,
                    ingredientes: dadosJson[informacoesCard.index].ingredientes
                }
    
                recebeDados();
            }
            catch(erro){
                console.log(erro)
            }
        }
        
        function recebeDados(){
            const imagemModal = document.querySelector('.card_imagem-modal div');
            const modalTitulo = document.querySelector('.card_titulo-modal h1');
            const nomeAutorModal = document.querySelector('.card_autor-modal p');
            const ingredientes = document.querySelector('.ingredientes');


            imagemModal.id = informacoesCard.imagem;
            imagemModal.classList.add('design-imagem-card-modal')
            modalTitulo.innerText = informacoesCard.titulo;
            nomeAutorModal.innerText = informacoesCard.autor;
            ingredientes.innerHTML = informacoesCard.ingredientes;
        }   

        observer.disconnect();
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