//var $container = document.getElementById('container');
//var $container = document.querySelector('#container');
var $container = $("#container"); //Par Id
var $li = $("li"); //Par tag
var $special = $(".special"); //Par classe
var $special_li = $("li.special"); 

//Styles
$container.css("background-color", "red");
$li.css('color', 'green');
$special.css('color', 'blue');

$li.click(function(){
    //$(this) réference l'élément sur lequel on a cliqué !
    $(this).css('color', 'red');
});


/* Color picker */
var $inputs = $("input[type='range']");
var color = {
    red: 0,
    green: 0,
    blue: 0
};
$inputs.change(function(){
    
    if( $(this).hasClass('red') ){ //Regarde si l'élément a la classe spécifiée
        color.red = $(this).val(); //.value == .val()
    }
    else if ( $(this).hasClass('green') ){
        color.green = $(this).val();
    }
    else if( $(this).hasClass('blue') ){
        color.blue = $(this).val();
    }

    var rgb = "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
    $container.css('background-color', rgb);

});

/***** Carrousel *****/

/*
var $carrousel = $("#carrousel");
$carrousel.click(function(){

})
*/

var isAnimated = false;
$(".carrousel").click(function(){

    if(isAnimated == true){
        return;
    }

    isAnimated = true;

    //Récupere l'enfant de carrousel avec la ( classe .active || filtre :visible )
    var $active = $(this).children('div:visible');
    //$active.hide(500);
    $active.fadeOut(500);

    var $next = $active.next();//Renvoi le prochain élément de même niveau
    if($next.length == 0){ //Vérifie que le prochain élément existe
        $next = $(this).children('div').first(); //Récupere le premier enfant div
    }

    //$active.show(500)
    /*
        On peut donner un second argument qui est
        une fonction et qui va s'executer à la fin de l'animation, donc
        du temps que l'on a spécifié 
    */
    $next.fadeIn(500, function(){ 
        isAnimated = false;
    });

    //$active.removeClass("active");
    //$next.addClass("active");

});

/**  *** Carrousel Fleche *** */

var $carrousel = $('#carrouselarrow');
var isAnimated_arrow = false;

$('.arrow').click(function(){

    if(isAnimated_arrow == true){
        return;
    }

    isAnimated_arrow = true;

    var $slideToDisplay = null;
    var $active = $carrousel.children("div:visible");

    $active.fadeOut(500);

    if( $(this).hasClass('left') ) {

        $slideToDisplay = $active.prev("div");
        if($slideToDisplay.length == 0){
            $slideToDisplay = $carrousel.children("div").last();
        }

    }
    else if( $(this).hasClass('right') ) {

        $slideToDisplay = $active.next("div");
        if($slideToDisplay.length == 0){
            $slideToDisplay = $carrousel.children("div").first();
        }

    }

    $slideToDisplay.fadeIn(500, function(){
        isAnimated_arrow = false;
    });

});

//
var html = $("#element").html(); //renvoi le html de l'élément
$("#element").html("<p> Du contenu </p>");//Remplace tout le html

$("#element").append("<p> Du contenu </p>");//Ajoute a la fin
$("#element").prepend("<p> Du contenu </p>");//Ajoute au début

var $elementAdeplacer = $('#elementAdeplacer');
$("#element").append($elementAdeplacer);//Déplace a la fin
$("#element").prepend($elementAdeplacer);//Déplace au début


/*** SHI FU MI  ***/

var $shifumi = $("#commande div");
var $me = $('#me');
var $computer = $('#computer');
var $aff = $("#aff_result");

$shifumi.click(function(){

    var computer = Math.floor(Math.random() * 3);

    var afficheMe = $(this).html(); //Recupere mon image au format html
    var afficheComp = "";

    if( computer ==  0){
        afficheComp = $("#shi").html();
    }
    else if( computer == 1 ){
        afficheComp = $("#fu").html();
    }
    else {
        afficheComp = $("#mi").html();
    }

    var id = $(this).attr("id");
    var resultat = "";

    if(id == "shi"){
        resultat = game(0, computer);
    }
    else if(id == "fu"){
        resultat = game(1, computer);
    }
    else {
        resultat = game(2, computer);
    }

    /*** Affichage  ***/
    
    $me.html(afficheMe); //Je colle cet html dans ma réponse
    $computer.html(afficheComp);
    $aff.html(resultat);

    /***  ***/

});


function game(joueurR, computerR){

    var resultat = "";

    if( joueurR == computerR ){
        resultat = "Egalité";
    }
    else if( joueurR == 0 && computerR == 2 ){
        resultat = "Gagné";
    }
    else if( joueurR == 1 && computerR == 0 ){
        resultat = "Gagné";
    }
    else if( joueurR == 2 && computerR == 1 ){
        resultat = "Gagné";
    }
    else {
        resultat = "Perdu";
    }

    return resultat;

}

$inputs = $("input[type='checkbox']");

$inputs.change(function(){

    var dataMark = [];
    var dataColor = [];

    var $checked = $("input[type='checkbox']:checked");

    $checked.each(function(){

        var mark = $(this).attr('data-mark');
        var color = $(this).attr('data-color');

        if(mark){
            dataMark.push(mark);
        }
        else if(color){
            dataColor.push(color);
        }

    });

    var $cars = $('.car');
    $cars.each(function(){

        var mark = $(this).attr('data-mark');
        var color = $(this).attr('data-color');

        var flag_mark = false;
        var flag_color = false;

        if(dataMark.length == 0) {
            flag_mark = true;
        }
        else if(dataMark.indexOf(mark) > - 1){
            flag_mark = true;
        }

        if(dataColor.length == 0) {
            flag_color = true;
        }
        else if(dataColor.indexOf(color) > - 1){
            flag_color = true;
        }

        if(flag_color && flag_mark){
            $(this).show();
        }
        else {
            $(this).hide();
        }

    });

});