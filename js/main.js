$(function () {
    var mixer = mixitup('.blog__body');

    $('.customers__slider').slick({
        slidesToShow: 2,
        infinite: true,
        dots: true,
        appendArrows: $('slider__arrows'),
        appendDots: $('.slider__dots')
        
    })

    $('.custom__slider-prev').on('click', function(e){
      e.preventDefault()
      $('.customers__slider').slick('slickPrev')  
    })


    $('.custom__slider-next').on('click', function(e){
      e.preventDefault()
      $('.customers__slider').slick('slickNext')  
    })


    
   


})


