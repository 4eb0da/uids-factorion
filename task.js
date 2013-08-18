/**
 * http://en.wikipedia.org/wiki/Factorion
 */

(function(){
    "use strict";

    // first method
    document.body.appendChild(document.createTextNode('1, 2, 145, 40585'));

    //second method
    var factorials = [1];
    var copy;
    var sum;
    var res = [];
    var modulo;
    var i;

    for(i = 1; i <= 9; ++i){
        factorials[i] = factorials[i - 1] * i;
    }

    for(i = 1; i < 2000000; ++i){
        copy = i;
        sum = 0;
        while( copy ){
            modulo = copy % 10;
            sum += factorials[modulo];
            copy = (copy - modulo) / 10;
        }
        if( sum === i ){
            res.push(i);
        }
    }

    document.body.appendChild(document.createTextNode(res.join(', ')));
})();