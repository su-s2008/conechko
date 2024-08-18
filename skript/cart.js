document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const home_btn = document.querySelector(".home_btn");
  
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        const cardId = card.getAttribute("data-id");
        window.location.href = `details.html?id=${cardId}`;
      });
    });
    home_btn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  });