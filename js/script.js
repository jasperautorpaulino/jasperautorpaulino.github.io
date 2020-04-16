$(function(){
	$('.skill dd').each(function(){
		var dataAttr = $(this).attr('data-attr');
		$(this).find('span').css('width', dataAttr + '0%').prepend(dataAttr + '0%')
	})

	$('.burgerMenu').on('click',function(){
		$('nav').toggleClass('active');
		setTimeout(function(){
			$('nav ul li a').toggleClass('showNav');
		},200)
	});

	$('nav ul li a').on('click',function(){
		$('nav').removeClass('active');
		$('nav ul li a').removeClass('showNav');
	})

	$(window).resize(function(){
		if($(window).width() >= 768){
			$('.connect-box, downloadCV').css('display','none')
		}else{
			$('.connect-box, downloadCV').attr('style','')
		}
	})
	if($(window).width() >= 768){
		$('.connect-box, downloadCV').css('display','none')
	}else{
		$('.connect-box, downloadCV').attr('style','')
	}
})