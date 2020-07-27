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

    $('#port1').mouseover(function(){
        $('Hov1').show()
    }).mouseout(function(){
        $('#Hov1').hide()
    })

});