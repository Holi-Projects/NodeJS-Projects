
let d = document.querySelector("#demo");
d.innerHTML = "hello";

$("p#demo").val("hell0");
//alert($("#demo").val());

$("#demo").html("working sweet");
$("#demo").text("Test is working").css("color", "red");

$("#demo").click( function (){
    alert("working");
})

$("#demo").append("<p>this is good</p>");

$("body").append("<p id='p1'> second paragraph </p>");

$("#p1").hover( function(){
    $(this).css("color", "blue");
    //alert("mouse is over me");
}, 
function(){
    $(this).css("color", "green");
    //alert("mouse clear");
})



    $("button").click(function(){
        $("button").toggle(3000);
      $("div#load").animate(
        $("#load").text("Loading..."),
        $("#load").css("color", "grey"), 1500,
       );
    });
  


$("#anime > #link").click( function(e){
    e.preventDefault();
    $("#anime > #p2").css("color", "brown");
    // $("#p2").fadeIn(3000);
    // $("#p2").animate({backgroundColor:"olive"}, "slow");
    // $("#p2").animate({backgroundColor:"yellow"}, "slow");
});


$("#sel").change(function (e) { 
    e.preventDefault();
    let val = $("#sel").val();
    $("#p3").html("<b style='color:black'>Selected: </b>" + val);
    
    
});

$("nav > ul > li").hover(function () {
    // $("nav #home").html("<li id='p4'>We are under home</li>"); 
    // $("#home #p4").toggle();
    // $("#home #p4").slideToggle(3000);
       $(this).children("ul").hide().slideDown();
      
}, function (){
    $(this).children('ul').fadeOut();
}
);



var modal = document.querySelector(".modal");
var trigger = document.querySelector("#cart");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    alert("here")
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);