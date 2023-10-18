/* ALTERANDO PARA O MODO DARK-----------------------------------------*/

export default function darkTheme() {
  const body = document.body;
  const botaoDark = document.querySelector('[data-modoDark]');

  function handleTheme() {
    if (body.classList.contains('tema-claro')) {
      body.classList.remove('tema-claro');
      body.classList.add('tema-escuro');
    } else {
      body.classList.remove('tema-escuro');
      body.classList.add('tema-claro');
    }
  }
  botaoDark.addEventListener('click', handleTheme);
}
