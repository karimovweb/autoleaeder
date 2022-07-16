var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-next-button",
		prevEl: ".swiper-prev-button"
	},
	effect: "fade",
	loop: "infinite",
	pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        }
});

swiper.on('slideChange', function(sld) {
	document.body.setAttribute('data-sld', sld.realIndex);
})
$('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
      // get button data-slide
      next = $(this).data('slide');
  
    $('.slide-nav').removeClass('active');
    $(this).addClass('active');
  
    if (current === next) {
      return false;
    } else {
      $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 800);
    }
  });

  
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

js: flickity.pkgd.js