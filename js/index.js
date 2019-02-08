$(window).on("scroll", function(){
  if($(window).scrollTop()){
    $('nav').addClass('transparent');
  } else {
    $('nav').removeClass('transparent');
  }
})


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {    
    if(isScrolledIntoView($('.j-anim')))
    {
        $('.c-anim').addClass('c');
        $('.j-anim').addClass('java');
        $('.js-anim').addClass('javascript');
        $('.py-anim').addClass('python');
    }     
});

//https://stackoverflow.com/questions/34954689/trigger-a-css-keyframe-animation-via-scroll