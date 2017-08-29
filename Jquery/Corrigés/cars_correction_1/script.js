var $marksInput = $('input.mark');
var $colorsInput = $('input.color');

var $smart = $("input[value='smart']");
var $input = $('input');

var $cars = $('.car');

$input.change(function(){

    $cars.hide();
    cars();

});

function cars(){

    if( $('input.color:checked').length == 0 ){
        $cars.filter(mark()).show();
    }
    else if( $('input.mark:checked').length == 0 ) {
        $cars.filter(color()).show();
    }
    else {
       $cars.filter(mark()).filter(color()).show();
    }

}

function mark(){

    var filter = "";

    $marksInput.each(function(){

        if( $(this).is(':checked') ){
            var mark = $(this).val();
            filter += "[data-mark='"+mark+"'],";
        }

    });

    filter = filter.slice(0, -1);

    return filter;


    /*

    var $marks = {
        porsche : $("input[value='porsche']"),
        smart : $("input[value='smart']"),
        mazda : $("input[value='mazda']"),
        peugeot : $("input[value='peugeot']"),
        renault : $("input[value='renault']")
    };

    var filter = "";

    if($marks.porsche.is(':checked')){
        filter += "[data-mark='porsche'],";
    }
    if($marks.smart.is(':checked')){
        filter += "[data-mark='smart'],";
    }
    if($marks.mazda.is(':checked')){
        filter += "[data-mark='mazda'],";
    }
    if($marks.peugeot.is(':checked')){
        filter += "[data-mark='peugeot'],";
    }
    if($marks.renault.is(':checked')){
        filter += "[data-mark='renault'],";
    }

    filter = filter.slice(0, -1);

    return filter;
    */

}

function color(){

     var filter = "";

    $colorsInput.each(function(){

        if( $(this).is(':checked') ){
            var color = $(this).val();
            filter += "[data-color='"+color+"'],";
        }

    });

    filter = filter.slice(0, -1);

    return filter;

    /*
    var $colors = {
        red : $("input[value='rouge']"),
        blue : $("input[value='bleu']"),
        black : $("input[value='noir']"),
        white : $("input[value='blanc']"),
        grey : $("input[value='gris']"),
        orange : $("input[value='orange']")
    };

    var filter = "";

    if( $colors.red.is(':checked') ) {
        filter += "[data-color='rouge'],";
    }
    if( $colors.blue.is(':checked') ) {
        filter += "[data-color='bleu'],";
    }
    if( $colors.black.is(':checked') ) {
        filter += "[data-color='noir'],";
    }
     if( $colors.white.is(':checked') ) {
        filter += "[data-color='blanc'],";
    }
     if( $colors.grey.is(':checked') ) {
        filter += "[data-color='gris'],";
    }
    if( $colors.orange.is(':checked') ) {
        filter += "[data-color='orange'],";
    }

    filter = filter.slice(0, -1);

    return filter;
    */

}