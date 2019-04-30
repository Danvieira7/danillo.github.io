$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// $('.scroll').on("click", function(e){
//     e.preventDefault();
//     var dest =$(this).attr("href");
//     $("html, body").animate({
//         'scrollTop': $(dest).offset().top - 110
//     }, 2000);
// });




$(document).ready(function () {
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top -110
			}, 1000, function () {
				window.location.hash = hash;
			});
		} 
	});
});





// (function ($){
//     $(document).ready(function(){
//         $('html, body').animate({
//             'scrollTop': $('href').offset().top
//         }, 2000);
//     });
// })(jQuery);


// $(document).ready(() => {
//     $('nav a').on("click" , function(e){
//         e.preventDefault();
//         var top = $($(this).attr('href')).offset().top - 110;
//         $("html, body").animate({ scrollTop: top }, 800);
//         console.log(top);
//     });
// })

