document.addEventListener('DOMContentLoaded', () => {
    const btnUp = document.querySelector('.btn-up');

    if (!btnUp) return;

    const toggleBtnUp = () => {
      if (window.scrollY > 200) {
        btnUp.classList.remove('hidden'); // Mostra o botão
      } else {
        btnUp.classList.add('hidden'); // Esconde o botão
      }
    };

    // Verifica no carregamento da página
    toggleBtnUp();

    // Verifica toda vez que rolar
    window.addEventListener('scroll', toggleBtnUp);
  });