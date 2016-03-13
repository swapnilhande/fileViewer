$(document).ready(function() {
    $("#emaf .well .btn").click(function() {
        $(this).toggleClass("active");
        emaf_formatText();
    });
    $("#emaf_selectDeleteAll .btn-danger").click(function() {
        $("#emaf .well .btn").each( function() {
            var button = $(this);
            if(button.hasClass("active")) {
                button.removeClass("active");
            }
        });
         emaf_formatText();
    });
    $("#emaf_selectDeleteAll .btn-success").click(function() {
        $("#emaf .well .btn").each( function() {
         var button = $(this);
            if(!button.hasClass("active")) {
                button.addClass("active");
            }
        });
         emaf_formatText();
    });

    $("#bai .well .btn").click(function() {
            $(this).toggleClass("active");
            bai_formatText();
     });

    $("#bai_selectDeleteAll .btn-danger").click(function() {
            $("#bai .well .btn").each( function() {
                var button = $(this);
                if(button.hasClass("active")) {
                    button.removeClass("active");
                }
            });
             bai_formatText();
        });
    $("#bai_selectDeleteAll .btn-success").click(function() {
        $("#bai .well .btn").each( function() {
         var button = $(this);
            if(!button.hasClass("active")) {
                button.addClass("active");
            }
        });
         bai_formatText();
    });
});
