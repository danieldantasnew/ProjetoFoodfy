export default function layoutMenu(){
    
    const modalMenu = document.querySelector('.modal-header')
    const desativaMenu = document.querySelectorAll('[data-menu="lista"]')

    modalMenu.addEventListener('click', handleModal)
    function handleModal(){
        desativaMenu.forEach(menu =>{
            menu.classList.remove('active')
        })
    }

    // Código provisório

}