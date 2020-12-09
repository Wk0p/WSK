// Scroll

function scroll(e){
​
    var href = $(this).attr('href');
​
    e.preventDefault();
​
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);
​
    location.hash = href;
​
};
​
$('a[href^="#"]').click(scroll);


// Instagram

(function($){
		$(window).on('load', function(){
			$.instagramFeed({
				'username': 'callofduty',
				'container': "#instagram-feed-demo",
				'display_profile': true,
				'display_biography': true,
				'display_gallery': true,
				'get_raw_json': false,
				'callback': null,
				'styling': true,
				'items': 36,
				'items_per_row': 6,
				'margin': 0.3
			});
		});
	})