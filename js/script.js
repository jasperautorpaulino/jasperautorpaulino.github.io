$(function(){
	var stickyHeight = $('.banner').height();
	
	var scrollVal = $(window).scrollTop();
	var educScroll = $('#educ').innerHeight();
	var skillScrollInner = $('#skills').innerHeight();
	// var skillScrollHeight = $('#skills').offset().top;
	var timesTwo = $(window).scrollTop > stickyHeight;
	var secHeight = $('section').innerHeight();

	var winScroll = $(window).scrollTop();
	var educBtmScroll = winScroll + $('#educ').outerHeight();

	function show(){
		$(".progressBar").addClass('sticky');
		$("#topRightLogo").addClass('sticky02');
	}
	
	function hide(){
		$(".progressBar").removeClass('sticky');
		$("#topRightLogo").removeClass('sticky02');
	}

	console.log(winScroll);

	if(timesTwo){
		show();
	}else{
		hide();
	}
	
	$(window).scroll(function(){
		if($(window).scrollTop() > stickyHeight){
			show();
		}else{
			hide();
		}

		if($(window).scrollTop() >= skillScrollInner){
			$('.fa-keyboard').addClass('iconScale');
			console.log('success')
		}else{
			$('.fa-keyboard').removeClass('iconScale');
			console.log('meh')
		}
	})
	
	// $('.navDown').mousedown(function(){
	// 	timeout = setInterval(function(){
	// 		window.scrollBy(secHeight, -1);
	// 	}, 3);
		
	// 	return false;
	// });
	
	// $(document).mouseup(function(){
	// 	clearInterval(timeout);
	// 	return false;
	// })
})