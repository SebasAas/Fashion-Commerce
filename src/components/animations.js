// BACKGROUND
gsap.to(".bg", {
  duration: 2,
  width: "100%",
  ease: "expo.inOut"
})

// CIRCLE
gsap.to(".circle", {
  duration: 1.5,
  delay: 1.5,
  opacity: 1,
  height: 667,
  width: 667,
  ease: "expo.inOut"
})

// ACTIVE
gsap.to(".active", {
  duration: 1.5,
  delay: 1.6,
  x: -850,
  ease: "expo.inOut"
})

// NAVBAR
gsap.from(".navbar", {
  duration: 1.5,
  delay: 2.5,
  opacity: 0,
  y: 20,
  ease: "expo.inOut"
})

// CATEGORY TITLE
gsap.from(".title-category", {
  duration: 1.5,
  delay: 1.6,
  opacity: 0,
  y: 100,
  ease: "expo.inOut"
})

// SOCIAL MEDIA
gsap.from(".media ul li", {
  duration: 1.5,
  delay: 2.8,
  opacity: 0,
  x: -30,
  ease: "expo.inOut",
  staggger: 0.08
})

// TEXT
gsap.from(".text h1 .hidetext", {
  duration: 1.5,
  delay: 1.6,
  y: "100%",
  ease: "expo.inOut"
})

// NUMBER
gsap.from(".number h2 .hidetext", {
  duration: 1.5,
  delay: 1.6,
  x: "150%",
  ease: "expo.inOut"
})


// SCROLLDOWN
gsap.from(".scrolldown", {
  duration: 1.5,
  delay: 2.7,
  opacity: 0,
  y: 200,
  ease: "expo.inOut"
})

// BOTTOMNAV
gsap.from(".bottomnav", {
  duration: 1.5,
  delay: 3.2,
  opacity: 0,
  y: 20,
  ease: "expo.inOut"
})

gsap.from(".bottomnav .next", {
  duration: 1.5,
  delay: 3.5,
  opacity: 0,
  x: -20,
  ease: "expo.inOut"
})
