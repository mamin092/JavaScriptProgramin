//movieRating = 'pg', 'r', 13,g

var movieRating = "g";
var age = 19;

if (('pg'==movieRating && age>=13) || ('r'== movieRating && age>=18) || (13== movieRating && age>=14) || ('g'== movieRating && age>0)) {

    result= "You can see this movie";

}
else{
    result = "You can't see this movie";
}
console.log(result);
