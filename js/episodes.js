const episodi = [
{"titolo":"QANON DETECTION","episodio":"1","descrizione":"The episode starts with a brief presentation of Qanon and its presence on social media. The identification of a conspirative Instagram account will be the starting point of the research.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview1.png","linkvideo":"video/ep01.mp4"},
{"titolo":"SAVE THE CHILDREN?","episodio":"2","descrizione":"The posts analysis of the profile previously found led to the identification of an unexpected truth: not all messages are harmless as it could seem.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview2.png","linkvideo":"video/ep02.mp4"},
{"titolo":"A SHARING COMMUNITY","episodio":"3","descrizione":"The analysis goes on by focusing on the importance of content re-posting which allows the community to grow. This process brought to the identification of another interesting profile.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview3.png","linkvideo":"video/ep03.mp4"},
{"titolo":"PLANDEMIC HIGHLIGHTS","episodio":"4","descrizione":"Instagram bans potentially dangerous posts, nevertheless some controversial contents are able to avoid the censorship: the highlights are an effective way to spread disinformation.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview4.png","linkvideo":"video/ep04.mp4"},
{"titolo":"CURIOUS FOLLOWINGS","episodio":"5","descrizione":"In this episode the research is brought to the next level: by applying the method used so far, it is now easier to find many interconnected conspiracy theory related profiles.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview5.png","linkvideo":"video/ep05.mp4"},
{"titolo":"VERIFIED CONSPIRACY THEORIES","episodio":"6","descrizione":"The research is deep inside the rabbithole: even some verified profiles share conspiracy theory related content. This is potentially dangerous.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview6.png","linkvideo":"video/ep06.mp4"},
{"titolo":"THE REASON WHY","episodio":"7","descrizione":"In the extra episode we explain the reasons that prompted us _x000B_to do this research and why_x000B_it is important to analyze these phenomena.","link1":"","link2":"","link3":"","link4":"","link5":"","preview":"images/preview/preview7.png","linkvideo":"video/ep07.mp4"}
]



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
  var prev = a;
  var paolo = episodi[prev];
    $("#contentDesc").text(paolo.descrizione);
    $("#titoloEp").text(paolo.titolo);
    $("#previewEP").attr("src",paolo.preview);
    $("#video").attr("src",paolo.linkvideo);
    $("#link1").attr("href",paolo.link1);
    $("#link2").attr("href",paolo.link2);
    $("#link3").attr("href",paolo.link3);
    $("#link4").attr("href",paolo.link4);
    }


function filler (prova){
    prevGen.removeClass("preview-selected");
    eptitle.removeClass("fileName-selected");
    var temp = "ep"+prova+"title"
    $( "#ep"+prova+"title").addClass("fileName-selected");
    $('#'+prova).addClass("preview-selected");
}


prevGen.click(function(){
    prova = $(this).attr('id');
    alessio(prova);
    filler(prova);
    $("#parent").css("display", "none");
    $("#video").css("display", "block");
    $('#video').attr('controls',"")
    if (temp!=0){
        $("#parent").empty()
    }

    })



    //---- here what happen when the video ends


//     $( "#myVideo4" ).click(function() {
//    video4.style.display = "block";
//      video4.play();
//  });
//

//var parent = document.createElement("div");
//var paragrafo = document.createElement("p");
//var txtReload = document.createElement("p");
//var txtNext = document.createElement("p");
//var carlo = document.createElement("div")
//var rossana = document.createElement("div")
//var toDisc = document.createElement("a")
var prova = 0;


var temp = 0;
  $("#video").on('ended', function(e) {

    $('#video').hide();
      if (temp ==0){
    $(".videocontainer").append("<div id='parent' class='endMessage'></div>" );
          temp= temp+1
  }
      else {
           $("#parent").css("display", "block")

      }
      if (prova < 6){
          console.log("if<7 "+prova)

        $("#parent").css("display", "block")
      $("#parent").append("<p>You're going down the rabbit hole, wanna see what's next?</p><div id='carlo' class='avanti'><p id='txtNext'>Next episode</p></div><div id='rossana' class='ricarica'><p id='txtReload'>See this episode again</p></div>");
      $("#carlo").click(function(){
    $("#video").css("display", "block");
    $('#video').attr('controls',"");
          var cont = parseInt(prova) + 1;
          console.log("if<7 pre ale e fil " + prova )
          console.log("invece " + cont)
          alessio(cont);
          filler(cont);
          prova = cont;
          $("#parent").css("display", "none");
          $("#parent").empty();
          console.log("if<7 aaa " + prova)

      });
      $("#rossana").click(function(){
          console.log(prova)
             $("#parent").css("display", "none");
          $("#parent").empty()
                $("#video").css("display", "block");
                $('#video').attr('controls',"")
            $("#video").currentTime = 0;
            $("#video")[0].play();

        $("#parent").empty();

        });
      }
      else if (prova = 7){
          console.log("if=7"+prova)
       $("#parent").css("display", "block")
       $("#parent").append("<p>Your white tail is now deep in the conspiracy theories, read our disclosure to understand our research.</p><div id='carlo' class='avanti'><a id='toDisc' href='whatsbehind.html'>Disclosure</a></div><div id='rossana' class='ricarica'><p id='txtReload'>See this episode again</p></div>");
       $("#rossana").click(function(){
        $("#parent").css("display", "none");
           $("#parent").empty()
        $("#video").css("display", "block");
           $('#video').attr('controls',"")
            $("#video").currentTime = 0;
            $("#video")[0].play();
            $("#parent").empty();

        });
      })




  })});
//
//
//
//




//control bar
$('#video').on('ended', function() {
      $('#video').removeAttr('controls');
    });




    //------End of video events



//--------Marco Js End
