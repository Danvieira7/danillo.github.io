$(document).ready(() => {
    $('nav a').on("click" , function(e){
        e.preventDefault();
        var top = $($(this).attr('href')).offset().top - 105;
        $("html, body").animate({ scrollTop: top }, 800);
    });
})
