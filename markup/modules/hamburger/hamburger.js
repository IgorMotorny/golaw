(function() {
    let $hamburger = $('.hamburger');
    let $header = $('.header');
    let $nav = $('.navigation');

    $hamburger.on('click touch', function(e) {
        e.preventDefault();
        $hamburger.toggleClass('active');

        window.onscroll = function() {
            if ($nav.is('.active')) {
                window.scrollTo(0, 0);
            }

        };
        setTimeout(function() {
            $header.toggleClass('active');
            $nav.toggleClass('active');
        }, 500);
    });
})();