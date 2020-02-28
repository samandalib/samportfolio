// When the user scrolls down 20px from the top of the document, slide down the navbar
  $(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
  });

  $(window).scroll(function(){
  $('nav').toggleClass('navbar-dark', $(this).scrollTop() < 80);
  });
