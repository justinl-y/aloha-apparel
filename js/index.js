'use strict';

var product_categories = [
    'images/product-categories/mens-category.jpg',
    'images/product-categories/trends-category.jpg',
    'images/product-categories/glasses-category.jpg',
    'images/product-categories/sale-category.jpg',
    'images/product-categories/bags-category.jpg',
    'images/product-categories/womens-category.jpg'
];

$(document).ready(function() {

    /*alert(product_categories.length);

    var $product_category_html = $('.product-categories div a').html();
    var index = 0;

    $product_category_html.each(function () {
        $(this).attr('src', product_categories[i]);
        i++;
    });

    console.log($product_category_html);*/

    //code for flickity plugin functionality
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    //code for smooth scrolling plugin functionality
    $('body').smoothScroll ({
        delegateSelector: 'ul.mainnav a'
    });

    /*var existingScreenSize = 0;

    $(window).resize(function() {
        var currentScreenSize = 0;

        if ($(this).width() < 600) {
            currentScreenSize = 1;

            if (!(currentScreenSize === existingScreenSize)) {
                existingScreenSize = currentScreenSize;

                //alert('screen = mobile');

                $('.carousel-main').attr('data-flickity', '{ "groupCells": 1 }');
            }
        } else if ($(this).width() >= 600 && $(this).width() < 1240) {
            currentScreenSize = 2;

            if (!(currentScreenSize === existingScreenSize)) {
                existingScreenSize = currentScreenSize;

                //alert('screen = tablet');

                $('.carousel-main').attr('data-flickity', '{ "groupCells": 2 }');
            }
        } else if ($(this).width() >= 1240 ) {
            currentScreenSize = 3;

            if (!(currentScreenSize === existingScreenSize)) {
                existingScreenSize = currentScreenSize;

                //alert('screen = desktop');

                $('.carousel-main').attr('data-flickity', '{ "groupCells": 4 }');
            }
        }
    });*/





    //add box shadow to subscribe form input on focus and remove default text
    $('.subscribe input[type="text"]').on('focus', function(){
        $(this).css('box-shadow','2px 2px 7px #111111');
        $(this).val('');
    });

    //remove box shadow from form input on blur and return default text on no entry
    $('.subscribe input[type="text"]').on('blur', function(){
        $(this).css('box-shadow', 'none');

        if ($(this).val().length === 0) {
            $(this).val('Your Email');
        }
    });

    //submit button validation and form submission
    $('.subscribe input[type="button"]').on('click', function(e){
        e.preventDefault();

        var email = $('.subscribe input[type="text"]').val();
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

        if ( email.length === 0 || !emailPattern.test(email) ) {
            alert('Please enter a valid email.');
        } else {
            //off to php we go
            $('#subscribe-form').submit();

            alert('Thanks for subscribing.');
        }
    });

});