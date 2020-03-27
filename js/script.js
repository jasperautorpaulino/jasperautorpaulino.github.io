$(function() {

	$(".card-img-block li").mouseenter(function() {
		var slicedText = $(this)
			.find("img")
			.attr("src")
			.slice(0, -10);
		$(this)
			.find("img")
			.attr("src", slicedText + "_white.png");
	});

	$(".card-img-block li").mouseleave(function() {
		var slicedText = $(this)
			.find("img")
			.attr("src")
			.slice(0, -10);
		$(this)
			.find("img")
			.attr("src", slicedText + "_black.png");
	});

	$("nav ul li a").on("click", function() {
		$("nav ul li a").removeClass("active");
		$(this).addClass("active");
	});

	$(".burger-menu").on("click", function() {
		$("nav").toggleClass("active");
	});

	$("nav ul li a").on("click", function() {
		$("nav").removeClass("active");
	});

	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});

	$('.works-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false
	});

	$(".card-list dl dd").each(function() {
		var skillLevel = $(this).attr("data-level-id");
		$(this).find("span").css("width", skillLevel + "0%");
	});

	$('.selector li a').on('click', function(){
		$('.selector li a').removeClass('active');
		$(this).addClass('active');
		var category = $(this).attr('data-attr');
		$('.works-container li').css('display','none')
		$('.' + category).css('display','block');
	})

	if($(window).width() < 738){

		$(window).scroll(function() {
			if (
				$(window).scrollTop() >=
				$(".home").offset().top + $(".home").innerHeight()
			) {
				$(".burger-menu").css("right", "1%");
			} else {
				$(".burger-menu").css("right", "-100%");
			}
		});
	
		if (
			$(window).scrollTop() >=
			$(".home").offset().top + $(".home").innerHeight()
		) {
			$(".burger-menu").css("right", "1%");
		} else {
			$(".burger-menu").css("right", "-100%");
		}
		
		$('head').append('<link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/aos/3.0.0-beta.1/aos.css"/>');

		const observer = lozad();
		observer.observe();

		function replaceLink(data){
			$('.main-options li:nth-child(' + data + ')').find('a').attr('href', spNavLink[data]);
		}

		var spNavLink = ['#home','#about','#skills','#works','#contact'];

		$('.main-options li').each(function(){
			var spLink = $(this).find('a').attr('data-sp');
			replaceLink(spLink);
		});

		$('.works-container02').slick();
	}
});