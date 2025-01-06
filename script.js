const sr = ScrollReveal({reset: true});
const sr2 = ScrollReveal({reset: true});
const sr3 = ScrollReveal({reset: true});
const sr4 = ScrollReveal({reset: true});

sr.reveal('.elemento', {
    duration: 1000, // Duração da animação em milissegundos
    distance: '50px', // Distância que o elemento se move
    origin: 'bottom', // De onde a animação começa (top, bottom, left, right)
    opacity: 0, // Opacidade inicial
    scale: 0.85, // Tamanho inicial
  });

  sr2.reveal('.elemento2', {
    duration: 2000, // Duração da animação em milissegundos
    distance: '100px', // Distância que o elemento se move
    origin: 'bottom', // De onde a animação começa (top, bottom, left, right)
    opacity: 0, // Opacidade inicial
    scale: 1, // Tamanho inicial
  });

  sr3.reveal('.elemento3', {
    duration: 3000, // Duração da animação em milissegundos
    distance: '150px', // Distância que o elemento se move
    origin: 'bottom', // De onde a animação começa (top, bottom, left, right)
    opacity: 0, // Opacidade inicial
    scale: 1.2, // Tamanho inicial
  });

  sr4.reveal('.elemento4', {
    duration: 4000, // Duração da animação em milissegundos
    distance: '200px', // Distância que o elemento se move
    origin: 'bottom', // De onde a animação começa (top, bottom, left, right)
    scale: 1.8, // Tamanho inicial
  });


  //trocar a class
  
  function verificarTamanhoTela() {
    if (window.innerWidth < 359) {
      // Cancela o ScrollReveal
      sr.destroy(); // Remove as animações
    } else {
      // Reaplica o ScrollReveal
      sr.reveal('.reveal');
    }
  }

  // Verifica o tamanho da tela ao carregar a página
  verificarTamanhoTela();

  // Adiciona um listener para verificar quando a janela é redimensionada
  window.addEventListener('resize', verificarTamanhoTela);
  