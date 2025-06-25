const buttons = document.querySelectorAll("[data-carousel-button]"); //
//get all the buttons, using data attribute as working with js is easier, no overlap
const i = 0

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    //if the button was next, offset = 1, else -1. Offset changes from the previous to
    //new index after click
    const slides = button
      .closest("[data-carousel]")
      .querySelector('[data-slides]')
    //from the button to the carousel, then from carousel select the slides

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

document.addEventListener('DOMContentLoaded', (e) => {
  const carousel = document.querySelector('[data-carousel]')

  if (carousel) {
    const slidesList = carousel.querySelector('[data-slides]')
    const slides = Array.from(slidesList.children)
    let currentIndex = 0;

    function scroll() {
      const activeSlide = slidesList.querySelector('[data-active]')
      if(activeSlide) {
        activeSlide.removeAttribute('data-active')
      }
      currentIndex = (currentIndex + 1) % slides.length
      slides[currentIndex].setAttribute('data-active', '')
      console.log("currentIndex: ", currentIndex)
    }
    setInterval(scroll, 3000)
  }
});

//need to somehow have both functions using the same index variable



