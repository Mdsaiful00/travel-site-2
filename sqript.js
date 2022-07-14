let  searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar');
let userBtn = document.querySelector('#user-btn');
let loginForm = document.querySelector('.login-form-container');
let colseBtn = document.querySelector('#colse-btn');
let videoBtn = document.querySelectorAll('.vid-btn')
let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active'); 
    loginForm.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active')
}

let themeToggler = document.querySelector('.theme-toggler');
  document.querySelector('.toggle-btn').onclick = () =>{
    themeToggler.classList.toggle('active');
  }
  document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
    btn.onclick = () =>{
      let color = btn.style.background;
      document.querySelector(':root').style.setProperty('--orange', color );
    }
  });
  
  
  

searchBtn.addEventListener('click' , () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

userBtn.addEventListener('click' , () =>{
    loginForm.classList.toggle('active');
})

colseBtn.addEventListener('click' , () =>{
    loginForm.classList.remove('active');
})

menuBar.addEventListener('click', () =>{
  menuBar.classList.toggle('fa-times');
  navBar.classList.toggle('active');
})




// it copy code korsi

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});



var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});