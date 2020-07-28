$(document).ready(function(){

    $("#design").click(function(){
        $("#showDesign").toggle();
        $("#design").toggle()
    });

    $("#showDesign").click(function(){
        $("#design").toggle();
        $("#showDesign").toggle()
    });

    $("#development").click(function(){
        $("#showDevelopment").toggle();
        $("#development").toggle()
    });

    $("#showDevelopment").click(function(){
        $("#development").toggle();
        $("#showDevelopment").toggle()
    });

    $("#product").click(function(){
        $("#showProduct").toggle();
        $("#product").toggle()
    });

    $("#showProduct").click(function(){
        $("#product").toggle();
        $("#showProduct").toggle()
    });

    $("#mc-embedded-subscribe").click(function(){
        var name = $("#mce-FNAME").val();
        alert("Thank you "+ name +" for reaching out to us. Your message will be tken in kind")
    })

    $("#port1").hover(function(){
        $('#Hov1').fadeToggle(1500, "linear")
    })

    $("#port2").hover(function(){
        $('#Hov2').fadeToggle(1500, "linear")
    })

    $("#port3").hover(function(){
        $('#Hov3').fadeToggle(1500, "linear")
    })

    $("#port4").hover(function(){
        $('#Hov4').fadeToggle(1500, "linear")
    })

    $("#port5").hover(function(){
        $('#Hov5').fadeToggle(1500, "linear")
    })

    $("#port6").hover(function(){
        $('#Hov6').fadeToggle(1500, "linear")
    })

    $("#port7").hover(function(){
        $('#Hov7').fadeToggle(1500, "linear")
    })

    $("#port8").hover(function(){
        $("#Hov8").fadeToggle(1500, "linear")
    })

});