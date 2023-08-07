export default function debounce(callback, delay) {
  let timer;

  return (...argumentos) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...argumentos);
      timer = null;
    }, delay);
  };
  //Função debounce reduz a quantidade de eventos que ocorrem
}
