function handleIntersection(entries) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hide");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hide");
      }
    });
  } else {
    let count = 0;

    const timer = setInterval(() => {
      if (count >= entries.length) {
        clearInterval(timer);
      }

      const entry = entries[count];

      if (entry.isIntersecting) {
        entry.target.classList.remove("hide");
        entry.target.classList.add("show");
      }

      count++;
    }, 550);
  }
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.19,
});

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});
