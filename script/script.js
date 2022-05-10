document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".js-open-modal");
  const modal = document.getElementById("modal");
  const circle1 = document.querySelector(".circle1")
  const circle2 = document.querySelector(".circle2")
  const btnPrevious = document.querySelector(".previous");
  const btnNext = document.querySelector(".next");
  const secondSlide = document.getElementById('secondSlide')
  const pinkSperms = document.querySelector('.pink-sperm')
  const cardItem1 = document.getElementById('btn_1')
  const cardItem2 = document.getElementById('btn_2')

  document.body.addEventListener('scroll', (event) => {
    if (secondSlide.getBoundingClientRect().right <= 1024 && secondSlide.getBoundingClientRect().left >= 0) {
      pinkSperms.style.opacity = "1";
      return
    }
    pinkSperms.style.opacity = "0";
  })

  btnPrevious.addEventListener('click', () => {
    circle1.classList.add("active");
    circle2.classList.remove("active");
    cardItem1.classList.add("active");
    cardItem2.classList.remove("active");
  })

  btnNext.addEventListener('click', () => {
    circle2.classList.add("active");
    circle1.classList.remove("active");
    cardItem1.classList.remove("active");
    cardItem2.classList.add("active");
  })


  openBtn.addEventListener("click", () => {
    modal.style.zIndex = "6";
    modal.style.opacity = "1";
  });

  modal.querySelector(".modal-dialog").addEventListener("click", (event) => {
    event._isClickWithinModal = "true";
  });

  modal.addEventListener("click", (event) => {
    if (event._isClickWithinModal) return;
    modal.style.zIndex = "-1";
    modal.style.opacity = "0";
  });

  document.querySelector(".card__btn").click();

});
