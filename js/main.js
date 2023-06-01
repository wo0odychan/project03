$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')

        }
    });
    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.pic_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".product_slide",
    });

    $('.main_business .arrows .left').on('click', function () {
        $('.product_slide').slick('slickNext')
    });
    $('.main_business .arrows .right').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });


    $('.product_slide').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".pic_slide",
        focusOnSelect: true,

        // 모바일 반응형이어유
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });
    // 누르면 위까지 올라가는 거
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

})