! function() {
    /*  $(".nav").on("mouseover", () => {
         $(".index_type").show();
     }) */
    $('.nav').hover(function() {
        $(".index_type").show();

    }, function() {
        $(".index_type").hide();

    })
}()