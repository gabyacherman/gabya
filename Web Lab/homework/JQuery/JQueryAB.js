$(document).ready(function(){

$(".fancyTitle").lettering();

$(".fancyParagraph").lettering("words");




  $(".paragraph").show();
  $(".step").hide();
  $(".Step1").hide();
  $(".Step2").hide();
  $(".Step3").hide();
  $(".Step4").hide();
  $(".Step5").hide();
  $(".Step6").hide();
  $(".Step7").hide();
  $(".Step8").hide();
  $(".Step9").hide();


  $("#step1").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").show();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $(".Step7").hide();
    $(".Step8").hide();
    $(".Step9").hide();
    $("#step1").addClass("active");
      $("#step2").removeClass("active");
      $("#step3").removeClass("active");
      $("#step4").removeClass("active");
      $("#step5").removeClass("active");
      $("#step6").removeClass("active");
      $("#step7").removeClass("active");
      $("#step8").removeClass("active");
      $("#step9").removeClass("active");


  });

  $("#step2").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").show();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $(".Step7").hide();
    $(".Step8").hide();
    $(".Step9").hide();
    $("#step1").removeClass("active");
      $("#step2").addClass("active");
      $("#step3").removeClass("active");
      $("#step4").removeClass("active");
      $("#step5").removeClass("active");
      $("#step6").removeClass("active");
      $("#step7").removeClass("active");
      $("#step8").removeClass("active");
      $("#step9").removeClass("active");
  });

  $("#step3").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").show();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $(".Step7").hide();
    $(".Step8").hide();
    $(".Step9").hide();
    $("#step1").removeClass("active");
      $("#step2").removeClass("active");
      $("#step3").addClass("active");
      $("#step4").removeClass("active");
      $("#step5").removeClass("active");
      $("#step6").removeClass("active");
      $("#step7").removeClass("active");
      $("#step8").removeClass("active");
      $("#step9").removeClass("active");
  });

  $("#step4").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").show();
    $(".Step5").hide();
    $(".Step6").hide();
    $(".Step7").hide();
    $(".Step8").hide();
    $(".Step9").hide();
    $("#step1").removeClass("active");
      $("#step2").removeClass("active");
      $("#step3").removeClass("active");
      $("#step4").addClass("active");
      $("#step5").removeClass("active");
      $("#step6").removeClass("active");
      $("#step7").removeClass("active");
      $("#step8").removeClass("active");
      $("#step9").removeClass("active");
  });

  $("#step5").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").show();
    $(".Step6").hide();
    $(".Step7").hide();
    $(".Step8").hide();
    $(".Step9").hide();
    $("#step1").removeClass("active");
      $("#step2").removeClass("active");
      $("#step3").removeClass("active");
      $("#step4").removeClass("active");
      $("#step5").addClass("active");
      $("#step6").removeClass("active");
      $("#step7").removeClass("active");
      $("#step8").removeClass("active");
      $("#step9").removeClass("active");
  });

  $("#step6").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").show();
    $(".Step7").hide();
    $(".Step8").hide();
    $(".Step9").hide();
    $("#step1").removeClass("active");
      $("#step2").removeClass("active");
      $("#step3").removeClass("active");
      $("#step4").removeClass("active");
      $("#step5").removeClass("active");
      $("#step6").addClass("active");
      $("#step7").removeClass("active");
      $("#step8").removeClass("active");
      $("#step9").removeClass("active");
  });

  $("#step7").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $(".Step7").show();
    $(".Step8").hide();
    $(".Step9").hide();
    $("#step1").removeClass("active");
      $("#step2").removeClass("active");
      $("#step3").removeClass("active");
      $("#step4").removeClass("active");
      $("#step5").removeClass("active");
      $("#step6").removeClass("active");
      $("#step7").addClass("active");
      $("#step8").removeClass("active");
      $("#step9").removeClass("active");
  });

  $("#step8").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $(".Step7").hide();
    $(".Step8").show();
    $(".Step9").hide();
    $("#step1").removeClass("active");
      $("#step2").removeClass("active");
      $("#step3").removeClass("active");
      $("#step4").removeClass("active");
      $("#step5").removeClass("active");
      $("#step6").removeClass("active");
      $("#step7").removeClass("active");
      $("#step8").addClass("active");
      $("#step9").removeClass("active");
  });

  $("#step9").click(function(){
    $(".paragraph").hide();
    $(".step").show();
    $(".Step1").hide();
    $(".Step2").hide();
    $(".Step3").hide();
    $(".Step4").hide();
    $(".Step5").hide();
    $(".Step6").hide();
    $(".Step7").hide();
    $(".Step8").hide();
    $(".Step9").show();
    $("#step1").removeClass("active");
      $("#step2").removeClass("active");
      $("#step3").removeClass("active");
      $("#step4").removeClass("active");
      $("#step5").removeClass("active");
      $("#step6").removeClass("active");
      $("#step7").removeClass("active");
      $("#step8").removeClass("active");
      $("#step9").addClass("active");
  });

  $("h1").click(function() {
    $("h1").html("Good Right?");
  });

  $("p").click(function() {
    $(".container div:first-child p").css("color", "black");
  });

  });
