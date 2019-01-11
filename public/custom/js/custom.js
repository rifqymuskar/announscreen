$(document).ready(function(){

    jQuery('.news-demo').slippry({
      // general elements & wrapper
      slippryWrapper: '<div class="sy-box news-slider" />', // wrapper to wrap everything, including pager
      elements: 'article', // elments cointaining slide content

      // options
      adaptiveHeight: false, // height of the sliders adapts to current 
      captions: false,


      // transitions
      transition: 'fade', // fade, horizontal, kenburns, false
      speed: 1000,
       pause: 8000,

      // slideshow
      autoDirection: 'prev'
    });

})

