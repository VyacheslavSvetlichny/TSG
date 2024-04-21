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
            'active'
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
    $('.mobile-menu__content .menu > ul > li:nth-of-type(2) > a').click(
        function (e) {
            e.preventDefault()
            $(this).toggleClass('active')
            $(this).siblings('ul').slideToggle()
        }
    )
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
