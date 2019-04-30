$(document).ready(() => {
    $('nav a').on("click" , function(e){
        e.preventDefault();
        var top = $($(this).attr('href')).offset().top - 110;
        $("html, body").animate({ scrollTop: top }, 800);
    });
})

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
