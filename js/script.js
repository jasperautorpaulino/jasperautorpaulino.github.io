$(function(){
	$('.skill dd').each(function(){
		var dataAttr = $(this).attr('data-attr');
		$(this).find('span').css('width', dataAttr + '0%').prepend(dataAttr + '0%')
	})

	$('.burgerMenu').on('click',function(){
		$('nav').toggleClass('active')
	})
})