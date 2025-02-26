$(document).ready(function() {
    aux = 0;

    $("#openmenu").click(function(){
        switch(aux){
            case 0:
                $("#menu").css("display", "flex");
                $("#openmenu").attr("src", "./assets/images/icon-close.svg");
                $("#body").css("overflow-y", "hidden")
                aux = 1;
                break
            case 1:
                $("#menu").css("display", "none");
                $("#openmenu").attr("src", "./assets/images/icon-hamburger.svg");
                $("#body").css("overflow-y", "scroll")
                aux = 0;
                break
        }
    })

    $(document).on('scroll', function() {
        if ($(this).scrollLeft() !== 0) {
          $(this).scrollLeft(0);
        }
    });

});