$(function(){
	function show(){
		$(".progressBar").addClass('sticky');
		$("#topRightLogo").addClass('sticky02');
	}
	
	function hide(){
		$(".progressBar").removeClass('sticky');
		$("#topRightLogo").removeClass('sticky02');
	}
	
	$('.progressBar a').click(function(){
//		var currSec = $(this).attr('href');
////		$('.secArea section').removeClass('active');
////		$(currSec).addClass('active');
		$('.progressBar a i').removeClass('progActive');
		$(this).children().addClass('progActive');
	})
	
	$(window).scroll(function(){
		$('.secArea section').each(function(){
			if($(this).offset().top <= $(window).scrollTop() && ($(this).offset().top + $(this).innerHeight()) >= $(window).scrollTop()){
			var currID = $(this).attr('id');
			$('.progressBar a i').removeClass('progActive');
			$('.' + currID).addClass('progActive');
		}
		})
	})
})