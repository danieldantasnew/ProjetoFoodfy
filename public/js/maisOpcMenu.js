export default function menuOPC() {
  const botaoMaisExpandir = document.querySelectorAll('[data-lista-maisInfo]');
  const botaoMais = document.querySelector('[data-lista-maisInfo="mais"]');
  function handleMais() {
    botaoMaisExpandir.forEach((botao) => botao.classList.toggle('active'));
    if (botaoMais.classList.contains('active')) {
      botaoMais.style.color = '#ff8408';
      botaoMais.style.fontWeight = 700;
    } else {
      botaoMais.style.color = '';
      botaoMais.style.fontWeight = '';
    }
  }

  if (botaoMais) {
    botaoMais.addEventListener('click', handleMais);
  }
}
