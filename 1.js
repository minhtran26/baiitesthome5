	$(document).ready(function() {

       $('.slide-topblogger').owlCarousel({
        loop:true,
        autoplay:true,
        animateOut:true,
        margin:30,
        responsiveClass:true,
        dots:false,
        rewind:true,
        navText:['<img src="images/icon-blogger-prev.png"/>','<img src="images/icon-blogger-next.png"/>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });


       $('.slide-product').owlCarousel({
        loop:true,
        autoplay:true,
        animateOut:true,
        margin:30,
        responsiveClass:true,
        dots:false,
        rewind:true,
        navText:['<img src="images/button-product-prev.png"/>','<img src="images/button-product-next.png"/>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

       

});