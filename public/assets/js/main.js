!function(e){"use strict";jQuery(window).on("load",(function(){e(".preloader").delay(800).fadeOut("slow")})),e("select").niceSelect(),setTimeout((function myGreeting(){new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null,resetAnimation:!0}).init()}),1800),window.addEventListener("scroll",(function(){document.querySelector("header.style-1, header.style-2, header.style-3").classList.toggle("sticky",window.scrollY>0)})),e(".search-btn").on("click",(function(){e(".mobile-search").addClass("slide")})),e(".search-cross-btn").on("click",(function(){e(".mobile-search").removeClass("slide")})),e(window).on("scroll",(function(){e(window).scrollTop()>300?e(".scroll-btn").addClass("show"):e(".scroll-btn").removeClass("show")})),e(".scroll-btn").on("click",(function(i){i.preventDefault(),e("html, body").animate({scrollTop:0},"300")})),e(".mobile-menu-btn").on("click",(function(){e(".main-menu").addClass("show-menu")})),e(".menu-close-btn").on("click",(function(){e(".main-menu").removeClass("show-menu")})),e(".dropdown-icon").on("click",(function(){e(this).toggleClass("active").next("ul").slideToggle(),e(this).parent().siblings().children("ul").slideUp(),e(this).parent().siblings().children(".active").removeClass("active")}));var i=document.querySelectorAll(".sidebar-menu-icon"),s=document.querySelectorAll(".cross-icon"),t=document.querySelectorAll(".menu-toggle-btn-full-shape");i.forEach((e=>{e.addEventListener("click",(()=>{document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((e=>{e.classList.add("show-sidebar")}))}))})),s.forEach((e=>{e.addEventListener("click",(()=>{document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((e=>{e.classList.remove("show-sidebar")}))}))})),window.onclick=function(e){t.forEach((i=>{e.target===i&&i.classList.remove("show-sidebar")}))};new Swiper(".banner1",{slidesPerView:1,speed:1500,loop:!0,spaceBetween:10,loop:!0,centeredSlides:!0,roundLengths:!0,parallax:!0,effect:"fade",navigation:!1,fadeEffect:{crossFade:!0},autoplay:{delay:4e3},pagination:{el:".hero-one-pagination",clickable:!0}}),new Swiper(".category1-slider",{slidesPerView:1,speed:1e3,spaceBetween:30,loop:!0,autoplay:!0,roundLengths:!0,navigation:{nextEl:".category-prev1",prevEl:".category-next1"},breakpoints:{280:{slidesPerView:1},440:{slidesPerView:2},576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:5},1200:{slidesPerView:6},1400:{slidesPerView:7}}}),new Swiper(".category2-slider",{slidesPerView:1,speed:1e3,spaceBetween:30,loop:!0,autoplay:!0,roundLengths:!0,pagination:!1,navigation:{nextEl:".category-prev2",prevEl:".category-next2"},breakpoints:{280:{slidesPerView:1},380:{slidesPerView:2},540:{slidesPerView:3},576:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5},1200:{slidesPerView:6},1400:{slidesPerView:7}}}),new Swiper(".upcoming-slider",{slidesPerView:1,speed:1e3,spaceBetween:24,loop:!0,roundLengths:!0,pagination:{el:".swiper-pagination",clickable:"true"},navigation:{nextEl:".coming-prev1",prevEl:".coming-next1"},breakpoints:{280:{slidesPerView:1},480:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".upcoming-slider2",{slidesPerView:1,speed:1e3,spaceBetween:24,loop:!0,roundLengths:!0,pagination:{el:".swiper-pagination",clickable:"true"},navigation:{nextEl:".coming-prev2",prevEl:".coming-next2"},breakpoints:{280:{slidesPerView:1,pagination:!1},480:{slidesPerView:1,pagination:!1},768:{slidesPerView:2,pagination:!1},992:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".upcoming-slider3",{slidesPerView:1,speed:1e3,spaceBetween:24,loop:!0,roundLengths:!0,pagination:{el:".swiper-pagination",clickable:"true"},navigation:{nextEl:".coming-prev3",prevEl:".coming-next3"},breakpoints:{280:{slidesPerView:1},480:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".blog-slider",{slidesPerView:2,speed:1e3,spaceBetween:24,loop:!0,roundLengths:!0,navigation:{nextEl:".blog-prev1",prevEl:".blog-next1"},breakpoints:{280:{slidesPerView:1},480:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".testimonial-slider",{slidesPerView:1,speed:1e3,spaceBetween:24,loop:!0,roundLengths:!0,navigation:{nextEl:".testi-prev1",prevEl:".testi-next1"},breakpoints:{280:{slidesPerView:1},480:{slidesPerView:1,autoplay:!0},768:{slidesPerView:1},992:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".testimonial-slider2",{slidesPerView:1,speed:1e3,spaceBetween:24,loop:!0,roundLengths:!0,navigation:{nextEl:".testi-prev2",prevEl:".testi-next2"},breakpoints:{280:{slidesPerView:1},480:{slidesPerView:1,autoplay:!0},768:{slidesPerView:1},992:{slidesPerView:2},1200:{slidesPerView:3}}});e("#slick1").slick({rows:2,dots:!0,arrows:!1,infinite:!0,speed:300,slidesToShow:6,slidesToScroll:6,responsive:[{breakpoint:1200,settings:{arrows:!1,slidesToShow:5}},{breakpoint:991,settings:{arrows:!1,slidesToShow:4}},{breakpoint:768,settings:{arrows:!1,slidesToShow:3}},{breakpoint:576,settings:{arrows:!1,slidesToShow:2}},{breakpoint:480,settings:{arrows:!1,slidesToShow:2}},{breakpoint:350,settings:{arrows:!1,slidesToShow:1}}]});const n=document.querySelector("#togglePassword"),o=document.querySelector("#password");n&&n.addEventListener("click",(function(e){const i="password"===o.getAttribute("type")?"text":"password";o.setAttribute("type",i),this.classList.toggle("bi-eye")}));const r=document.getElementById("togglePassword2"),l=document.querySelector("#password2");r&&r.addEventListener("click",(function(e){const i="password"===l.getAttribute("type")?"text":"password";l.setAttribute("type",i),this.classList.toggle("bi-eye")})),e(".counter-item").each((function(){e(this).isInViewport((function(e){if("entered"===e)for(var i=0;i<document.querySelectorAll(".odometer").length;i++){var s=document.querySelectorAll(".odometer")[i];s.innerHTML=s.getAttribute("data-odometer-final")}}))})),e(".counter-single").each((function(){e(this).isInViewport((function(e){if("entered"===e)for(var i=0;i<document.querySelectorAll(".odometer").length;i++){var s=document.querySelectorAll(".odometer")[i];s.innerHTML=s.getAttribute("data-odometer-final")}}))})),e(".popup-youtube").magnificPopup({type:"iframe"})}(jQuery);