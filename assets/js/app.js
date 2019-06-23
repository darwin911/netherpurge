const card = document.querySelector(".card");
const cards = document.querySelectorAll(".card");

const options = {
  root: null,
  threshold: 1,
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
