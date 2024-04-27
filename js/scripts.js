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

$(function () {
  $('.catalog-menu').on('click', '.catalog-menu__btn', function () {
    $(this).parent().parent().toggleClass('active')
    $(this).parent().siblings('ul').slideToggle()
  })
})

$(function () {
  $('.catalog-item__favorite').click(function () {
    $(this).toggleClass('active')
  })
})

$(document).ready(function () {
  $('.category-filter__list').each(function () {
    $(this).children().slice(0, 5).show()

    if ($(this).children().length > 5) {
      $(this).siblings('button').show()

      $(this)
        .siblings('button')
        .click(function () {
          $(this).hide()
          let itemsCount = $(this)
            .siblings('.category-filter__list')
            .children().length
          $(this)
            .siblings('.category-filter__list')
            .children()
            .slice(0, itemsCount)
            .show()
        })
    }
  })
})

$('.select').on('click', '.select__head', function () {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open')
    $(this).next().fadeOut()
  } else {
    $('.select__head').removeClass('open')
    $('.select__list').fadeOut()
    $(this).addClass('open')
    $(this).next().fadeIn()
  }
})

$('.select').on('click', '.select__item', function () {
  $('.select__head').removeClass('open')
  $(this).parent().fadeOut()
  $(this).parent().prev().text($(this).text())
  $(this).parent().siblings('input').val($(this).text())
})

$(document).click(function (e) {
  if (!$(e.target).closest('.select').length) {
    $('.select__head').removeClass('open')
    $('.select__list').fadeOut()
  }
})

$(function () {
  $('.sorter-price').click(function () {
    if ($('.sorter-price__up').hasClass('active')) {
      $('.sorter-price__up').removeClass('active')
      $('.sorter-price__down').addClass('active')
    } else {
      $('.sorter-price__down').removeClass('active')
      $('.sorter-price__up').addClass('active')
    }
    if ($('.sorter-price__down').hasClass('active')) {
      $('.sorter-price__text').text('Сначала дороже')
    } else $('.sorter-price__text').text('Сначала дешевле')
  })
})

$(function () {
  $('.items-view__row').click(function () {
    $('.items-view__column').removeClass('active')
    $(this).addClass('active')
    localStorage.setItem('catalog-item', 'row')
    $('.category-list').addClass('row')
  })

  $('.items-view__column').click(function () {
    localStorage.removeItem('catalog-item')
    $('.category-list').removeClass('row')
    $(this).addClass('active')
    $('.items-view__row').removeClass('active')
  })
})

if (localStorage.getItem('catalog-item') == 'row') {
  $('.category-list').addClass('row')
  $('.items-view__column').removeClass('active')
  $('.items-view__row').addClass('active')
} else {
  $('.category-list').removeClass('row')
  $('.items-view__row').removeClass('active')
  $('.items-view__column').addClass('active')
}

$(document).ready(function () {
  $('.category-filter__close').click(function () {
    $.fancybox.close()
  })
})

$(function () {
  const productSliderNav = new Swiper('.product-img__thumbs', {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 400,
    loop: true,
  })

  const productSliderMain = new Swiper('.product-img__slider', {
    speed: 400,
    spaceBetween: 15,
    loop: true,
    thumbs: {
      swiper: productSliderNav,
    },
    navigation: {
      nextEl: '.product-next',
      prevEl: '.product-prev',
    },
  })
})

$(function () {
  const similarSlider = new Swiper('.product-similar__slider', {
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
      nextEl: '.product-similar__next',
      prevEl: '.product-similar__prev',
    },
  })
})

$(function () {
  $('.product-favorite').click(function () {
    $(this).toggleClass('active')
  })

  $('.equipment-slide__favorite').click(function () {
    $(this).toggleClass('active')
  })
})

$(function () {
  $('.table tbody tr td:first-child').wrapInner(
    "<div class='table-content'></div>",
  )
  $('.table thead tr th:first-child').wrapInner(
    "<div class='table-content'></div>",
  )

  $('.table thead tr th:first-child').css('min-height', $('thead tr').height())

  $('.table-content').each(function () {
    let cellHeight = $(this).height()
    $(this).parent().siblings().height(cellHeight)
  })

  $('.table tbody tr').each(function () {
    let height = $(this).find('td:not(:first-child)').height()
    $(this).find('td:first-child').css('min-height', height)
  })

  $('.table tbody tr').each(function () {
    let row = $(this).offset()
    console.log(row)
    let table = $('.table-inner').offset()
    let top = row.top - table.top

    $(this).children('td:first-child').css('top', top)
  })
})

$(function () {
  const customSlider = new Swiper('.images-list', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: '.images-next',
      prevEl: '.images-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },

      576: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  })
})
