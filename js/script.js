$(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('.navigation').addClass('sticky');
    } else {
       $('.navigation').removeClass('sticky');
    }
});
