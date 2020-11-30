$(document).ready(function(){
    $(".burger-nav").on("click", function(){
        $(".mobile-menu").toggleClass("open");
        if($("#menu-button").attr("src")==="img/menu-collapsed.png") {
            $("#menu-button").attr("src", "img/menu-open.png");
        }
        else {
            $("#menu-button").attr("src", "img/menu-collapsed.png");
        }
    })
})