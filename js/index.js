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

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
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

});