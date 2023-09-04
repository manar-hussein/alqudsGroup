$(function(){
    $("#spinner").fadeOut(500 , function(){
        $("#spinner").remove();
     })
     $("body").css("overflow","auto");

     $(window).scroll(function(){
        let aboutUsShadingTop = $("#aboutQ-Shading").offset().top;
        if($(window).scrollTop()>(aboutUsShadingTop -50))
        {
            $(".navbar").css("backgroundColor","rgba(0,0,0,1)");
        }else
        {
            $(".navbar").css("backgroundColor","rgba(0,0,0,0)");
        }
        
    })
    $("a[href^='#']").click(function(e){
        let sectionTargetName =e.target.getAttribute('href');
        let sectionTop = $(sectionTargetName).offset().top;
        $("body").animate({scrollTop:sectionTop} , 5000);
     })
     $("#HDPEmaterial").click(function(){
        $("#HDPELayer").show(500);
        document.querySelector(":not(#HDPELayer)").classList.add("overflow-hidden");
     });
    $("#PVCmaterial").click(function(){
        $("#PVCLayer").show(500);
        document.querySelector(":not(#PVCLayer)").classList.add("overflow-hidden");
    });
    $("#steelMaterial").click(function(){
        $("#steelLayer").show(500);
        document.querySelector(":not(#steelLayer)").classList.add("overflow-hidden");
    });
    $("a[href^='#']").click(function(e){
        let sectionTargetName =e.target.getAttribute('href');
        let sectionTop = $(sectionTargetName).offset().top;
        $("body , html").animate({scrollTop:sectionTop} , 1000);
     })




})
