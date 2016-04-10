(function() {
    let partitions = {
        'services-main__practices': '.services-main__practices',
        'services-main__sectors': '.services-main__sectors'
    };
    let services = new Menu('.services-main__menu', partitions, 768);

    $('#services-main').on('click', function(e){
    	if($(window).width < 768) return;
    	e.preventDefault();
    	$(this).addClass('active');
    	$('.services-main').css('height', $('main').height());
    	$('.services-main').addClass('active');
    });

     $('.hamburger-services').on('click', function(e){
    	 $('#services-main').removeClass('active');
    	$('.services-main').removeClass('active');
    });



})();
