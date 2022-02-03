$(document).ready(function () {
    if ($('.slider__body').length > 0) {
        $('.slider__body').slick({
            arrows: true,
            adaptiveHeight: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 810,
                    settings: {
                        arrows:false,
                        adaptiveHeight: true,
                    }
                }
            ]
        });
    }
});