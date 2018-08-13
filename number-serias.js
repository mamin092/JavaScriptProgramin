// s0 = 1 2 3 4 5 6 7 8 9

// s1 = 2 4 6 8 10 12 14.....

// s2 = 1 4 7 10 13 16 19.....

// s3 = 0 3 8 15 24 35 48......

// s4 = 1 4 3 8 5 12 7 16 9 20 ...

// s5 = 0 1 1 2 3 5 8 13 21 34.... pibonacci


// s1 = 2 4 6 8 10 12 14.....

var seris = "";

var n;

for( var i = 1; i<10 ; i++){

    n =i*2;
    seris = seris + n + " "
}

console.log("Serias 1 =",seris);
// s2 = 1 4 7 10 13 16 19.....

var seris = "1 ";
var n = 1;

for(var i=1;i<10;i++){

    n =n+3;
    seris = seris + n + " "
}

console.log("Serias 2 =", seris);


// s3 = 0 3 8 15 24 35 48......

seris = " ";
var n;
for(i=1;i<10;i++){

    n = i*i-1;

    seris = seris + n + " "
}
console.log("Serias 3 =", seris);

// s4 = 1 4 3 8 5 12 7 16 9 20 ...

seris = " ";
for(i=1;i<10;i++){
    n=i;
           if (n%2==0) {
               n= i*2;   
              }

seris = seris + n + " ";
}

console.log("seris 4=",seris);

// s5 = 0 1 1 2 3 5 8 13 21 34.... pibonacci

seris ="0 1 ";

var n = 0;
var x= 0;
var y= 1;

for (var i=1;i<10;i++) {
   n= x+y;
   x= y;
   y= n;

   seris = seris + n + " ";
    
}

console.log("seris  5=",seris);





















