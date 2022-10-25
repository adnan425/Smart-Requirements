// Bottom to top
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$("#toTop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});
jQuery(window).scroll(function () {
    var sticky = jQuery('#head'),
        scroll = jQuery(window).scrollTop();
    if (scroll >= 20) sticky.addClass('sticky_header');
    else sticky.removeClass('sticky_header');
});
var swiper = new Swiper('.customer_review', {
    slidesPerView: "2",
    loopedSlides: 1,
    // loop: true,
    spaceBetween: 25,
    centeredSlides: false,
    cssMode: true,
    watchSlidesVisibility: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        // el: '.swiper-pagination',
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",      
        // type: "fraction"
    },
    breakpoints: {
        667: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: "2",
            spaceBetween: 15,
            // centeredSlides: true,    
        },
        1024: {
            slidesPerView: "2",
            spaceBetween: 30,
            //  centeredSlides: true,
        },
    },
    /* events */
    on: {
      slideChange: function(){
        var currentSlide = this.realIndex + 1;
        // console.log("currentSlide is:" + currentSlide);
        document.querySelector('.current-slide').innerHTML = currentSlide;
      },
      beforeInit: function(){
      let numOfSlides = this.wrapperEl.querySelectorAll(".swiper-slide").length;
      document.querySelector('.total-slides').innerHTML = numOfSlides;
      }
    }
  });
// footer accordion
$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.footer_menu .menu_list ').addClass('accordion-content');
    } else {
        $('.footer_menu .menu_list ').removeClass('accordion-content');
    }
}).resize();
$(function () {
    $(".accordion-content").css("display", "none");
    // $(".accordion_title:first-of-type").addClass("open");
    $(".accordion_title").click(function () {
        $(".open").not(this).removeClass("open").next().slideUp(300);
        $(this).toggleClass("open").next().slideToggle(300);
    });
});
$('.features_slide').slick({
    dots: true,
    infinite: true,
    speed: 1000, 
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480, 
      } 
    ]
  });
  $('.collaborate_slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    // fade: true,
    // cssEase: 'linear',
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
      settings: "unslick"
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.select2').select2({
    minimumResultsForSearch: 20 // at least 20 results must be displayed
});
// Load more features
$(document).ready(function(){
    $("#firstLoad .main_card").slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $("#firstLoad .main_card:hidden").slice(0, 3).slideDown();
      if($("#firstLoad .main_card:hidden").length == 0) {
        $("#loadMore").hide();
      }
    }); 
    $("#secondLoad .main_card").slice(0, 3).show();
    $("#SecondMore").on("click", function(e){
      e.preventDefault();
      $("#secondLoad .main_card:hidden").slice(0, 3).slideDown();
      if($("#secondLoad .main_card:hidden").length == 0) {
        $("#SecondMore").hide();
      }
    });
    //  JS ADDED BY KINJAL 
    $('.listing-slider-one').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 800,
      slidesToShow:1,
      slidesToScroll: 1 
    }); 
    $('.managing-staff-slider').slick({
      dots: true,
      infinite: true,
      arrows: true,
      speed: 800,
      slidesToShow:1,
      slidesToScroll: 1 
    });  
    $('.own-your-sass-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 800,
      slidesToShow:1,
      slidesToScroll: 1 
    }); 
});
