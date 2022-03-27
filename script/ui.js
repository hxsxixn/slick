
$("#s_lan").click(function(event){
    $(".area_box").hide(500);
    $(".lan_box").slideToggle(700);
});
$("#s_area").click(function(){
    $(".lan_box").hide(500);
    $(".area_box").toggle(700);
});
$(document).ready(function(){
    $('.slide').slick({
        arrows: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: "mm",
        prevArrow: "<button type='button' class='slick-prev slick-arrow'>test</button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><img src='images/nextMini.png' alt=''></button>",

    });
  });