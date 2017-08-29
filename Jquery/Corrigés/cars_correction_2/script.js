var $input = $('input');
var $cars = $('.car');

$input.change(function(){ //En cas de changement sur un input ....

    $cars.hide(); //On cache toute les voitures

    var $inputMark = $('input.mark:checked');
    var $inputColor = $('input.color:checked');

    //Si on a 0 marque, on va trier sur les couleurs
    if($inputMark.length == 0 ){

        $inputColor.each(function(){ //On cherche la liste des couleurs

            var color = $(this).val();

            //On affiche uniquement les voitures de cette couleur
            $cars.filter("[data-color='"+color+"']").show();

        });
    }

    //On va parcourrir la liste des marques
    $inputMark.each(function(){

        var mark = $(this).val();

        if($inputColor.length == 0){ //Si on a pas de couleur, on trie uniquement sur la marque
            $cars.filter("[data-mark='"+mark+"']").show();
        }
        
        $inputColor.each(function(){

            var color = $(this).val();

            $(".cars[data-mark='"+mark+"'][data-color='"+color+"']").show();
            $cars
                .filter("[data-mark='"+mark+"']")
                .filter("[data-color='"+color+"']")
                .show(); //On trie sur marque + couleurs


        });

    });

})

