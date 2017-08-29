$(document).ready(function(){

    var $bloc = $(".bloc");   
    $('body').shuffle();
    $bloc.flip( { trigger: 'manual' } );

});

$.prototype.shuffle = function(){
    var $children = this.children();
    shuffle($children);
    this.html($children);
};
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

var $lastItem = false;
$(document).on("click", ".bloc", function(){

    $(this).flip(true);

});

$(document).on("flip:done", ".bloc", function(){

   if( $lastItem == false ){
       $lastItem = $(this);
       return;
   }
   else if ( $lastItem.attr("id") == $(this).attr("id") ){
        return;
   }

   if(  $lastItem.attr("data-item") != $(this).attr("data-item") ){
       //Perdu    
       $(this).flip(false);
        $lastItem.flip(false);
   }

   $lastItem = false;

   if( checkWin() ) {
       alert("Gagné !");
   }

});

function checkWin(){
    
    var victory = true;

    $('.bloc').each(function(){ // !!! Attention les returns seront renvoyé ici !!!
        
        var flip = $(this).data("flip-model");

        if(flip.isFlipped == false){
            victory = false;
        }

    });

    return victory;

}