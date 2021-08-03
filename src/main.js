import * as animations from "./components/animations"

function main() {
  let actualImage = 1;

  function gsapRightToLeft() {
    return (
      gsap.to(".active", {
        duration: 1,
        x: 850,
        ease: "expo.inOut"
      })
    )
  }

  function gsapLeftToRight() {
    return (
      gsap.to(".active", {
        duration: 1,
        x: -850,
        ease: "expo.inOut"
      })
    )
  }

  function prevImage(actual) {
    const prev = actual - 1;
    actualImage = prev;

    gsapRightToLeft()

    document.getElementById(`image-${actual}`).classList.remove('active')
    document.getElementById(`image-${prev}`).classList.add('active')

    gsapLeftToRight()

  }

  function nextImage(actual) {
    const next = actual + 1;
    actualImage = next;

    gsapRightToLeft()

    document.getElementById(`image-${actual}`).classList.remove('active')
    document.getElementById(`image-${next}`).classList.add('active')

    gsapLeftToRight()
  }

  function changeCircle() {
    gsap.to('.circle', {
      duration: 0.5,
      height: 0,
      width: 0,
      ease: "expo.inOut",
    })

    gsap.to('.circle', {
      duration: 0.5,
      height: 667,
      width: 667,
      ease: "expo.inOut",
      delay: 0.4
    })
  }

  function changeNumber(actualImage, type) {
    let swapLeft;
    let swapRight;

    if (type === "back") {
      swapLeft = 500
      swapRight = -500
    } else if (type === "next") {
      swapLeft = -500
      swapRight = 500
    }
    var tl = gsap.timeline();

    tl.to(".number h2 .counter", {
      duration: 0.4,
      x: swapLeft,
      opacity: 0,
      ease: "expo.inOut"
    })

    tl.to(".number h2 .counter", {
      duration: 0,
      x: swapRight,
      opacity: 0,
      ease: "linear"
    })

    tl.to(".number h2 .counter", {
      duration: 0.4,
      text: `0${actualImage}`,
      x: 0,
      opacity: 1,
      ease: "expo.outIn"
    })
  }

  function changeTitle(id, type) {
    const titlesCategories = ["Street", "Summer", "Casual", "Elegance"]

    const tl = gsap.timeline()

    tl.fromTo('.title-category', { opacity: 0, duration: 0.5, text: titlesCategories[id - 1] }, { duration: 1, opacity: 1, scale: 1, ease: "expo.inOut" });

  }

  function changeColorBackground(id) {
    const colorsBackground = ["#eb2727", "#FFB800", "#D6115A", "#A14215"]
    const colorsCircle = ["#ec3939", "#F2CD1D", "#DE3970", "#DE8443"]

    gsap.to('.bg', {
      duration: 1,
      background: colorsBackground[id - 1],
      ease: "expo.inOut",
    })

    gsap.to('.circle', {
      duration: 1,
      background: colorsCircle[id - 1],
      ease: "expo.inOut",
    })

  }

  function addEventListeners() {
    document.getElementsByClassName('button-prev')[0].addEventListener('click', () => {
      if (actualImage <= 1) return;
      prevImage(actualImage);
      changeColorBackground(actualImage);
      changeCircle();
      changeNumber(actualImage, "back");
      changeTitle(actualImage, "back");
    })

    document.getElementsByClassName('button-next')[0].addEventListener('click', () => {
      if (actualImage >= 4) return;
      nextImage(actualImage);
      changeColorBackground(actualImage);
      changeCircle();
      changeNumber(actualImage, "next");
      changeTitle(actualImage, "next");
    })
  }

  addEventListeners()
}

function init() {
  main();
  return animations;
}

init();
