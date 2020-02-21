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
  
  $('.selector li a').on('click', function(){
    $('.selector li a').removeClass('active');
    $(this).addClass('active');
    var category = $(this).attr('data-attr');
    $('.works-container li').css('display','none')
    $('.' + category).css('display','block');
  })

  const observer = lozad();
  observer.observe();
});
