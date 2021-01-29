const sezioni = [
{"titolo":"The Project","descrizione":"The episode starts with a brief presentation of Qanon and its presence on social media. The identification of a conspirative Instagram account will be the starting point of the research."},
{"titolo":"Message","descrizione":"The aim of this project is to inform the people about how simple it is to come across this type of content and to give credit to false or misleading information. We wanted to highlight this fact by showing our research process, which is obviously one of the infinite ways in which a user could encounter conspiracy theories’ messages on social media,in order to raise awareness about this phenomenon.Our audience consists in active social media users, people who use these platforms to keep up with the news and people who aren’t familiar with the topic of conspiracy theories and could potentially share and interact with this type of content."},
{"titolo":"Goals and Audience","descrizione":"The aim of this project is to inform the people about how simple it is to come across this type of content and to give credit to false or misleading information. We wanted to highlight this fact by showing our research process, which is obviously one of the infinite ways in which a user could encounter conspiracy theories’ messages on social media,in order to raise awareness about this phenomenon.Our audience consists in active social media users, people who use these platforms to keep up with the news and people who aren’t familiar with the topic of conspiracy theories and could potentially share and interact with this type of content."},
{"titolo":"Methods","descrizione":"Starting from a profile mentioned in an article from The Atlantic,we proceeded through snowballing in order to find other accounts.",
"descrizione2":"In particular, we looked for suggested profiles, profile’s follower, repost, highlights, comments on the posts and tags."},
{"titolo":"Episodes","descrizione":"The Hunt’s visual language is inspired by the desktop documentary aesthetic: the goal was to recreate the environment of a computer, in order to engage the viewer and to display our research process step by step as it was recorded.The interface assets as well as the interactions are reinterpreted to convey personality and uniqueness to the project, even though the digital context (for example Instagram’s UI) is essential to the concept."},
{"titolo":"Policy","descrizione":"The episodes contains the sensitive data of the instagram profiles that we encountered during our research. In order to protect the privacy of the parties involved we have covered the faces of the profiles with a blur / pixels and we have replaced their names with fictitious words."}

]


$(".wb-el").click(function(){

     var titolo = $(this).text();
     console.log(titolo)
    $('#wb-title').empty();
    $('#wb-txt').empty();
    $('#wb-title').text(titolo);
    $(this).addClass("wb-sidenav_selected");
    $('.wb-el').not(this).removeClass("wb-sidenav_selected");
    var sezione = sezioni.filter(function(el){

                return el.titolo === titolo
    })

    sezione= sezione[0]
    if (sezione.titolo != "Credits" && sezione.titolo!= "Methods"){
        $('#wb-txt').text(sezione.descrizione) ;
        $('.wb-descritpion').append("<div></>")
        }
//    else if (sezione.titolo== Methods){
    else{
     $('#wb-txt').text(sezione.descrizione)
    $('.wb-descritpion').append("<p id='description2'></>")
    $("#description2").text(sezione.descrizione2)
     $('.wb-descritpion').append("<div></>")
}
//else{
//    console.log("qui ce sta da fa la robba dei credits")
//}

} )

//$("a").click(function() {
//  $(this).addClass("wb-sidenav_selected");
//  $('a').not(this).removeClass("wb-sidenav_selected");
//});

$(".preview").click(function() {
  $("#file-window1").fadeIn()
});

//Make the DIV element draggagle:
//dragElement(document.getElementById("file-window1"));
$("#fileModal").draggable();

//function dragElement(elmnt) {
//  var pos1 = 0,
//    pos2 = 0,
//    pos3 = 0,
//    pos4 = 0;
//  if (document.getElementById(elmnt.id + "header")) {
//    /* if present, the header is where you move the DIV from:*/
//    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//  } else {
//    /* otherwise, move the DIV from anywhere inside the DIV:*/
//    elmnt.onmousedown = dragMouseDown;
//  }
//
//  function dragMouseDown(e) {
//    e = e || window.event;
//    e.preventDefault();
//    // get the mouse cursor position at startup:
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//    document.onmouseup = closeDragElement;
//    // call a function whenever the cursor moves:
//    document.onmousemove = elementDrag;
//  }
//
//  function elementDrag(e) {
//    e = e || window.event;
//    e.preventDefault();
//    // calculate the new cursor position:
//    pos1 = pos3 - e.clientX;
//    pos2 = pos4 - e.clientY;
//    pos3 = e.clientX;
//    pos4 = e.clientY;
//    // set the element's new position:
//    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//  }
//
//  function closeDragElement() {
//    /* stop moving when mouse button is released:*/
//    document.onmouseup = null;
//    document.onmousemove = null;
//  }
//}
