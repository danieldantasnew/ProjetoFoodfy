export default function buttonMenu(){
    const lista = document.querySelector('[data-menu="lista"]');
    const botaoMenu = document.querySelector('[data-menu="btn-menu"]');
    

    function alteraMenu(){
        lista.classList.toggle('active');   
    }

    botaoMenu.addEventListener('click', alteraMenu);
}