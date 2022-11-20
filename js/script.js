window.addEventListener('DOMContentLoaded', () => { 
  /* ================= Scroll ========================= */
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }


  /* ================= Slider ========================= */
  // function slider ({slide, container, preArrow, nextArrow}) {
  //   const slides = document.querySelectorAll(slide),
  //         slider = document.querySelector(container),
  //         prev = document.querySelector(preArrow),
  //         next = document.querySelector(nextArrow)

  // }
  

  // slider ({
  //   slide: '.picture',
  //   container: '.slide-active',
  //   preArrow: '.slider-prev',
  //   nextArrow: '.slider-next'
  // })


  /* ================= Form ========================= */

  function openCheck(checkSelector) {

  }

  function getDinamicInformation() {

    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const error = document.getElementById('text');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    email.addEventListener('input', () => {
      
      if(email.value.match(pattern)) {
        email.style.border = '1px solid #CCCCCC';
      }else {         
        email.style.border = '1px solid #F9572E';

      }
    })

  }
  getDinamicInformation();
})









