"use strict";

jQuery(document).ready(function ($) {



  if ($('.hero-slider')) {

    const swiper_hero = new Swiper('.hero-slider', {
      loop: true,
      pagination: {
        el: '.dc-swiper-pagination',
        clickable: true,
      },

    });

  }

  if ($('.swiper-products')) {

    const swiper_products = new Swiper('.swiper-products', {
      loop: true,
      pagination: {
        el: '.dc-swiper-pagination',
        clickable: true,
      },

      slidesPerView: 1,
        spaceBetween: 45,
        breakpoints: {
          576: {
            slidesPerView: 1.3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 2.4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 35
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 40
          }

        }

    });

  }


  $('.js-hamburger').on('click', function (e) {
    e.preventDefault(); 
    $(this).toggleClass('is-active');
    $('.main-navigation-wrapper').toggleClass('main-navigation-wrapper_active');
    $('.site-header').toggleClass('active');
  });


  $('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
      .attr('placeholder', '');
  }).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });


});