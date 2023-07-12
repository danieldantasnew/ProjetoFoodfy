export function modal(){
    const modalOverlay = document.querySelector(".modal_overlay");
    const cards = document.querySelectorAll(".card");
    
    for (let card of cards){
        card.addEventListener("click", function(){
            const imagemID = card.getAttribute("id")
            const textCard = card.querySelector('.card_titulo').innerHTML 
            /*no textCard ele irá pegar todo o conteúdo que estará em card_titulo e colocar na constante textCard*/

            modalOverlay.classList.add("active");
            modalOverlay.querySelector(".modal_conteudo img").src = `${imagemID}`
            modalOverlay.querySelector('.titulosModal').innerHTML  = textCard
            /*em ModalOverlayselecionando o objeto titulosModal é repassado as informações contidas em textCard assim mostrando as informações que estão no card no MODAL*/

            /*Para essa questão do modal você pode pesquisar sobre innerHTML ou textContent*/

        })
    }

    document.querySelector(".close_modal").addEventListener("click", function(){
        modalOverlay.classList.remove("active");
        modalOverlay.querySelector("modal_conteudo img").src = ""
    });
}