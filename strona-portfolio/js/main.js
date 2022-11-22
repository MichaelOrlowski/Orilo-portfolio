$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({scrollTop: 0});
  });

  // toggle menu/navbar script

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });


  // typing animation script
  if ($(".typing")[0] !== undefined) {
    var typed = new Typed(".typing", {
      strings: ["Developer", "Musician", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }


  if ($(".typing-2")[0] !== undefined) {
    var typed = new Typed(".typing-2", {
      strings: ["Developer", "Musician", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  if ($(".typing-pl-1")[0] !== undefined) {
    var typed = new Typed(".typing-pl-1", {
      strings: ["Programistą", "Muzykiem", "Projektantem"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }


  if ($(".typing-pl-2")[0] !== undefined) {
    var typed = new Typed(".typing-pl-2", {
      strings: ["Programistą", "Muzykiem", "Projektantem"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }

  // change js contact

  var changejspl = document.getElementsByClassName("js-change-contact-pl");
  var changejseng = document.getElementsByClassName("js-change-contact-eng");
  var mediaQueryList = window.matchMedia('(max-width: 947px)');

  function screenCheckPl(e){
    if(e.matches){
      changejspl[0].innerHTML = 'na dole <i class="fas fa-arrow-down"></i>'
    }
    else{
      changejspl[0].innerHTML = 'po prawej stronie <i class="fas fa-arrow-right"></i>';
    }
  }

  function screenCheckEng(e){
    if(e.matches){
      changejseng[0].innerHTML = 'at the bottom <i class="fas fa-arrow-down"></i>'
    }
    else{
      changejseng[0].innerHTML = 'on the right <i class="fas fa-arrow-right"></i>';
    }
  }

  if(changejseng[0] !== undefined){
    screenCheckEng(mediaQueryList);
    mediaQueryList.addEventListener('change', screenCheckEng);
  }

  if(changejspl[0] !== undefined){
    screenCheckPl(mediaQueryList);
    mediaQueryList.addEventListener('change', screenCheckPl);
  }



  // owl carousel script

  var owl = $('.carousel');

  function createdCarousel(){
    owl.owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        850: {
          items: 2,
          nav: false
        },
        1300: {
          items: 3,
          nav: false
        }
      }
    });
  }

  createdCarousel();


  // owl.owlcarousel2_filter( '.blue' );

  $( '.owl-filter-bar' ).on( 'click', '.item', function() {

    if($('.carousel')[0].style.display !== "flex"){
      var $item = $(this);
      var filter = $item.data( 'owl-filter' );

      owl.owlcarousel2_filter( filter );
    }

  } );


  $('.destroy').on('click', function(){
    if($('.carousel')[0].style.display !== "flex"){
      owl.owlcarousel2_filter('*');
      $('.carousel').owlCarousel('destroy');
      $('.carousel')[0].style.display = "flex";
    }
    else{
      createdCarousel();
      $('.carousel')[0].style.display = "block";
    }

    console.log

    if($('.destroy')[0].innerText === 'Expand project list'){
      $('.destroy')[0].innerText = 'Collapse project list';
    }else if($('.destroy')[0].innerText === 'Collapse project list'){
      $('.destroy')[0].innerText = 'Expand project list';
    }
    else if($('.destroy')[0].innerText === 'Rozwiń listę projektów'){
      $('.destroy')[0].innerText = 'Zwiń listę projektów';
    }
    else if($('.destroy')[0].innerText === 'Zwiń listę projektów'){
      $('.destroy')[0].innerText = 'Rozwiń listę projektów';
    }

  })


});

