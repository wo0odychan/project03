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

    $('.main_slide').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });



    $('.pic_slide').slick({
        arrows: true,
        autoplay: true,
        asNavFor: ".product_slide",
    });

    $('.product_slide').slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        // 모바일 반응형이어유
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
        // 
    });




})