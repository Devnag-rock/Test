$(document).ready(function() {

    $(function() {
        // Card's slider
        var $carousel = $('.slider-for');
        $carousel
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                adaptiveHeight: true,
                asNavFor: '.slider-nav'
            })

        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            variableWidth: true
        });
    });
    // Remove active class from all thumbnail slides
    $('.slider-nav .slick-slide').removeClass('slick-active');

    // Set active class to first thumbnail slides
    $('.slider-nav .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slider-nav .slick-slide').removeClass('slick-active');
        $('.slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

    $('.color').click(function() {
        var color = $(this).attr('data-value');
        var color_calss = '.color_' + color;
        $(".slider-nav").slick('slickFilter', color_calss);
        $('.slider-nav').slick('resize');
        $(".slider-for").slick('slickFilter', color_calss);
        $('.slider-for').slick('resize');
    });

});


