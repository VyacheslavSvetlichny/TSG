// $(function () {
//     if($(this).scrollTop() > 30) {
//     $("header").addClass("active");
//     }
//     $(window).scroll(function(event) {
//         if($(this).scrollTop() > 30) {
//         $("header").addClass("active");
//     }
//     else {
//         $("header").removeClass("active");
//     }
//     });
// });

// $(function() {
//     $('.production-tab').click(function() {
//         $('.production-tab').removeClass('active');
//         $('.production-list').removeClass('active');
//         $(this).addClass('active');
//         $(`.production-list[data-product="${this.dataset.product}"]`).addClass('active');
//     });
// })

// $(function() {
//     const productionSlider = new Swiper('.production-list', {
//         slidesPerView: 1,
//         spaceBetween: 40,
//         loop: true,

//         navigation: {
//             nextEl: '.production-next',
//             prevEl: '.production-prev',
//         },
//     });
// })

// $(function () {
//     $('.header-burger, .burger-menu__close').click(function (event) {
//         $('.header-burger, .burger-menu').toggleClass('active');
//         $('html').toggleClass('lock')
//     });
//     $('.burger-menu__shadow').click(function (event) {
//         $('.burger-menu').removeClass('active');
//         $('html').removeClass('lock');
//         $('.header-burger').removeClass('active');
//     });
// })

// $(function() {
//     const catalogSlider = new Swiper('.catalog-section__slider1', {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         loop: true,
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//             },

//             576: {
//                 slidesPerView: 2,
//             },

//             992: {
//                 slidesPerView: 3,
//             },
//         },
//         navigation: {
//             nextEl: '.catalog-next1',
//             prevEl: '.catalog-prev1',
//         },
//     });
// })

// $(function() {
//     const catalogSlider2 = new Swiper('.catalog-section__slider2', {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         loop: true,
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//             },

//             576: {
//                 slidesPerView: 2,
//             },

//             992: {
//                 slidesPerView: 3,
//             },
//         },
//         navigation: {
//             nextEl: '.catalog-next2',
//             prevEl: '.catalog-prev2',
//         },
//     });
// })

// $(function() {
//     const catalogSlider3 = new Swiper('.catalog-section__slider3', {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         loop: true,
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//             },

//             576: {
//                 slidesPerView: 2,
//             },

//             992: {
//                 slidesPerView: 3,
//             },
//         },
//         navigation: {
//             nextEl: '.catalog-next3',
//             prevEl: '.catalog-prev3',
//         },
//     });
// })

// $(document).ready(function() {
//     let perPage = 5; // количество блоков на странице
//     let page = 1; // текущая страница
//     let totalPages = Math.ceil($('.product-characteristics__container').length / perPage); // общее количество страниц
//     let totalItems = $('.product-characteristics__container').length; // общее количество блоков
//     let shownItems = perPage; // количество показанных блоков

//     $('.product-characteristics__container').slice(0, perPage).show();

//     // добавить обработчик события click на кнопку "Показать еще"
//     $('.product-characteristics__more').click(function() {
//         if (page < totalPages) {
//         // скрыть все блоки на текущей странице
//         $('.product-characteristics__container').slice(page * perPage, (page + 1) * perPage).hide();
//         // увеличить номер текущей страницы
//         page++;
//         // показать следующую страницу блоков
//         $('.product-characteristics__container').slice(page * perPage - perPage, page * perPage).show();
//         // обновить количество показанных блоков
//         shownItems += perPage;
//         // проверить, не нужно ли спрятать кнопку "Показать еще"
//         if (shownItems >= totalItems) {
//             $('.product-characteristics__more').hide();
//         }
//         }
//     });
//   });

if (localStorage.getItem('theme') == null) {
  localStorage.setItem('theme', 'white')
}

if (localStorage.getItem('theme') == 'black') {
  $('.dark').hide()
  $('.white').show()
  $('html').addClass('black')
} else {
  $('.dark').show()
  $('.white').hide()
}

$('.theme-switcher').click(function () {
  if (localStorage.getItem('theme') == 'black') {
    localStorage.setItem('theme', 'white')
    $('html').removeClass('black')
    $('.dark').show()
    $('.white').hide()
  } else {
    localStorage.setItem('theme', 'black')
    $('html').addClass('black')
    $('.dark').hide()
    $('.white').show()
  }
})

$(function () {
  const mainSlider = new Swiper('.banner-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,

    navigation: {
      nextEl: '.banner-next',
      prevEl: '.banner-prev',
    },
  })
})

$(function () {
  const equipmentSlider = new Swiper('.equipment-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1400: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: '.equipment-next',
      prevEl: '.equipment-prev',
    },
  })
})

$(function () {
  const equipmentThumbsSlider = new Swiper('.equipment-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    slideToClickedSlide: true,

    navigation: {
      nextEl: '.equipment-thumbs__next',
      prevEl: '.equipment-thumbs__prev',
    },
  })
})

$(function () {
  $(document).on('click', '.equipment-thumbs__slide', function () {
    $('.equipment-thumbs__slide').removeClass('active')
    $('.equipment-slider').removeClass('active')
    $(this).addClass('active')
    $(`.equipment-slider[data-tab="${$(this).attr('data-tab')}"`).addClass(
      'active',
    )
  })
})

$(function () {
  const blogSlider = new Swiper('.blog-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: '.blog-next',
      prevEl: '.blog-prev',
    },
  })
})

$(function () {
  $('.header-search').click(function () {
    $('.headeer-search__form').toggleClass('show')
  })
})

$(document).ready(function () {
  $('.header-burger,.mobile-menu__close').click(function (event) {
    $('.header-burger,.mobile-menu').toggleClass('active')
    $('body').toggleClass('lock')
  })
  $('.header-search__mobile').click(function (event) {
    $('.mobile-menu').removeClass('active')
    $('body').removeClass('lock')
  })
})

$(function () {
  $('.mobile-menu__content .menu > ul > li:nth-of-type(2) > a').click(function (
    e,
  ) {
    e.preventDefault()
    $(this).toggleClass('active')
    $(this).siblings('ul').slideToggle()
  })
})

$(function () {
  const aboutPageSlider = new Swiper('.about-page__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1400: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: '.about-page__next',
      prevEl: '.about-page__prev',
    },
  })
})
