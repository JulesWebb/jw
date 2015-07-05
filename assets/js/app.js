$(document).foundation();

/* trigger modal by event */
$('#cta').foundation('reveal', 'click');
$('a.reveal-link').trigger('click');
$('a.close-reveal-modal').trigger('click');


/* SVG / PNG */
 if (!Modernizr.svg) {
	 $('img[src*="svg"]').attr('src', function () {
		 return $(this).attr('src').replace('.svg', '.png');
	 });
 }