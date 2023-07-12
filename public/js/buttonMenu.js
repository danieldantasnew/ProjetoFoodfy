export function buttonMenu(){
    const lista = document.getElementById('lista');
    const btnbotao = document.getElementById('btn-menu');
    const botaoMenu = document.getElementById('btn-menu');
    



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

        const cabeca = document.getElementById('cabeca');
        cabeca.classList.toggle('active');

    }
    function alteraMenu(){
        lista.classList.toggle('active');   
    }

    botaoMenu.addEventListener('click', alteraMenu);
    btnbotao.addEventListener('click', Ftoggle);
}