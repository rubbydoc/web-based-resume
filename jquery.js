

    $(document).ready(function() {
        console.log( "ready!" );
        alert($(window).width());


        
    $(window).resize(function(){

        if($(window).width() <= 767){
          $('#sidebar').remove();
        }
      });
    });
