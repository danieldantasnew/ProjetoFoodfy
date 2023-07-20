export default function buttonMenu(){
    const lista = document.querySelectorAll('[data-menu="lista"]');
    const botaoMenu = document.querySelector('[data-menu="btn-menu"]');
    

    function alteraMenu(){
        lista.forEach(ative =>{
            ative.classList.toggle('active'); 
        })  
    }

    botaoMenu.addEventListener('click', alteraMenu);
}