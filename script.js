$(window).scroll(function () { 
    $("#banner-scroll").css("transform", "translateX(" + ($(window).scrollTop()*0.3 - 500) + "px");
});

const infiniteLogo = $("#infinite-logo");
const slideTime = 40;
const slideItems = $(infiniteLogo).children();
const ItemCount = $(infiniteLogo).children().length;
const slideItemsGap = slideTime / ItemCount;

slideItems.each( (index, item) => {
    $(item).css("animation-delay", index * slideItemsGap - slideTime + "s");
    $(item).css("animation-duration", slideTime + "s");
})

$(".slideIn").each(function (index, item) {
    $(window).scroll(function () { 
        const winScroll = $(window).scrollTop() + $(window).height();
        const top = $(item).offset().top-100;
        const FadeInPos = 50;
        if(top+FadeInPos<=winScroll){
            $(item).removeClass("slideIn");
        } else {
            $(item).addClass("slideIn");
        }
    });
});