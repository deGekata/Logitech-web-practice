$('.nav-link').click(function () {
    $(".nav-link.active").css('border-bottom', 'none');     
    $('.nav-link.active').removeClass('active')
    $(this).addClass('active')
    $(this).css('border-bottom', '1px solid #fff');  

});

var collap = false;


$(".header＿logo_dark_tablet").css("display", "none");
$(".header＿logo_white_tablet").css("display", "none");
$(".header＿logo_dark").css("display", "none");
$(".header＿logo_white").css("display", "none");





const mediaQuery2 = window.matchMedia('(min-width: 1024px)');

function handleTabletChange2(e) {
    document.location.hash = ''
    if (e.matches) {    
            $(".header＿logo_dark_tablet").css("display", "none");
            $(".header＿logo_white_tablet").css("display", "none");
            $(".header＿logo_dark").css("display", "none");
            $(".header＿logo_white").css("display", "none");
            $(".header＿logo_white_desktop").css("display", "block");
        } else {
            $(".header＿logo_white_desktop").css("display", "none");
            if(collap){
                $(".header＿logo_dark_tablet").css("display", "none");
                $(".header＿logo_white_tablet").css("display", "block");
                $(".header＿logo_dark").css("display", "none");
                $(".header＿logo_white").css("display", "none");
            } else {
                $(".header＿logo_dark_tablet").css("display", "block");
                $(".header＿logo_white_tablet").css("display", "none");
                $(".header＿logo_dark").css("display", "none");
                $(".header＿logo_white").css("display", "none");
            }
        }
}
mediaQuery2.addListener(handleTabletChange2);
handleTabletChange2(mediaQuery2);



const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
    document.location.hash = ''
    if (e.matches) {
        if(collap){
            $(".header＿logo_dark_tablet").css("display", "none");
            $(".header＿logo_white_tablet").css("display", "none");
            $(".header＿logo_dark").css("display", "none");
            $(".header＿logo_white").css("display", "block");
        } else {
            $(".header＿logo_dark_tablet").css("display", "none");
            $(".header＿logo_white_tablet").css("display", "none");
            $(".header＿logo_dark").css("display", "block");
            $(".header＿logo_white").css("display", "none");
        }
    } else {
        if($(window).width() <= 1024){
            if(collap){
                $(".header＿logo_dark_tablet").css("display", "none");
                $(".header＿logo_white_tablet").css("display", "block");
                $(".header＿logo_dark").css("display", "none");
                $(".header＿logo_white").css("display", "none");
            } else {
                $(".header＿logo_dark_tablet").css("display", "block");
                $(".header＿logo_white_tablet").css("display", "none");
                $(".header＿logo_dark").css("display", "none");
                $(".header＿logo_white").css("display", "none");
            }
        }
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);





$("button.navbar-toggler.collapsed span.navbar-toggler-icon").click(function(){
    $(".header＿logo_dark").css("display", "none");
    $(".header＿logo_white").css("display", "none");
    $(".header＿logo_dark_tablet").css("display", "none");
    $(".header＿logo_white_tablet").css("display", "none");
    if( $(window).width() < 768){
        if(collap){
            collap = false;
            $(".navbar").css("background-color", "transparent");
            $(".header＿logo_dark").css("display", "block");
            $(".header＿logo_white").css("display", "none");
        } else {
            collap = true;
            $(".navbar").css("background-color", "#2F3132");
            $(".header＿logo_dark").css("display", "none");
            $(".header＿logo_white").css("display", "block");
        }
    } else {
            if(collap){
                collap = false;
                $(".navbar").css("background-color", "transparent");
                $(".header＿logo_dark_tablet").css("display", "block");
                $(".header＿logo_white_tablet").css("display", "none");
            } else {
                collap = true;
                $(".navbar").css("background-color", "#2F3132");
                $(".header＿logo_dark_tablet").css("display", "none");
                $(".header＿logo_white_tablet").css("display", "block");
        }
    }
});