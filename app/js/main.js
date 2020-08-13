$(function () {

  $('.menu__burger').on('click', function () {
    // $('.menu__list').toggleClass('menu__list-active', 500, 'easeOutSine');

    $('.menu__list').slideToggle();
  });

  $('.menu__link').on('click', function () {
    $('.menu__list').slideToggle();

    // $('.menu__burger').toggleClass('menu__burger-active');
  });


});