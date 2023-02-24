console.log("Hello, World!");

$(".headerItems").hover(function(){
    $(this).css("font-weight", "700");
},
  function(){
    $(this).css("font-weight", "400");
});

$(".workCard").hover(function(){
    $(this).css("border", "5px solid black");
},
  function(){
    $(this).css("border", "5px solid white");
});