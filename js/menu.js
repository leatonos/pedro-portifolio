$(document).ready(function(){

    let menu = true;

    //Event listener
    $("#mobile_btn_skill, li > a").click(function(){
      menuToggle();
      console.log("you clicked me")
    });

    //Mobile menu function
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

    //Responsive ajustment
    $( window ).resize(function() {
        let screenWidth = screen.width;
        if(screenWidth > 992 ){
            $(".menu").fadeIn(1000);
        }
      });
  
  });