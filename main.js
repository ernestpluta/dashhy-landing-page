const menu = document.querySelector(".navigation__list");
const menuItems = document.querySelectorAll(".navigation__item");
const hamburger= document.querySelector(".navigation__hamburger");
const menuClose= document.querySelector(".menu-close");
const menuOpen = document.querySelector(".menu-open");
const navbar = document.querySelector('.navigation__wrapper');
 // pricing plan option
const option = document.querySelectorAll(".pricing__option")
const pricingType = document.querySelectorAll(".pricing__price > span")

// change pricing options
option[0].addEventListener("click", () => {
  if(!option[0].classList.contains("pricing__option--active")){
    option[0].classList.add("pricing__option--active")
    option[1].classList.remove("pricing__option--active")
    pricingType.forEach(type => {
      type.textContent = "/ month"
    })
  }
})
option[1].addEventListener("click", () => {
  if(!option[1].classList.contains("pricing__option--active")){
    option[1].classList.add("pricing__option--active")
    option[0].classList.remove("pricing__option--active")
    pricingType.forEach(type => {
      type.textContent = "/ year"
    })
  }
})

// toggle hamburger menu icon and class
hamburger.addEventListener("click", () => {
  if (menu.classList.contains("hideMobileMenu")) {
      menu.classList.remove("hideMobileMenu");
      menuClose.style.display = "block";
      menuOpen.style.display = "none";
      menu.style.top = `${navbar.offsetHeight - 1}px`;
      navbar.classList.add("scrolled")
    } else {
      menu.classList.add("hideMobileMenu");
      menuClose.style.display = "none";
      menuOpen.style.display = "block";
      if (window.scrollY <= navbar.offsetHeight) {
        navbar.classList.remove("scrolled")
      }
    }
      });



  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', () => {
  if ( window.innerWidth <= 1024) {
    let currentScrollPos = window.pageYOffset;

  // hide menu when scrolling down and show menu when scrolling up

    menu.classList.contains("hideMobileMenu")
    && (currentScrollPos - prevScrollpos > 0)
    && (currentScrollPos >= navbar.offsetHeight)
    ? navbar.style.top = `-${navbar.offsetHeight + 1}px`
    : navbar.style.top = "0";

    prevScrollpos = currentScrollPos;

  // change menu background color when scrolling on mobile
    if (window.scrollY >= navbar.offsetHeight){
      navbar.classList.add("scrolled")
    }
    else {
      if(menu.classList.contains("hideMobileMenu")){
        navbar.classList.remove("scrolled")
      }
    }
}
else {
  navbar.classList.remove("scrolled")
  navbar.style.top = "0"
}
})


  let mySwiper = undefined;
  function initSwiper() {
      let screenWidth = window.innerWidth;
      if(screenWidth < 768 && mySwiper == undefined) {
        document.querySelector(".swiper-pagination").style.display = "block";
          mySwiper = new Swiper ('.swiper', {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            a11y: true,
            watchSlidesVisibility: true,
            keyboardControl: true,
            grabCursor: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
      
            breakpoints: {
              480: {
                slidesPerView: 1,
              },
              768: {
                grabCursor: false,
                pagination: false,
                noSwiping: true,
                noSwipingClass: "swiper",
                onlyExternal: true,
                centeredSlides: false,
                slidesPerView: 2,
                watchSlidesVisibility: true,
              },
              1024 : {
                grabCursor: false,
                pagination: false,
                noSwiping: true,
                noSwipingClass: "swiper",
                onlyExternal: true,
                centeredSlides: false,
                slidesPerView:3,
              }
            }
          });
      } else if (screenWidth >= 768 && mySwiper != undefined) {
          mySwiper.destroy();
          mySwiper = undefined;
          document.querySelector(".swiper-wrapper").removeAttribute("style")
          document.querySelector(".swiper-slide").removeAttribute("style")
          document.querySelector(".swiper-pagination").style.display = "none";
      }
  }
  
  //Swiper plugin initialization
  initSwiper();
  
  //Swiper plugin initialization on window resize
  window.addEventListener("resize", initSwiper)

