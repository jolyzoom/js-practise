function register() {
  var valuser = document.getElementById("user").value;
  var valpass = document.getElementById("pass").value;
  if (valuser == 0 || valpass == 0) {
    alert("No text entered");
    return false;
  }
  else {
    alert("You successfully registered");
    return true;
  }
}

$(document).ready(function() {
  $("#show").click(function() {
    if ($("#pass").attr("type") == "text") {
      $("#pass").attr("type", "password");
      $("#register").prop("disabled", true);
    } else {
      $("#pass").attr("type", "text");
      $("#register").prop("disabled", false);
    }
  });
});

$(document).ready(function(){
    $("#background").click(function(){
        $("body").css("background", "yellow");
    });    
});

var max = 15;
$("textarea").keyup(function() {
  var len = max - $(this).val().length;
  $("#span").text(len);
});

$("#fade").click(function(){
  $("p").fadeTo('slow', 0.5);
  $("p").fadeTo('slow', 0.5);
});

$( "#btn1" ).click(function() {
  $( "#box" ).animate({
   width: "3000px",
   height: "3000px", 
    }, 1500 );
});

$( "#btn2" ).click(function() {
  $( "#box" ).animate({
   width: "100px",
   height: "100px",    
    }, 1500 );
});
function scrollToTop() {
            $(window).scrollTop(0);
        }
