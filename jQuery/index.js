$("h1").addClass("head-text");

$("h1").css("color","red");

$("button");

$("a").attr( "href", "https://in.search.yahoo.com/?fr2=inr");

$("button").click(function(){
    $("h1").css("color", "purple");
});


$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");

$("button").remove();

$("button").on("click", function(){
    $("h1").toggle();
});

$("button").on("click", function(){
    $("h1").fadeOut();
});

$("button").on("click", function(){
    $("h1").fadeToggle();
});

$("button").on("click", function(){
    $("h1").slideUp();
});

$("button").on("click", function(){
    $("h1").slideToggle();
});

$("button").on("click", function(){
    $("h1").animate({opacity:0.5})
});

$("button").on("click", function(){
    $("h1").animate({margin: 30})
});

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({margin: 30});
});