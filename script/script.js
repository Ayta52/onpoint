document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".js-open-modal");
  const modal = document.getElementById("modal");

  const openBtnCard = document.querySelectorAll(".card__btn");
  const cardItems = document.querySelectorAll(".modal-list2");
  const circle1 = document.querySelector(".circle1")
  const circle2 = document.querySelector(".circle2")
  const btnPrevious = document.querySelector(".previous");
  const btnNext = document.querySelector(".next");

  btnPrevious.addEventListener('click', () => {
    circle1.classList.add("active")
    circle2.classList.remove("active")
  })

  btnNext.addEventListener('click', () => {
    circle2.classList.add("active")
    circle1.classList.remove("active")
  })


  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modal.querySelector(".modal-dialog").addEventListener("click", (event) => {
    event._isClickWithinModal = "true";
  });

  modal.addEventListener("click", (event) => {
    if (event._isClickWithinModal) return;
    modal.style.display = "none";
  });

  openBtnCard.forEach(function (item) {
    item.addEventListener("click", () => {
      let currentBtn = item;
      let btnId = currentBtn.getAttribute("data-btn");
      let currentCard = document.querySelector(btnId);


      if (!currentBtn.classList.contains("active")) {
        openBtnCard.forEach((item) => {
          item.classList.remove("active");
        });

        cardItems.forEach((item) => {
          item.classList.remove("active");
        });


        currentBtn.classList.add("active");
        currentCard.classList.add("active");
      }
    });
  });

  document.querySelector(".card__btn").click();
});
