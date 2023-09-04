// let DesertRoadBridgesLayer ="DesertRoadBridgesLayer";
// let alasherLayer ="alasherLayer";

// function projectPhotoSlider (e)
// {
//     switch (e.target.getAttribute("src")) {
//         case "./img/projects/Desert Road Bridges//download (1).jpg":
//             open(DesertRoadBridgesLayer);
//             document.addEventListener("click",function(e){
//                 if((e.target.getAttribute("src") == null) && (clickOutOfPhoto(e)))
//                 {
//                     close(DesertRoadBridgesLayer);
//                 }
//             })
//             break;
//         case "./img/projects/alasher/download.jpg":
//             open(alasherLayer);
//             document.addEventListener("click",function(e){
//                 if((e.target.getAttribute("src") == null) && (clickOutOfPhoto(e)))
//                 {
//                         close(alasherLayer);
//                 }
//             })
//             break;    
    
//         default:
//             break;
//     }
// }

// document.addEventListener("click",function(e){
//     projectPhotoSlider(e)
// })

// function open(id)
// {
//     document.getElementById(id).classList.replace("d-none","d-block")
//     document.getElementById("projects").classList.replace("overflow-auto","overflow-hidden");
    
// };
// function close(id)
// {
//     document.getElementById(id).classList.replace("d-block","d-none")
//     document.getElementById("projects").classList.replace("overflow-hidden" ,"overflow-auto");
// };

// function clickOutOfPhoto (e)
// {
//   if((e.target.classList.contains("carousel-control-prev-icon")) | (e.target.classList.contains("carousel-control-prev")) |(e.target.classList.contains("carousel-control-next")) |(e.target.classList.contains("carousel-control-next-icon")))
//   {
//       return false
//   }else
//   {
//     return true
//   }
// }

// document.querySelector("#HDPE").addEventListener("click",function(){
//     document.querySelector("#HDPELayer").classList.replace("d-none","d-block")
//     document.querySelector(":not(#HDPELayer)").classList.add("overflow-hidden");
// })
// document.querySelector("#pvc").addEventListener("click",function(){
//     document.querySelector("#PVCLayer").classList.replace("d-none","d-block")
//     document.querySelector(":not(#PVCLayer)").classList.add("overflow-hidden");
// })
// function openLayer(materialName , layerId)
// {
//     document.querySelector(materialName).addEventListener("click",function(){
//         document.querySelector(layerId).classList.replace("d-none","d-block")
//         document.querySelector(":not(#HDPELayer)").classList.add("overflow-hidden");
//     })
// }
// function closeLayer(layerId)
// {
//     document.querySelector(".productsLayer").classList.replace("d-block","d-none");
//     document.querySelector(":not(#HDPELayer)").classList.remove("overflow-hidden");
// }
// document.querySelector(".closBtn").addEventListener("click",function(){
//     closeLayer(".productsLayer")
// })
$(document).ready(function(){
   $("#spinner").fadeOut(500 , function(){
      $("#spinner").remove();
   })
   $("body").css("overflow","auto");

   $("#shading").click(function(){
      window.open("Q-Shading.html",'_self');
   });
   $("#steel").click(function(){
      window.open("../AL-Quds-Steel.html",'_self');
   })

   $(".closBtn").click(function(){
      $(".productsLayer").hide(500);
      document.querySelector(":not(#HDPELayer)").classList.remove("overflow-hidden");
  });
  $("#products #HDPE").click(function(){
     $("#HDPELayer").show(500);
     document.querySelector(":not(#HDPELayer)").classList.add("overflow-hidden");
  });
  $("#products #pvc").click(function(){
      $("#PVCLayer").show(500);
      document.querySelector(":not(#PVCLayer)").classList.add("overflow-hidden");
   });
   $("#products #Pergola").click(function(){
      $("#PergolaLayer").show(500);
      document.querySelector(":not(#PergolaLayer)").classList.add("overflow-hidden");
   });
   $("#products #Tents").click(function(){
      $("#TentslaLayer").show(500);
      document.querySelector(":not(#TentslaLayer)").classList.add("overflow-hidden");
   });
   
  $(window).scroll(function(){
     let sectionOffset = $("#aboutUs").offset().top;
     if($(window).scrollTop() > sectionOffset)
     {
        $(".navbar").css("backgroundColor","rgba(0,0,0,1)");
     }else{
        $(".navbar").css("backgroundColor","rgba(0,0,0,0.5)");
     }
  });
  
  $("a[href^='#']").click(function(e){
     let sectionTargetName =e.target.getAttribute('href');
     let sectionTop = $(sectionTargetName).offset().top;
     $("body , html").animate({scrollTop:sectionTop} , 1000);
  })
})


























