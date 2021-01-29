$(document).scroll(function() {
  $("#scroll").fadeOut("slow");
});



// prevent refresh

$(window).on('unload', function() {
  $(window).scrollTop(0);
});

window.onunload = function() {
  window.scrollTo(0, 0);
}

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

jQuery.fn.center = function() {
  this.css("position", "absolute");
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



// what's behind

$("a").click(function() {
  $(this).addClass("wb-sidenav_selected");
  $('a').not(this).removeClass("wb-sidenav_selected");
});

$(".preview").click(function() {
  $("#file-window1").fadeIn()
});

//Make the DIV element draggagle:
dragElement(document.getElementById("fileModal"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// 3D effect finestre -> da valutare
//  $('html').mousemove(function(e) {
//
//    var wx = $(window).width();
//    var wy = $(window).height();
//
//    var x = e.pageX - this.offsetLeft;
//    var y = e.pageY - this.offsetTop;
//
//    var newx = x - wx / 2;
//    var newy = y - wy / 2;
//
//    $('span').text(newx + ", " + newy);
//
//    $('#wrapper div').each(function() {
//      var speed = $(this).attr('data-speed');
//      if ($(this).attr('data-revert')) speed *= -1;
//      TweenMax.to($(this), 1, {
//        x: (1 - newx * speed),
//        y: (1 - newy * speed)
//      });
//
//    });
//
//  });
