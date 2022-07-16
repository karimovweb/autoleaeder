let info = document.querySelector(".info")
let header_box = document.querySelector(".header_box")
let close_info = document.querySelector(".close_info")

info.addEventListener("click", () => {
    header_box.classList.add("open_info");
})
close_info.addEventListener("click", () => {
    header_box.classList.add("close-card");
})


// burger
let btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});

//carousel header 
// let navLinks = document.querySelectorAll(".carousel .nav-link");
// let slides = document.querySelectorAll(".carousel .slides img");
// let overlays = document.querySelectorAll(".carousel .bar");
// let maxZIndex = navLinks.length;
// let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
// slides[0].classList.add("active");
// navLinks[0].classList.add("active");
// navLinks.forEach((navLink, activeIndex) => {
//   (overlays[activeIndex] as HTMLElement).style.zIndex = `${navLinks.length -
//     activeIndex}`;
//   navLink.addEventListener("click", () => {
//     // nav-link
//     navLinks.forEach(navLink => navLink.classList.remove("active"));
//     navLink.classList.add("active");
//     // slide
//     let currentSlide = document.querySelector(".carousel .slides img.active");
//     let slideFadeOut = currentSlide.animate(
//       [
//         { transform: "translateX(0)", opacity: 1 },
//         { transform: "translateX(5%)", opacity: 0 }
//       ],
//       {
//         duration: 600,
//         easing: "ease-in",
//         fill: "forwards"
//       }
//     );
//     slideFadeOut.onfinish = () => {
//       slides.forEach(slide => slide.classList.remove("active"));
//       let activeSlide = slides[activeIndex];
//       activeSlide.classList.add("active");
//       activeSlide.animate(
//         [
//           {
//             transform: "translateX(-5%)",
//             opacity: 0
//           },
//           {
//             transform: "translateX(0)",
//             opacity: 1
//           }
//         ],
//         { duration: 600, easing: "ease-out", fill: "forwards" }
//       );
//     };
//     // overlay
//     maxZIndex += 1;
//     let activeOverlay = overlays[activeIndex];
//     (activeOverlay as HTMLElement).style.zIndex = `${maxZIndex}`;
//     activeOverlay.animate(
//       [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
//       { duration: 1200, fill: "forwards", easing: easeInOutQuart }
//     );
//   });
// });


// car mark js 

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}




function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}



// end

$(document).ready(function(){
  var docWidth = $('body').width(),
      $wrap = $('#wrap'),
      $images = $('#wrap .hb'),
      slidesWidth = $wrap.width();
  
  $(window).on('resize', function(){
    docWidth = $('body').width();
    slidesWidth = $wrap.width();
  })
  
  $(document).mousemove(function(e) {
    var mouseX = e.pageX,
        offset = mouseX / docWidth * slidesWidth - mouseX / 2;
    
    $images.css({
      '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
              'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
  });
})


// language

// loading

// let body = document.querySelector("#body")
// let loader = document.querySelector(".loader")

// let header_cont = document.querySelector(".header_cont")
// let open_head__menu = document.querySelector(".open_head__menu")
// let open_head = document.querySelector(".open_head")

// open_head__menu.addEventListener("click", () => {
//   header_cont.classList.toggle("head_db")
//   open_head__menu.style.top = "100px"
//   open_head.style.transform = "rotate(180deg)"
// })
