$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
                scrollTop: $(hash).offset().top - 100
			}, 1000, function () {
                window.location.hash = hash;
			});
		} 
	});
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});