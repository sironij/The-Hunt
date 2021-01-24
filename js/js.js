const episodi = [
{"titolo":"QANON DETECTION","episodio":"1","descrizione":"The episode starts with a brief presentation of Qanon and its presence on social media. The identification of a conspirative Instagram account will be the starting point of the research.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview1.png","linkvideo":"video/ep01.mp4"},
{"titolo":"SAVE THE CHILDREN?","episodio":"2","descrizione":"The posts analysis of the profile previously found led to the identification of an unexpected truth: not all messages are harmless as it could seem.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview2.png","linkvideo":"video/ep02.mp4"},
{"titolo":"A SHARING COMMUNITY","episodio":"3","descrizione":"The analysis goes on by focusing on the importance of content re-posting which allows the community to grow. This process brought to the identification of another interesting profile.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview3.png","linkvideo":"video/ep03.mp4"},
{"titolo":"PLANDEMIC HIGHLIGHTS","episodio":"4","descrizione":"Instagram bans potentially dangerous posts, nevertheless some controversial contents are able to avoid the censorship: the highlights are an effective way to spread disinformation.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview4.png","linkvideo":"video/ep04.mp4"},
{"titolo":"CURIOUS FOLLOWINGS","episodio":"5","descrizione":"In this episode the research is brought to the next level: by applying the method used so far, it is now easier to find many interconnected conspiracy theory related profiles.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview5.png","linkvideo":"video/ep05.mp4"},
{"titolo":"VERIFIED CONSPIRACY THEORIES","episodio":"6","descrizione":"The research is deep inside the rabbithole: even some verified profiles share conspiracy theory related content. This is potentially dangerous.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview6.png","linkvideo":"video/ep06.mp4"},
{"titolo":"THE REASON WHY","episodio":"7","descrizione":"In the extra episode we explain the reasons that prompted us _x000B_to do this research and why_x000B_it is important to analyze these phenomena.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview7.png","linkvideo":"video/ep07.mp4"}
]


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


var prevGen = $(".preview");
var eptitle =$(".fileName")



    
prevGen.mouseover(function(){
    prevGen.css("cursor"," pointer");
    
                  });
    
    
function alessio(a) {
    var prev = a.attr('id');
   
  var paolo = episodi[prev];    
    $("#contentDesc").text(paolo.descrizione);
    $("#titoloEp").text(paolo.titolo);
    $("#previewEP").attr("src",paolo.preview);
    $("#video").attr("src",paolo.linkvideo);
    $("#link1").attr("src",paolo.link1);
    $("#link2").attr("src",paolo.link2);
    $("#link3").attr("src",paolo.link3);
    $("#link4").attr("src",paolo.link4);
    
       
    //})
}
        
   

    
    
prevGen.click(function(){
    prova = $(this);
    console.log("clic")
    alessio(prova);
    prevGen.removeClass("preview-selected");
    eptitle.removeClass("fileName-selected");
    var temp = "ep"+prova.attr('id')+"title"
    console.log(temp)
    $( "#ep"+prova.attr('id')+"title").addClass("fileName-selected");
    prova.addClass("preview-selected");
    
    
})



// Get the <span> element that closes the modal //
// var span = document.getElementsByClassName("spegni")[0];


//--------Marco Js End




});
