 /* 
baby = 0-1; toddler = 1-3; kid = 4-12; teenager = 13-17 ; adult = 18 +

*/

var yourAge = 18;
var result;

if (yourAge<=1) {
    result ="baby";
} else if(yourAge<=3){
result = ' toddler';
} else if(yourAge<=12){
result = ' kid';
}else if (yourAge<18) {

    result = 'teenager';
}
else if(yourAge>=18){
    result = " addult";
}
console.log("you are a", result);
