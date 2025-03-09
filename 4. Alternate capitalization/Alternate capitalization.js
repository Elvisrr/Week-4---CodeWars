function capitalize(s){
    var news = '';
    var olds = '';

    for(var i = 0; i < s.length; i++){
        if(i % 2 === 0){
            news += s[i].toUpperCase();
            olds += s[i].toLowerCase();

        }else{
            news += s[i].toLowerCase();
            olds += s[i].toUpperCase();
        }



    }

    return[news, olds];
}

console.log(capitalize("abcdef"));
