//Commande de debug
//alert('Hello !');
console.log('Debuger !');

//Commande de base
var $titre = document.getElementById("titre");
var $button = document.getElementById("mybutton");

/*Fonction sans nom = fonction anonyme -> Ce sont 
surtout les actions définies qui sont interressantes,
on ne cherchera pas à rappeler cette fonction*/

var flag = false;
$button.onclick = function(){ 

    flag = !flag;
    var $popup = document.getElementById("popup");

    if(flag == true) {
        $titre.style.color = "red";
        $titre.style.backgroundColor = "blue";
        $popup.style.opacity = 1;
        $popup.style.left = "calc(50% - 150px)";
    }
    else {
        $titre.style.color = "blue";
        $titre.style.backgroundColor = "red";
        $popup.style.opacity = 0;
        $popup.style.left = "-300px";
    }
};

$buttoncolor = document.getElementById("colorbutton");

var j = 1000;
$buttoncolor.onclick = function(){

    var $elements = document.getElementsByClassName("element");
    j--;
    if(j < 0){
        j = 1000;
    }
    
    for( var i=0; i<$elements.length; i++){
        
        if((i+j)%3 == 1) {
            $elements[i].style.color = "green";
        }
        else if((i+j)%3 == 2) {
            $elements[i].style.color = "red";
        }
        else {
            $elements[i].style.color = "blue";
        }

    }

}

var $span = document.getElementsByTagName('span');
console.log($span);

//On utilise les selecteurs css (premier trouvé)
var $monspan = document.querySelector('div span');
console.log($monspan);

//On utilise les selecteurs css (ensemble des éléments trouvé)
var $messpan = document.querySelectorAll('div span');
console.log($messpan);



/* Color Picker */
var $cursors = {
    red : document.getElementById('red'),
    green: document.getElementById('green'),
    blue : document.getElementById('blue')
};

var color = {
    red : 0,
    green: 0,
    blue: 0
};

//onchange -> Evenement qui attend que la valeur change !
/*$cursors.red.onchange = function(){ 
   color.red = $cursors.red.value;
   colorRect();
}
$cursors.green.onchange = function(){
   color.green = $cursors.green.value;
   colorRect();
}
$cursors.blue.onchange = function(){
   color.blue = $cursors.blue.value;
   colorRect();
}

function colorRect(){
    var $seeColor = document.getElementById('seeColor');
    $seeColor.style.backgroundColor = "rgb("+color.red+", "+color.green+", " +color.blue+ " )";
}

colorRect(); */

setInterval(function(){

    colorRect();

}, 100);

function colorRect(){

    var $seeColor = document.getElementById('seeColor');
    color.red = $cursors.red.value;
    color.green = $cursors.green.value;
    color.blue = $cursors.blue.value;
    $seeColor.style.backgroundColor = "rgb("+color.red+", "+color.green+", " +color.blue+ " )";

}

/****  Encodage - Decodage  *****/
var $p = document.getElementById("encoded");

//Pour remplacer le html dans une balise
$p.innerHTML = "Ma phrase remplacée";

//On récupère l'objet textarea
var $phrase = document.querySelector("textarea");

//On récupère l'objet input#key
var $key = document.getElementById("key");

//On récupère l'objet button#encode_button
var $encode_button = document.getElementById("encode_button");

//On récupère l'objet button#decode_button
var $decode_button = document.getElementById("decode_button");

//Au click sur le bouton d'encode ...
$encode_button.onclick = function(){
    var key = $key.value; //On récupère la VALUE de l'objet input#key
    var phrase = $phrase.value; //On récupère la VALUE de l'objet textarea
    var result = encode(phrase, key); //On encode
    $p.innerHTML = result; //On écrit dans p#encoded le resultat
}

//Au click sur le bouton de décode ...
$decode_button.onclick = function(){
    var key = $key.value; //idem
    var phrase = $phrase.value; //idem
    var result = decode(phrase, key); //On decode
    $p.innerHTML = result; //idem
}

/* **** Mini calculette **** */

var $input_1 = document.getElementById('nbr_1');
var $input_2 = document.getElementById('nbr_2');

var $plus = document.getElementById('plus');
var $moins = document.getElementById('moins');
var $multiplie = document.getElementById('multiplie');
var $divise = document.getElementById('divise');
var $result = document.querySelector('h4');

$plus.onclick = function(){

    var resultat = parseInt($input_1.value) + parseInt($input_2.value);
    $result.innerHTML = resultat;

}

$moins.onclick = function(){

    var resultat = parseInt($input_1.value) - parseInt($input_2.value);
    $result.innerHTML = resultat;

}

$multiplie.onclick = function(){

    var resultat = parseInt($input_1.value) * parseInt($input_2.value);
    $result.innerHTML = resultat;

}

$divise.onclick = function(){

    var resultat = parseInt($input_1.value) / parseInt($input_2.value);
    $result.innerHTML = resultat;

}

/* Cube Game */
var $cube = document.getElementById('cube');
var win = false;

$cube.onmouseover = function(){

    if(win == true){
        return; //Ne retourne rien mais stope la fonction !
    }

    var position_top = Math.random() * 300;
    var position_left = Math.random() * 400;

    $cube.style.top = position_top + "px";
    $cube.style.left = position_left + "px";

}

$cube.onclick = function(){

    $cube.style.backgroundColor = "green";
    win = true;

}

/**** Moyenne ****/
var $notes = document.getElementById("notes");
var $add_note = document.getElementById("add_note");
var $list = document.getElementById("liste_notes");
var $moyenne = document.getElementById("moyenne");
var notes = [];

$add_note.onclick = function(){

    var theNote = parseInt($notes.value); //Je prend la valeur numérique
    notes.push(theNote); //Ajoute la note a mon tableau
    $notes.value = ""; //Remet a vide la valeur du champ
    
    displayNotes();
    $moyenne.innerHTML = moyenne(notes);

}

function displayNotes(){

    var html = "";

    for(var i=0; i<notes.length; i++){
        html += "<li>"+ notes[i] + "</li>";
    }

    $list.innerHTML = html;
    
}

function moyenne(tab){

    var total = 0;

    for(var i=0; i<tab.length; i++){
        total += tab[i];
    }

    var moyenne = total / tab.length;

    return moyenne;

}


/* ****** Exercice bonhomme ****** */

var $body = document.querySelector('body');
var $bonhomme = document.getElementById('bonhomme');
var pos_top = 0;
var pos_left = 0;

$body.onkeydown = function( event ){ //Touche enfoncé

    var key = event.keyCode;
    var classe = "";

    switch(key){
        case 90 : 
            pos_top -= 5;
            classe = "top";
            break;
        case 83 :
            pos_top += 5;
            classe = "bottom";
            break;
        case 81 : 
            pos_left -= 5;
            classe = "left";
            break;
        case 68 : 
            pos_left += 5;
            classe = "right";
            break;
        default : 
            console.log("Mauvaise touche");
            classe = "";
            break;
    }

    $bonhomme.style.left = pos_left + "px";
    $bonhomme.style.top = pos_top + "px";
    $bonhomme.className = classe;

}