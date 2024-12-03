function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hide");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hide");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.18,
});

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});
