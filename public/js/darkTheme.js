/* ALTERANDO PARA O MODO DARK-----------------------------------------*/

export function darkTheme(){
    const dark = document.getElementById('botao-1');

    function modoDark(){
        document.body.classList.toggle('tema-escuro');  
    }

    dark.addEventListener('click', modoDark);
}