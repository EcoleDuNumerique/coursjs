var $form = $('form');

//$(element).find permet d'aller chercher les éléments enfants de form
// On a un gain de temps en effectuant cette opération car on ne parcours pas
//le DOM entierement à chaque appel !!!
var $inputs = {
    all : $form.find("input, select"),
    username : $form.find('#username'),
    email : $form.find('#email'),
    password : $form.find('#password'),
    password_check : $form.find('#password-confirm'),
    gender: $form.find('#gender'),
    tel : $form.find('#phone'),
    robot : $form.find('#robot'),
    cp : $form.find("#cp"),
    cities : $form.find("#cities")
};

var $errors = $("#errors");
var thereWasError = false;

$form.submit(function(event){ //On soumet/envoi le formulaire

    event.preventDefault(); //Empeche le rechargement de la page !

    cleanErrors();

    //Check username
    if( $inputs.username.val().length < 6 ){
        var msg = "Nom d'utilisateur trop court !";
        showError(msg, $inputs.username);
    }

    //Check email
    var domaines = [".fr", ".com", ".net", ".eu"];
    var domaine_flag = false;
    var arobaze_flag = false;

    for( var i=0; i<domaines.length; i++){

        if( $inputs.email.val().search( domaines[i] ) > -1 ){
            domaine_flag = true;
            break;
        }

    }

    if( $inputs.email.val().search("@") > -1 ){
        arobaze_flag = true;
    }

    if( arobaze_flag == false || domaine_flag == false ){
        var msg = "Email incorrect !";
        showError(msg, $inputs.email);
    }

    //Check password
    if( $inputs.password.val().length <= 8 ) {
        var msg = "Mot de passe trop court";
        showError(msg, $inputs.password);
    } 
    if ( $inputs.password.val() != $inputs.password_check.val() ){
        var msg = "Mot de passe non-correspondant !";
        showError(msg, $inputs.password_check);
    }

    //Check gender
    if( $inputs.gender.val() == "0" ){
        var msg = "Choisissez votre sexe !";
        showError(msg, $inputs.gender);
    }

    //Check tel
    if( !$.isNumeric( $inputs.tel.val() ) || $inputs.tel.val().length != 10 ) {
        var msg = "Numéro de téléphone incorrect";
        showError(msg, $inputs.tel);
    }

    //Check robot
    if( $inputs.robot.is(":not(:checked)") ) {
        var msg = "Veuillez vérifier votre identité";
        showError(msg, $inputs.robot);
    }

    if(thereWasError == false){
        
        //unbind : supprimer toute les actions associé à l'évenement
        $form.unbind("submit").submit();

    }   

});

function showError(errorMsg, $target){

    $errors.append("<p>"+errorMsg+"</p>"); //Ajouter du texte/html a la suite
    $target.addClass("redborder");
    thereWasError = true;

}

function cleanErrors(){
    $errors.html(""); //Vide le html
    $inputs.all.removeClass("redborder"); //Retire la classe d'erreur
    thereWasError = false;
}

var cities = {
    66 : ["Perpignan", "Villeneuve", "Le Soler"],
    34 : ["Montpellier", "Canet"],
    11 : ["Narbonne"]
};

$(document).ready(function(){

    var po = cities[66];
    for( var i=0; i < po.length; i++ ){

        $inputs.cities.append("<option>"+po[i]+"</option>");

    }

});

$inputs.cp.change(function(){

    $inputs.cities.html("");
    var selectedOption = $(this).val();
    var citiesList = cities[ selectedOption ];

    for( var i=0; i < citiesList.length; i++ ){

        $inputs.cities.append("<option>"+citiesList[i]+"</option>");

    }

});