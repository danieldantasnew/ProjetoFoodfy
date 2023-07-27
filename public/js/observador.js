export default function observadorAction(funcao, observeIsso) {
  const observer = new MutationObserver(funcao);
  observer.observe(observeIsso, { childList: true });

  return observer;
}
