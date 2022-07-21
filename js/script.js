$(document).ready(function(){

    let menu = true;

    $("#mobile_btn, li > a").click(function(){
      menuToggle();
    });

    function menuToggle(){
        let screenWidth = screen.width;
        if(screenWidth < 992 ){
            $(".menu").slideToggle("slow");
            if(menu){
                $("#mobile_btn").attr("src", "img/close_white.png")
                menu = false;
            }else{
                $("#mobile_btn").attr("src", "img/menu_mobile_white.png")
                menu = true;
            }
        }
    }

    
    $( window ).resize(function() {
        let screenWidth = screen.width;
        if(screenWidth > 992 ){
            $(".menu").fadeIn(1000);
        }
      });
      
  });