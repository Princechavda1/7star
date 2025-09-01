/*
  Close and Open menu
*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
 element.addEventListener('click', function () {
  nav.classList.toggle('show')
 })
}

/*
  Hide menu when item is clicked
*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
 link.addEventListener('click', function () {
  nav.classList.remove('show')
 })
}

/*
  Hide and show header shadow
*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
 if (window.scrollY >= navHeight) {
  header.classList.add('scroll')
 } else {
  header.classList.remove('scroll')
 }
}

/*
  Testimonials carousel slider Swiper
*/
const swiper = new Swiper('.swiper', {
 slidesPerView: 1,
 pagination: {
  el: '.swiper-pagination'
 },
 mousewheel: true,
 keyboard: true,
 breakpoints: {
  762: {
   slidesPerView: 2,
   setWrapperSize: true
  }
 }
})

/*
  Scrollreveal shows elements as you scroll
*/
const scrollReveal = ScrollReveal({
 origin: top,
 distance: '0px',
 duration: 700,
 reset: true
})

scrollReveal.reveal(
 `#home .image, #home .text, 
   #about .image, #about .text,
   #services .header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
   `,
 { interval: 100 }
)

/*
  Hide and show back to home button
*/
const backToHomeButton = document.querySelector('.back-to-home')

function backToHome() {
 if (window.scrollY >= 500) {
  backToHomeButton.classList.add('show')
 } else {
  backToHomeButton.classList.remove('show')
 }
}

/*
  On and Off section of page
*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
 const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

 for (const section of sections) {
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionId = section.getAttribute('id')
  const checkpointStart = checkpoint >= sectionTop
  const checkpointEnd = checkpoint <= sectionTop + sectionHeight

  if (checkpointStart && checkpointEnd) {
   document
    .querySelector('nav ul li a[href*=' + sectionId + ']')
    .classList.add('active')
  } else {
   document
    .querySelector('nav ul li a[href*=' + sectionId + ']')
    .classList.remove('active')
  }
 }
}

/* 
  When Scroll 
*/
window.addEventListener('scroll', function () {
 changeHeaderWhenScroll()
 backToHome()
 activateMenuAtCurrentSection()
})
