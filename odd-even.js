var n = 0;
var result ;

var reminder = n % 2;
if (0==n) {
result= " This is a neutral number";
}
else if (0==reminder) {
    result = "This number is enen";
}
else{
    result= " This number is odd";
}

console.log(result);