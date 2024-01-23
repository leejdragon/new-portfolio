let progressBar = document.querySelectorAll('.skills_bar');

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("scrollY", value);

  if (value > 350) {
    for (let i = 0; i < progressBar.length; i++) {
      progressBar[i].style.animation = "progress 1.5s ease-in-out forwards";
    };
  };
});

let scale = document.querySelector('.skills_img img');

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("scrollY", value);

  if (value > 373) {
    scale.style.animation = "scale 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";
  };
});

// bxSlider 
$(document).ready(function () {
  $('.slider').bxSlider({
    mode: 'fade',
    speed: 1000,
    pause: 3000,
    pager: false,
    auto: true,
    controls: false
  });
});

// 클릭 시 페이지의 최상단으로 이동
$('.top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
  return false;
});

// 플로팅 배너
$(document).ready(function () {

  var floatPosition = parseInt($(".sideban").css('top'));

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var newPosition = scrollTop + floatPosition + "px";

    $(".sideban").stop().animate({
      "top": newPosition
    }, 500);

  }).scroll();

});


// $(".collapse-item").click(function(){
//   if($(this).find(".content").is(":visible")){
//       $(this).find(".content").slideUp();
//   }
//   else{
//       $(this).find(".content").slideDown();
//   }
// });


// $(document).ready(function(){
//   $(".menu > p").click(function(){
//     var submenu = $(this).next("ul");

//     if( submenu.is(":visible") ){
//       submenu.slideUp();
//     }else{
//       submenu.slideDown();
//     }
//   });
// });



$(document).ready(function () {
  $(".title").click(function () {
    if ($(this).hasClass("active")) {
      slideUp();
    } else {
      slideUp();
      $(this).addClass("active").next().slideDown();
    }
    function slideUp() {
      $(".title").removeClass("active").next().slideUp();
    }
  });
});



$(document).ready(function(){
 
//   $('.hg_btn').click(function (){
//       $('.nav_menu').show();
//   });

//  $('.hg_btn').click(function (){
//       $('.nav_menu').hide();
//   });

// $('.hg_btn').click(function (){
//       $('#header').toggleClass('on');
//   });
//   $('.close').click(function (){
//       $('#header').removeClass('on');
//   });

  $('.more_btn').click(function() {
    $(this).toggleClass('active');
    $('.nav_list').toggleClass('active');
  });

  
});