const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container1");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;


let form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
   e.preventDefault()

   let nameInp = document.querySelector('.form-control')
   let telInp = document.querySelector('.form_user')
   let emailInp = document.querySelector('.form_email')
   let messengeInp = document.querySelector('#form_mes')

  console.log('Ism: ' + nameInp.value + '   Tel:' + telInp.value + '   Email:' + ' ' + emailInp.value + '   Messenge:' + messengeInp.value);
})

// carousel

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});



