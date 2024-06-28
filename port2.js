const downloadButton = document.getElementById("resbtn");
downloadButton.addEventListener("click",function(){
const fileUrl = "https://drive.google.com/file/d/1FQHWlYdXF_STgi7cvJEbDAMQ_GeAzPVf/view?usp=drivesdk";
const fileName=  "RESUME";

const link =document.createElement("a");
link.href=fileUrl;
link.download= fileName;

link.click();
});

let menu =document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');


sections.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
        });
        sec.classList.add('show-animate');
    }
    else{
        sec.classList.remove('show-animate');
    }    
});

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
}

document.querySelector('#search-icon').onclick =() =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#closed').onclick =() =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
      delay: 7400,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    
    loop:true,
    breakpoints:{
        0:{
        slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
            },
        768:{
                slidesPerView: 2,
                },
        1024:{
                  
            slidesPerView: 3,
                   
        },

    },
});
