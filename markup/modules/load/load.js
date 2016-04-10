$(window).on('load', function() {
        $('.loader').animate({
            opacity: 0
        }, function() {
            $('.slider-main__title.load').removeClass('load');
            $('.cases.load').removeClass('load');
            setTimeout(function() {
                $('.slider-main__next.load').removeClass('load');
                 mainSlider.start();
            }, 1000);
        }); 

});
