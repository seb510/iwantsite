$(function () {
	$('.offer-content a').click(function () {
		$('.offer-content p').css('color','#eccb2e');
	});
	$('.logo').click(function () {
		$('.offer-content h1').css('color','#eccb2e');
	});
	$('.menu li a').click(function () {
		$(this).toggleClass('active');
	});
});