const _ = require('lodash');
//fibonace
 function fibonace(n){
    if (n==0) return 0;
    if (n==1) return 1;
    return fibonace(n-1)+fibonace(n-2);
 }
 fibonace=_.memoize(fibonace);
 console.log(fibonace(6))