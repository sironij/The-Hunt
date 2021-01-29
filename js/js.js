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
