let tab;
let tabContent;

(function ($, undefined) {

    $('.our-services__nav__item a').click(function (e) {
        e.preventDefault();
    });

    tabContent = document.getElementsByClassName('our-services__description');
    tab = document.getElementsByClassName('our-services__nav__item');
    hideTabsContent(1);

    function hideTabsContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tab[i].classList.remove('item-active');
        }
    }

    document.getElementsByClassName('our-services__nav')[0].onclick = function (event) {
        let target = event.target;
        if (target.className === 'our-services__nav__item') {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    };

    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('item-active');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    $('.breaking-news__gallery__item a').click(function (e) {
        e.preventDefault();
    });

    $('.breaking-news__gallery__item').hover(function () {
        $(this).find('.breaking-news__gallery__item__date').css("background-color", "rgb(17, 208, 172)");
        $(this).find('.breaking-news__gallery__item__text').css("color", "rgb(17, 208, 172)");
    }, function () {
        $(this).find('.breaking-news__gallery__item__date').css("background-color", "rgb(26, 60, 53)");
        $(this).find('.breaking-news__gallery__item__text').css("color", "#777777");
    });

    // SLIDER

    $('.slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        speed: 100,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.slider-nav',
        rtl: false
    });

    $('.slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        speed: 100,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-text, .slider-img',
        dots: false,
        fade: false,
        centerMode: false,
        centerPadding: '60px',
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'

    });


})(jQuery);