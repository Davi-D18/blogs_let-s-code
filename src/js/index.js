// Seleciona todos os cards
const cards = document.querySelectorAll(".card");

// Função para adicionar a classe de animação quando os cards estiverem visíveis
const animateCards = () => {
  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    // Se o card estiver visível na tela, adiciona a animação
    if (cardPosition < screenPosition) {
      card.classList.add("show");
    }
  });
};

// Chama a função ao rolar a página
window.addEventListener("scroll", animateCards);

// Executa imediatamente para aplicar a animação ao carregar a página
animateCards();
