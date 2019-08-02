import $ from 'jquery';
import 'bootstrap';
import 'owl.carousel'

$(document).ready(function () {



    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $('.about-slider-1').owlCarousel({
         loop:true,
        nav:true,
        navText: [
            '<svg class="arrow-left"><use xlink:href="sprite/symbol/sprite.svg#arrow-left"></use></svg>',
            '<svg class="arrow-right"><use xlink:href="sprite/symbol/sprite.svg#arrow-right"></use></svg>',
        ],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            360:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.about-slider-2').owlCarousel({
        loop:true,
        nav:true,
        navText: [
            '<svg class="arrow-left"><use xlink:href="sprite/symbol/sprite.svg#arrow-left"></use></svg>',
            '<svg class="arrow-right"><use xlink:href="sprite/symbol/sprite.svg#arrow-right"></use></svg>',
        ],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            360:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.about-slider-3').owlCarousel({
        loop:true,
        nav:true,
        navText: [
            '<svg class="arrow-left"><use xlink:href="sprite/symbol/sprite.svg#arrow-left"></use></svg>',
            '<svg class="arrow-right"><use xlink:href="sprite/symbol/sprite.svg#arrow-right"></use></svg>',
        ],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            360:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.about-slider-4').owlCarousel({
        loop:true,
        nav:true,
        navText: [
            '<svg class="arrow-left"><use xlink:href="sprite/symbol/sprite.svg#arrow-left"></use></svg>',
            '<svg class="arrow-right"><use xlink:href="sprite/symbol/sprite.svg#arrow-right"></use></svg>',
        ],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            360:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.news-gallery').owlCarousel({

        nav:true,
        loop:true,
        navText: [
            '<svg class="arrow-left"><use xlink:href="sprite/symbol/sprite.svg#arrow-left"></use></svg>',
            '<svg class="arrow-right"><use xlink:href="sprite/symbol/sprite.svg#arrow-right"></use></svg>',
        ],

        dots:false,

        responsive:{
            0:{
                items:1
            },
            360:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.news-wrap-slider').owlCarousel({

        nav:false,
        loop:true,
        dots:true,

        responsive:{
            1000:{
                items:1
            }
        }
    });

    $('.talent-slider').owlCarousel({

        nav:false,
        loop:true,
        dots:true,

        responsive:{
            0:{
                items:1
            },
            360:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


    console.log(13);
});