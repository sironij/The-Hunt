const sezioni = [
{"titolo":"The Project","descrizione":"The Hunt is a project developed during the Final Synthesis Lab of Communication Design MSc at Politecnico di Milano: it consists in a series of episodes of a research regarding conspiracy theories’-related content spread by Instagram accounts.The project is an extension of previous Phase 2 of the Lab, during which our team investigated the aesthetics of conspiracy theories on digital platforms. For this project we have considered in particular the Protocol 1, in which we analyzed the activity of some Instagram influencers who spread conspiracy theories’ messages using visual languages often characterized by fancy typography and muted, pastel colors that made the content appear as “innocent”. The Hunt is a recorded journey of this investigation in which we analyzed how people, browsing Instagram, can come into contact with certified profiles that dangerously spread conspiracy theories. With simple actions like commenting, scrolling feeds and liking posts, we show how easy it is to get to potentially dangerous content. ","imgname1":"file1","img1":"images/file/modalTest.png","imgname2":"file2","img2":"images/file/modalTest.png","imgname3":"file3","img3":"images/file/modalTest.png","imgname4":"file4","img4":"images/file/modalTest.png","imgname5":"file5","img5":"images/file/modalTest.png",},
{"titolo":"Message","descrizione":"The aim of this project is to inform the people about how simple it is to come across this type of content and to give credit to false or misleading information. We wanted to highlight this fact by showing our research process, which is obviously one of the infinite ways in which a user could encounter conspiracy theories’ messages on social media,in order to raise awareness about this phenomenon.Our audience consists in active social media users, people who use these platforms to keep up with the news and people who aren’t familiar with the topic of conspiracy theories and could potentially share and interact with this type of content.","imgname1":"file1","img1":"images/file/modalTest.png","imgname2":"file2","img2":"images/file/modalTest.png"},
{"titolo":"Goals and Audience","descrizione":"The aim of this project is to inform the people about how simple it is to come across this type of content and to give credit to false or misleading information. We wanted to highlight this fact by showing our research process, which is obviously one of the infinite ways in which a user could encounter conspiracy theories’ messages on social media,in order to raise awareness about this phenomenon.Our audience consists in active social media users, people who use these platforms to keep up with the news and people who aren’t familiar with the topic of conspiracy theories and could potentially share and interact with this type of content.","imgname1":"file1","img1":"images/file/modalTest.png"},
{"titolo":"Methods","descrizione":"Starting from a profile mentioned in an article from The Atlantic,we proceeded through snowballing in order to find other accounts.",
"descrizione2":"In particular, we looked for suggested profiles, profile’s follower, repost, highlights, comments on the posts and tags.","img1":"images/whatsbehind/1.png","img2":"images/whatsbehind/2.png","img3":"images/whatsbehind/3.png","img4":"images/whatsbehind/4.png","img5":"images/whatsbehind/5.png","img6":"images/whatsbehind/6.png"},
{"titolo":"Episodes","descrizione":"The Hunt’s visual language is inspired by the desktop documentary aesthetic: the goal was to recreate the environment of a computer, in order to engage the viewer and to display our research process step by step as it was recorded.The interface assets as well as the interactions are reinterpreted to convey personality and uniqueness to the project, even though the digital context (for example Instagram’s UI) is essential to the concept."},
{"titolo":"Policy","descrizione":"The episodes contains the sensitive data of the instagram profiles that we encountered during our research. In order to protect the privacy of the parties involved we have covered the faces of the profiles with a blur / pixels and we have replaced their names with fictitious words."}

]


function iniziale (seziones){
    $('#wb-txt').text(seziones.descrizione) ;
        $('.wb-documentation').append("<div><div class='preview'><img src="+seziones.img1+"></div>  <div class='fileName'><p>"+seziones.imgname1+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='preview'><img src="+seziones.img2+"></div>  <div class='fileName'><p>"+seziones.imgname2+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='preview'><img src="+seziones.img3+"></div>  <div class='fileName'><p>"+seziones.imgname3+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='preview'><img src="+seziones.img4+"></div>  <div class='fileName'><p>"+seziones.imgname4+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='preview'><img src="+seziones.img5+"></div>  <div class='fileName'><p>"+seziones.imgname5+"</p></div></div>")
}


iniziale(sezioni[0]);





$(".wb-el").click(function(){
    
    var titolo = $(this).text();
    console.log(titolo)
    $('#wb-title').empty();
    $('#wb-txt').empty();
    $('.wb-documentation').empty();
    $('.wb-description').empty();
    $('.wb-description').append("<h2 id='wb-title'></h2><p id='wb-txt'></p>");
    $('.wb-description').append("<div class='wb-documentation'></div>");
    $('#wb-title').text(titolo);
    $(this).addClass("wb-sidenav_selected");
    $('.wb-el').not(this).removeClass("wb-sidenav_selected");
    var sezione = sezioni.filter(function(el){
    return el.titolo === titolo
    })

    sezione= sezione[0];
    if (sezione.titolo == "The Project"){
        iniziale(sezione)
        }
  else if (sezione.titolo== "Message"){
        $('#wb-txt').text(sezione.descrizione) ;
        $('.wb-documentation').append("<div><div class='preview'><img src="+sezione.img1+"></div>  <div class='fileName'><p>"+sezione.imgname1+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='preview'><img src="+sezione.img2+"></div>  <div class='fileName'><p>"+sezione.imgname2+"</p></div></div>") }
   else if (sezione.titolo == "Goals and Audience"){
       $('#wb-txt').text(sezione.descrizione) ;
        $('.wb-documentation').append("<div><div class='preview'><img src="+sezione.img1+"></div>  <div class='fileName'><p>"+sezione.imgname1+"</p></div></div>")
     
   }
    else if (sezione.titolo === "Methods"){
        console.log(sezione)
     $('#wb-txt').text(sezione.descrizione)
        
     $('.wb-description').append("<div class='wb-carousel'><img  src="+sezione.img1+"><img src="+sezione.img2+"><img src="+sezione.img3+"><img  src="+sezione.img4+"><img src="+sezione.img5+"><img src="+sezione.img6+"></div>");
     $('.wb-description').append("<p id='description2'></>")
     $('.wb-description').append("<div id='wb-carouselButton'><p class='wb-backButton'>← BACK</p><p class='wb-nextButton'>NEXT → </p></div>")
     $("#description2").text(sezione.descrizione2)   
        
    }
//    else if (selezione.titolo == "Goals and Audience"){
//     $('#wb-txt').text(sezione.descrizione)
//        
//    }
//    else if (selezione.titolo == "Episodes"){
//      $('#wb-txt').text(sezione.descrizione)   
//    }
//    else if (selezione.titolo == "Policy"){
//      $('#wb-txt').text(sezione.descrizione)   
//    }
    else{ //Credits
     console.log("fuznioa")
     }
   } )


$(".preview").click(function() {
  $("#fileModal").fadeIn()
});

$(".close img").click(function() {
  $("#fileModal").fadeOut()
});

$("#fileModal").draggable();

