const cards = document.querySelectorAll(".card");
console.log("app");
const options = {
  root: null,
  threshold: 0.25,
  rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const card = entry.target;
    if (entry.isIntersecting) {
      console.log("In View");
      card.classList.add("in-view");
    }
  });
}, options);

cards.forEach(card => {
  observer.observe(card);
});
