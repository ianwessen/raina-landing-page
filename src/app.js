import './style.scss';


$(document).ready(() => {
  console.log('load')
})

$('.js-grid-item').click(function () {
  $('.js-light-box').addClass('light-box--active')
})

$('.js-light-box, .js-light-box-close').click(function () {
  $('.js-light-box').removeClass('light-box--active')
})

$('.js-light-box-content').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
})