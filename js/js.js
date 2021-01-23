$(document).scroll(function() {
  $("#scroll").fadeOut("slow");
});

$(document).ready(function() {

  // prevent refresh

  $(window).on('unload', function() {
   $(window).scrollTop(0);
});

window.onunload = function(){ window.scrollTo(0,0); }

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

  // viewport plug in
  ;
  (function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i, el) {
        function visPx() {
          var H = $(this).height(),
            r = el.getBoundingClientRect(),
            t = r.top,
            b = r.bottom;
          return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
        }
        visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));

  $("#alert_active").inViewport(function(px) {
    if (px) $(".alert_container").fadeIn("slow");
  });

  $("#alert_active2").inViewport(function(px) {
    if (px) $(".alert_container2").fadeIn("slow");
  });

  $("#alert_active3").inViewport(function(px) {
    if (px) $(".alert_container3").fadeIn("slow");
  });


 //center in viewport

  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}


  // lock scroll on alert

  $(".alert_container").inViewport(function(px) {
    if (px) $("html").addClass("lockScroll");
    if (px) $(".menu-bar").addClass("unfocused");
    if (px) $(".container").addClass("unfocused");
    if (px) $(".sticky").addClass("unfocused");
    $(".alert_container").center();
  });

  $(".alert_container2").inViewport(function(px) {
    if (px) $("html").addClass("lockScroll");
    if (px) $(".menu-bar").addClass("unfocused");
    if (px) $(".container").addClass("unfocused");
    if (px) $(".sticky").addClass("unfocused");
    $(".alert_container2").center();
  });

  $(".alert_container3").inViewport(function(px) {
    if (px) $("html").addClass("lockScroll");
    if (px) $(".menu-bar").addClass("unfocused");
    if (px) $(".container").addClass("unfocused");
    if (px) $(".sticky").addClass("unfocused");
    $(".alert_container3").center();
  });

  // reactivate scroll

  $("#alert1_btn").click(function() {
    $("html").removeClass("lockScroll");
    $(".menu-bar").removeClass("unfocused");
    $(".container").removeClass("unfocused");
    $(".sticky").removeClass("unfocused");

    $(".alert_container").fadeOut();
    $("#alert_active").hide();
  });

  $("#alert2_btn").click(function() {
    $("html").removeClass("lockScroll");
    $(".menu-bar").removeClass("unfocused");
    $(".container").removeClass("unfocused");
    $(".sticky").removeClass("unfocused");

    $(".alert_container2").fadeOut();
    $("#alert_active2").hide();
  });

  $("#alert3_btn").click(function() {
    $("html").removeClass("lockScroll");
    $(".menu-bar").removeClass("unfocused");
    $(".container").removeClass("unfocused");
    $(".sticky").removeClass("unfocused");

    $(".alert_container3").fadeOut();
    $("#alert_active3").hide();
  });




  // 3D effect finestre -> da valutare
  $('html').mousemove(function(e) {

    var wx = $(window).width();
    var wy = $(window).height();

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    var newx = x - wx / 2;
    var newy = y - wy / 2;

    $('span').text(newx + ", " + newy);

    $('#wrapper div').each(function() {
      var speed = $(this).attr('data-speed');
      if ($(this).attr('data-revert')) speed *= -1;
      TweenMax.to($(this), 1, {
        x: (1 - newx * speed),
        y: (1 - newy * speed)
      });

    });

  });

//----------------- Marco Js---------------
var modal = document.getElementById("myModal");

//Funciton on click change content of img and redirect to different episode
//var declaration for element to be filled with json/csv data
var prev1 = document.getElementById("prev1");
var prev2 = document.getElementById("prev2");
var prev3 = document.getElementById("prev3");
var prev4 = document.getElementById("prev4");
var prev5 = document.getElementById("prev5");
var prev6 = document.getElementById("prev6");
var prev7 = document.getElementById("prev7");
var prevEp = document.getElementById("previewEp")
var prevGen = $(".preview");

var description = document.getElementById("contentDesc");
var doc1 = document.getElementById("link1");
var doc2 = document.getElementById("link2");
var doc3 = document.getElementById("link3");
var doc4 = document.getElementById("link4");
var video = document.getElementById("video");
var titoloEp = document.getElementById("titoloEp")

const episodi= $.getJSON("episodes.json");
//const obj = JSON.parse(episodi)
    
prevGen.mouseover(function(){
    prevGen.css("cursor"," pointer");
                  });
    
    
function alessio(a) {
       var prev = a.attr('id');
    var test =  $("#prev1").attr("id");
       console.log("prev "+prev + "test "+ test);
    }
    
    
prevGen.click(function(){
    prova = $(this);
    alessio(prova);
})



// Get the <span> element that closes the modal //
// var span = document.getElementsByClassName("spegni")[0];


//--------Marco Js End




});
