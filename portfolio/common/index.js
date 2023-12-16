let progressBar = document.querySelectorAll('.skills_bar');

window.addEventListener("scroll", function (){
  let value = window.scrollY;
  // console.log("scrollY", value);

  if(value > 350){
    for (let i = 0; i < progressBar.length; i++) {
      progressBar[i].style.animation = "progress 1.5s ease-in-out forwards";
    };
  };
});

let scale = document.querySelector('.skills_img img');

window.addEventListener("scroll", function (){
  let value = window.scrollY;
  // console.log("scrollY", value);

  if(value > 293){
    scale.style.animation = "scale 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";
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
