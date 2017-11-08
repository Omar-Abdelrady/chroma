$(function() {

    // //nav-open-function------------------------------------------
    // function navOpen() {
    //     $('.nav-bar-wrapper').toggleClass('nav-khulgya');
    //     $('.nav-overlay').fadeIn(225);
    //     $('body, html').css('overflow', 'hidden');
    // }
    //
    // //nav-close-function------------------------------------------
    // function navClose() {
    //     $('.nav-bar-wrapper').removeClass('nav-khulgya');
    //     $('.nav-overlay').fadeOut(225);
    //     $('body, html').css('overflow', 'visible');
    //     bugListClose();
    // }

    function width() {
        var width = 0;
        $('ul.chips-list li').each(function() {
            width += $(this).outerWidth(true);
        });
        console.log(width);
        $('ul.chips-list').css('width', width + 1);
    }
    width();

    $('.colors').each(function () {
        var hex = $(this).children().children('.hex').html();
        $(this).css('background', hex);
        console.log(hex);
        var svg = $(this).children().children('.shade').after('<img class="copy-btn" src="assets/copy.svg" alt="copy-svg">');
        // $('details').hasClass('dark-shade')
    });
    //search-open-function------------------------------------------
    function searchOpen() {
        $('.search-bar').addClass('search-active');
        $('svg.nav-btn').css('display', 'none');
        $('svg.back-btn').css('display', 'inline-block');
        $('.search-overlay').fadeIn(195);
        $('body').css('overflow', 'hidden');
    }

    //search-close-function------------------------------------------
    function searchClose() {
        $('.search-bar').removeClass('search-active');
        $('.search-overlay').fadeOut(195);
        $('svg.nav-btn').css('display', 'inline-block');
        $('svg.back-btn').css('display', 'none');
        $('body').css('overflow', 'visible');
    }

    //nav-open----------------------------------------
    $('svg.nav-btn').on('click',function () {
        navOpen();
    });

    //nav-close----------------------------------------
    $('.nav-overlay,li.menu-item').on('click',function () {
        navClose();
    });

    //search-input-value-reset-------------------------------------------
    $('svg.search-close-btn').on('click',function () {
        $('input.search-text-field').val('');
        card.removeAttr('style');
        $('svg.search-btn').css('display', 'inline-block');
        $('svg.search-close-btn').css('display', 'none');
    });

    //search-bar-open-and-close--------------------------------------
    $('.search-text-field, svg.search-btn,.search-overlay, svg.back-btn').on('click',function () {
        if($('.search-bar').hasClass('search-active') && $('#myinput').val() != '' ) {
            searchClose();
            searchFunction();
            $('svg.search-btn').css('display', 'none');
            $('svg.search-close-btn').css('display', 'inline-block');
        }
        else if($('.search-bar').hasClass('search-active') && $('#myinput').val() === '' ) {
            searchClose();
            searchFunction();
        }
        else {
            searchOpen();
            $('svg.search-btn').css('display', 'inline-block');
            $('svg.search-close-btn').css('display', 'none');
        }
    });

    //nav-list-selection--------------------------------------------------
    $('li.apps-item, li.bug-list').on('click',function () {
        $('li.apps-item, li.bug-list').addClass('menu-item-selected');
        $('li.bug-list, li.apps-item').not(this).removeClass('menu-item-selected');
    });

    //chip-filter---------------------------------------
    var card = $('.card');


    $('ul.chips-list li').on('click',function () {
        $(this).addClass('color-selected');
        $('.chips').not(this).removeClass('color-selected');
        width();
    });

    $('.chips').on('click',function () {
        card.removeClass('card-hidden');
        $('.colors').css('width','100%');
        $('.colors .details').css('display','block')
    });
    $('.chips.black').on('click',function () {
        $('.colors').css('width','50');
        $('.colors .details').css('display','none')
    });

    $('.chips.red500').on('click',function () {
        card.not('.red').addClass('card-hidden');
    });
    $('.chips.pink500').on('click',function () {
        card.not('.pink').addClass('card-hidden');
    });
    $('.chips.purple500').on('click',function () {
        card.not('.purle').addClass('card-hidden');
    });
    $('.chips.deep-purple500').on('click',function () {
        card.not('.deep-purple').addClass('card-hidden');
    });
    $('.chips.indigo500').on('click',function () {
        card.not('.indigo').addClass('card-hidden');
    });
    $('.chips.blue500').on('click',function () {
        card.not('.blue').addClass('card-hidden');
    });
    $('.chips.light-blue500').on('click',function () {
        card.not('.light-blue').addClass('card-hidden');
    });
    $('.chips.cyan500').on('click',function () {
        card.not('.cyan').addClass('card-hidden');
    });
    $('.chips.teal500').on('click',function () {
        card.not('.teal').addClass('card-hidden');
    });
    $('.chips.green500').on('click',function () {
        card.not('.green').addClass('card-hidden');
    });
    $('.chips.light-green500').on('click',function () {
        card.not('.light-green').addClass('card-hidden');
    });
    $('.chips.lime500').on('click',function () {
        card.not('.lime').addClass('card-hidden');
    });
    $('.chips.yellow500').on('click',function () {
        card.not('.yellow').addClass('card-hidden');
    });
    $('.chips.amber500').on('click',function () {
        card.not('.amber').addClass('card-hidden');
    });
    $('.chips.orange500').on('click',function () {
        card.not('.orange').addClass('card-hidden');
    });
    $('.chips.deep-orange500').on('click',function () {
        card.not('.deep-orange').addClass('card-hidden');
    });

    $('.chips.brown500').on('click',function () {
        card.not('.brown').addClass('card-hidden');
    });

    $('.chips.grey500').on('click',function () {
        card.not('.grey').addClass('card-hidden');
    });

    $('.chips.blue-grey500').on('click',function () {
        card.not('.blue-grey').addClass('card-hidden');
    });


    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 236) {
    //         $('#color-chips').css('box-shadow', 'rgba(0, 0, 0, 0.3) 0px 4px 8px');
    //
    //     } else {
    //         $('#color-chips').css('box-shadow', 'none');
    //     }
    // });

    //event.stopPropagation---------------------------------------------------
    $(".info-wrapper").children().on('click',function(event){
        event.stopPropagation();
    });

    //anchor-for-scrolling-------------------------------------
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });

    //-----color-auto-change
    // var primaryColorsValues = ['#F44336','#E91E63','#9C27B0','#673AB7','#3F51B5', '#2196F3', '#03A9F4','#00BCD4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548','#9E9E9E','#607D8B'];
    //
    // var primaryColors = primaryColorsValues[Math.floor(Math.random() * primaryColorsValues.length)];
    //
    // $('#header').each(function() {
    //     $('#header').css('background-color', primaryColors);
    // });
});

//search--------------------------------------
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("grid-wrapper");
    li = ul.getElementsByTagName('li');

    // jo catch ni karte
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
