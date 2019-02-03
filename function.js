let $text = $(".text");



$text.on("click", function(){
    $($text).addClass("clicked"); 
    $text.html(""); 
    setInterval(function(){
    $($text).html("1")
    }, 500)
   
})


