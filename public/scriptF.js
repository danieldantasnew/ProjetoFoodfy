const modalOverlay = document.querySelector(".modal_overlay");
const cards = document.querySelectorAll(".card");
const dark = document.getElementById('botao-1');

const btnbotao = document.getElementById('btn-menu');

function Ftoggle(){
    /*ADICIONANDO A CLASSE ACTIVE NO HTML APÓS CLICAR NO BOTÃO MENU */

    /*acessa o id*/
    const nav = document.getElementById('nav');
    /*adiciona ou remove a classe active no id*/
    nav.classList.toggle('active');

    /*acessa o id*/
    const botao1 = document.getElementById('botao-1');
    /*adiciona ou remove a classe active no id*/
    botao1.classList.toggle('active');

    /*acessa o id*/
    const logar = document.getElementById('logar');
    /*adiciona ou remove a classe active no id*/
    logar.classList.toggle('active');

    /*acessa o id*/
    const navegacao = document.getElementById('navegacao');
    /*adiciona ou remove a classe active no id*/
    navegacao.classList.toggle('active');

    /*acessa o id*/
    const linkMenu = document.getElementById('links-menu');
    /*adiciona ou remove a classe active no id*/
    linkMenu.classList.toggle('active')

    const links = document.getElementById('links');
    links.classList.toggle('active');

    const Logo = document.getElementById('Logo');
    Logo.classList.toggle('active');

    const organizabusca = document.getElementById('organizabusca');
    organizabusca.classList.toggle('active');

    const btnMenu = document.getElementById('btn-menu');
    btnMenu.classList.toggle('active');

    const cabeca = document.getElementById('cabeca');
    cabeca.classList.toggle('active');

}

btnbotao.addEventListener('click', Ftoggle);


/* ALTERANDO PARA O MODO DARK-----------------------------------------*/

function modoDark(){
    document.body.classList.toggle('tema-escuro');  
}

dark.addEventListener('click', modoDark);

/* --------------------------------------------------------------------*/


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


})