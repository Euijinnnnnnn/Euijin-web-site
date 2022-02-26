$(document).ready(function(){

    $(".program .sa").hover(function(){
        $(".program .sa").attr("class","show");  $(".program .base").stop().fadeOut(300);
    }, function(){
        $(".program .show").attr("class","sa"); $(".program .base").stop().fadeIn(300);
    });
}); 


$(document).ready(function(){
    $(".book .sa").hover(function(){
        $(".book .sa").attr("class","show"); $(".book .base").stop().fadeOut(300);
    }, function(){
        $(".book .show").attr("class","sa"); $(".book .base").stop().fadeIn(300);
    });
}); 


$(document).ready(function(){
    $(".resource .sa").hover(function(){
        $(".resource .sa").attr("class","show");  $(".resource .base").stop().fadeOut(300);
    }, function(){
        $(".resource .show").attr("class","sa"); $(".resource .base").stop().fadeIn(300);
    }); 
}); 
