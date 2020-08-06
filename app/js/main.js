$(function () {

  $('.menu__burger').on('click', function () {
    $('.menu__burger').toggleClass('menu__burger-active');

    $('.menu__list').slideToggle();
  });

  $('.menu__link').on('click', function () {
    $('.menu__list').slideToggle();

    $('.menu__burger').toggleClass('menu__burger-active');
  });


});