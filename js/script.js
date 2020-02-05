$(function(){

	$('.card-img-block li').mouseenter(function(){
		var slicedText = $(this).find('img').attr('src').slice(0, -10);
		$(this).find('img').attr('src', slicedText + '_white.png')
	})
	
	$('.card-img-block li').mouseleave(function(){
		var slicedText = $(this).find('img').attr('src').slice(0, -10);
		$(this).find('img').attr('src', slicedText + '_black.png')
	})

	$('nav ul li a').on('click', function(){
		$('nav ul li a').removeClass('active');
		$(this).addClass('active');
	})

	$(window).scroll(function(){
		$('.sections > div').each(function(){
			if($(this).offset().top <= $(window).scrollTop() && ($(this).offset().top + $(this).innerHeight()) >= $(window).scrollTop()){
			var currID = $(this).attr('id');
			$('nav ul li a').removeClass('active');
			$('.' + currID + 'Nav').addClass('active');
		}
		})

		if($(window).scrollTop() >= $('.home').offset().top + $('.home').innerHeight()){
			$('nav').css('right', '1%')
		}else{
			$('nav').css('right', '-100%')
		}
	})

	if($(window).scrollTop() >= $('.home').offset().top + $('.home').innerHeight()){
		$('nav').css('right', '1%')
	}else{
		$('nav').css('right', '-100%')
	}


	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	})

	const observer = lozad();
	observer.observe();
});