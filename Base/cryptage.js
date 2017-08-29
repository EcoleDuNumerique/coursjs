function encode(sentence, key){

    var alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ!";
    var encoded = "";

    for(var i=0; i<sentence.length; i++){

        var letter = sentence[i]; //c
        var letter_pos = alphabet.indexOf(letter); //2
        
        var key_letter = key[i % key.length]; //m
        var key_letter_pos = alphabet.indexOf(key_letter); //12

        var new_index =(letter_pos + key_letter_pos)%alphabet.length;

        encoded += alphabet[new_index];
    }

    return encoded;

}

function decode(sentence, key) {

    var alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ!";
    var decoded = "";

    for(var i=0; i<sentence.length; i++){

        var letter = sentence[i]; //c
        var letter_pos = alphabet.indexOf(letter); //2
        
        var key_letter = key[i % key.length]; //m
        var key_letter_pos = alphabet.indexOf(key_letter); //12

        var new_index = (alphabet.length + letter_pos - key_letter_pos) %alphabet.length;

        decoded += alphabet[new_index];
    }

    return decoded;

}