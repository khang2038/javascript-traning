$(document).ready(
    function() {
        $('.about-section').waypoint(
            function(direction){
                if(direction == 'down'){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset : "600px"
            }
        )

        $('a').click(function(){
          $('html, body').animate({
             scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 1000);
           return false;
       }
       );
    }
)
