 $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));
    console.log('target');
    if( target.length ) {
        event.preventDefault();
        var mq = window.matchMedia( "(max-width: 1024px)" );

        if (mq.matches) {
        	$('html, body').stop().animate({
            	scrollTop: target.offset().top - 38
        	}, 1000);
    	}
    	else {
    		$('html, body').stop().animate({
            	scrollTop: target.offset().top - $('header').height()
        	}, 1000);
    	}
    };

});
