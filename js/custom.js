$(function () {
    $('#toogle_button').click(function () {
        $('#cancel').toggleClass('d-none');
        $('#menu').toggleClass('d-none');
    });
    $(".client_slider").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ["<img src='images/left.png'>", "<img src='images/right.png'>"]
    });

    // blog slider
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});