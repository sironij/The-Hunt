const sezioni = [
{"titolo":"The Project","descrizione":"The Hunt is a project developed during the Final Synthesis Lab of Communication Design MSc at Politecnico di Milano: it consists in a series of episodes of a research regarding conspiracy theories’-related content spread by Instagram accounts. The project is an extension of previous Phase 2 of the Lab, during which our team investigated the aesthetics of conspiracy theories on digital platforms. For this project we have considered in particular the Protocol 1, in which we analyzed the activity of some Instagram influencers who spread conspiracy theories’ messages using visual languages often characterized by fancy typography and muted, pastel colors that made the content appear as “innocent”. The Hunt is a recorded journey of this investigation in which we analyzed how people, browsing Instagram, can come into contact with certified profiles that dangerously spread conspiracy theories. With simple actions like commenting, scrolling feeds and liking posts, we show how easy it is to get to potentially dangerous content.","imgname1":"file1","img1":"images/whatsbehind/prj1.png","imgname2":"file2","img2":"images//whatsbehind/prj2.png","imgname3":"file3","img3":"images//whatsbehind/prj3.png","imgname4":"file4","img4":"images//whatsbehind/prj4.png","imgname5":"file5","img5":"images/whatsbehind/prj5.png",},
{"titolo":"Message","descrizione":"Conspiracy theories are no news, but online platforms such as social media (or rather, some ways of using them) are fostering a new rise of this phenomenon. Conspiracy theories spread online can lead to dangerous real world actions: some people involved in the the US Capitol attack on Jan. 6 2021 were reportedly QAnon supporters, and the FBI had already labelled QAnon as “new domestic threat” with an official declaration. Nevertheless, some certified influencers on Instagram exploit their popularity to convey conspiracy theories’ messages to their followers, despite the attempts of censorship by the platform itself. The fact that some profiles, that reach a vast public and could be seen as reliable, keep sharing this type of content, represents a risk of further spread of misinformation and theories and mistrust of official sources.","imgname1":"FBI","img1":"images/whatsbehind/message1.png","imgname2":"Capitol.jpg","img2":"images/whatsbehind/message2.png"},
{"titolo":"Goals and Audience","descrizione":"The aim of this project is to inform the people about how simple it is to come across this type of content and to give credit to false or misleading information. We wanted to highlight this fact by showing our research process, which is obviously one of the infinite ways in which a user could encounter conspiracy theories’ messages on social media,in order to raise awareness about this phenomenon. Our audience consists in active social media users, people who use these platforms to keep up with the news and people who aren’t familiar with the topic of conspiracy theories and could potentially share and interact with this type of content. ","imgname1":"Social media misinformation","img1":"images/whatsbehind/ganda.png","link":"https://www.brookings.edu/blog/order-from-chaos/2018/05/09/how-misinformation-spreads-on-social-media-and-what-to-do-about-it/"},
{"titolo":"Methods","descrizione":"Starting from a profile mentioned in an article from The Atlantic,we proceeded through snowballing in order to find other accounts.",
"descrizione2":"In particular, we looked for suggested profiles, profile’s follower, repost, highlights, comments on the posts and tags.","img1":"images/whatsbehind/methods1.png","descrizione3":"A very important process for our research was fact-checking.","descrizione4":"We compared the content that we found with resources and articles from a wide range of sources, in order to understand the reliability of the information spread and to identify misleading content.","img1":"images/whatsbehind/methods1.png","img2":"images/whatsbehind/methods2.png","img3":"images/whatsbehind/methods3.png","img4":"images/whatsbehind/methods4.png","img5":"images/whatsbehind/methods5.png","img6":"images/whatsbehind/methods6.png","img7":"images/whatsbehind/methods7.png","img8":"images/whatsbehind/methods8.png"},
{"titolo":"Episodes","descrizione":"The Hunt’s visual language is inspired by the desktop documentary aesthetic: the goal was to recreate the environment of a computer, in order to engage the viewer and to display our research process step by step as it was recorded.The interface assets as well as the interactions are reinterpreted to convey personality and uniqueness to the project, even though the digital context (for example Instagram’s UI) is essential to the concept.","descrizione2":"The documentary is set in the environment of a desktop computer and based on the macOS interface, in order to convey a familiar and popular context but also to present the research steps.For example, the overlapping windows are important visual assets, for example to show the articles from external sources that we analysed in order to check the reliability of news and content.","descrizione3":"Instagram UI is essential as well, since the research is based on verified Instagram profiles, therefore we kept the visual language as clean and accurate as possible (a part from hiding personal pictures and name for privacy), and we tried to replicate the interaction to show the process.","descrizione4":"At the end of each episode the user is invited to take action, a simple interaction takes to the next episode. The last episode (Episode 7) illustrates the motivations that brought us to carry on this project, with a focus on the importance of being conscious about this topic. Moreover, it’s a conclusion of the research process and a summary of the project goals","img1":"images/whatsbehind/episodes1.png","img2":"images/whatsbehind/episodes2.png","img3":"images/whatsbehind/episodes3.png","img4":"images/whatsbehind/episodes4.png","img5":"images/whatsbehind/episodes5.png","img6":"images/whatsbehind/episodes6.png","img7":"images/whatsbehind/episodes7.png","img8":"images/whatsbehind/episodes8.jpeg"},
{"titolo":"Policy","descrizione":"The episodes contain sensitive data of the Instagram profiles that we encountered during our research.In order to protect the privacy of the parties involved we have covered the faces of the profiles with a blur / pixels and we have replaced their names with fictitious words","imgname1":"file1","img1":"images/whatsbehind/policy00.jpeg","imgname2":"file2","img2":"images/whatsbehind/policy01.jpg"},
{"titolo":"Credits",}

]


function iniziale (seziones){
    $('#wb-txt').text(seziones.descrizione) ;
        $('.wb-documentation').append("<div><div class='wb-preview'><img  class='50special' src="+seziones.img1+"></div>  <div class='fileName'><p>"+seziones.imgname1+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='wb-preview'><img class='50special' src="+seziones.img2+"></div>  <div class='fileName'><p>"+seziones.imgname2+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='wb-preview'><img  class='50special' src="+seziones.img3+"></div>  <div class='fileName'><p >"+seziones.imgname3+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='wb-preview'><img class='50special' src="+seziones.img4+"></div>  <div class='fileName'><p>"+seziones.imgname4+"</p></div></div>")
        $('.wb-documentation').append("<div><div class='wb-preview'><img class='50special' src= "+seziones.img5+"></div>  <div class='fileName'><p>"+seziones.imgname5+"</p></div></div>")
    lucrezia();
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
  else if (sezione.titolo=== "Message"){
        $('#wb-txt').text(sezione.descrizione) ;
        $('.wb-documentation').append("<div  class='wb-file'><div class='wb-preview'><a href ='https://news.yahoo.com/fbi-documents-conspiracy-theories-terrorism-160000507.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAA94asLc4zwp3rrgpiSZmPEnU4PUc2zUAdeMGjksjlP-I5D_XpyBogh2FeFUs3XxAQCSuavNlEAOZ8kcnyEX7kC1Aa5r6PnIEL4KsAkYq_5DQnOh-TAvJPKLTTvRmDT9ti5qlrJvSzT_zY_CmzWNN2gdD8DKFWGvbNDxqPuAMeho' target='_blank'><img src="+sezione.img1+"></a></div>  <div class='fileName'><p>"+sezione.imgname1+"</p></div></div>")
        $('.wb-documentation').append("<div  class='wb-file'><div class='wb-preview'><img class='50special' src="+sezione.img2+"></div><div class='fileName'><p>"+sezione.imgname2+"</p></div></div>")
      lucrezia();

  }

   else if (sezione.titolo === "Goals and Audience"){
       $('#wb-txt').text(sezione.descrizione) ;
        $('.wb-documentation').append("<div class='wb-file'><div class='wb-preview'><a href ='https://www.brookings.edu/blog/order-from-chaos/2018/05/09/how-misinformation-spreads-on-social-media-and-what-to-do-about-it/' target='_blank'><img src ="+sezione.img1+"></a></div>  <div class='fileName'><p>"+sezione.imgname1+"</p></div></div>")

   }
   else if (sezione.titolo === "Methods"){
        console.log(sezione)
     $('#wb-txt').text(sezione.descrizione)

     $('.wb-description').append("<div class='wb-carousel'><div ><img  src="+sezione.img1+"></div><div><img src="+sezione.img2+"></div><div><img src="+sezione.img3+"> </div> <div><img  src="+sezione.img4+"></div><div><img src="+sezione.img5+"></div><div><img src="+sezione.img6+"></div></div>");
     $('.wb-description').append("<p id='description2'></>")
     $("#description2").text(sezione.descrizione2)
       $("#description3").text(sezione.descrizione3)
        $('.wb-description').append("<div class='wb-carousel'><div ><img  src="+sezione.img7+"></div><div><img src="+sezione.img8+"></div>");
     $('.wb-description').append("<p id='description3'></>")
     $("#description3").text(sezione.descrizione4)



    }

    else if (sezione.titolo === "Episodes"){
    $('#wb-txt').text(sezione.descrizione);
    $('.wb-description').append("<div class='wb-carousel'><div><img  src="+sezione.img1+">");
    $('.wb-description').append("<p>"+sezione.descrizione+"</p>")
        $('.wb-description').append("<div class='wb-carousel'><div><img  src="+sezione.img2+"></div><div><img  src="+sezione.img3+"></div><div><img  src="+sezione.img4+"></div></div>");
    $('.wb-description').append("<p>"+sezione.descrizione+"</p>")
              $('.wb-description').append("<div class='wb-carousel'><div><img  src="+sezione.img5+"></div><div><img  src="+sezione.img6+"></div><div><img  src="+sezione.img7+"></div></div>");
        $('.wb-description').append("<p>"+sezione.descrizione+"</p>");
        $('.wb-description').append("<div class='wb-carousel'><div><img  src="+sezione.img8+">");

   }
    else if (sezione.titolo === "Policy"){
     $('#wb-txt').text(sezione.descrizione)
     $('.wb-description').append("<div class='wb-carousel'><div><img  src="+sezione.img1+"></div><div><img src="+sezione.img2+"></div>")
   }


    else if (sezione.titolo === "Credits") { //Credits
        console.log("bestiadidio")
      $('.wb-description').append("<div id='wb-creditsContainer'></div>")
      $('#wb-creditsContainer').append("<div id='credit1' class='wb-creditsRow'></div>")
      $('#credit1').append("<div class='avatar'> <a href='https://elisafinesso.com' target='_blank'><img src='images/bellissimi/finish.jpg'></a><h5>Elsa Finnegan</h5><p>finesso.elisa@gmail.com</p><p>IG: ccamalow</p></div>")
      $('#credit1').append("<div class='avatar'><a><img src='images/bellissimi/gib.jpg'></a><h5>Ilenia Gibiloba</h5><p>elena.gibelli1@gmail.com</p><p>IG: rgb.elli</p></div>")
      $('#credit1').append("<div class='avatar'><a href='http://federicalaurencio.bss.design/' target='_blank'><img src='images/bellissimi/lau.jpeg'></a><h5>Laura Laureida</h5><p>è suscettibile, non scrivetele</p><p>fidatevi non fatelo</p></div>")
         $('#wb-creditsContainer').append("<div id='credit2' class='wb-creditsRow'></div>")
      $('#credit2').append("<div class='avatar'><a href=' andreamorandini.com' target='_blank'><img src='images/bellissimi/mauro.jpeg'></a> <h5>Marek <br> Morandinski</h5><p>andremora97@gmail.com</p><p>IG: andreamario.m</p></div>")
      $('#credit2').append("<div class='avatar'><a href='https://jacoposironi.com' target='_blank'><img src='images/bellissimi/jac.jpeg'></a> <h5>Sir Johnatan</h5> <p>sironij@gmail.com</p><p>IG: jacopo_sir</p></div></div>")

        $('#credit2').append("<div class='avatar'><a><img src='images/bellissimi/mrc.jpeg'> </a><h5>Mirko Valley</h5><p>è troppo impegnato per rispondervi</p><p>probabilmente si sta suicidando</p></div>")
     }


     else{
       console.log("C'est la viz");
     }
   } );

function lucrezia(){
$(".50special").click(function() {
    console.log('bailamorena')
  $("#fileModal").fadeIn()
    $("#modalin").attr("src",$(this).attr("src"))

});

$(".close img").click(function() {
  $("#fileModal").fadeOut()
});

$("#fileModal").draggable();
    }
