

// let progressBar = document.querySelector(".skills_html");

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
