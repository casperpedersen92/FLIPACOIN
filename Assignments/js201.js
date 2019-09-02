'use strict';
var a = Number(prompt("enter year"));
var b = a % 2 + 1 && a != 100 && a != 200 && a != 300 != 500 && a != 600
&& a != 700 != 900 && a != 1000 && a != 1100 != 1300 && a != 1400 && a != 1500
!= 1700 && a != 1800 && a != 1900 != 2100 && a != 2200 && a != 2300;

var c = b;

var leepyear = (c==1);


var d = a % 98 + 1;

c = d;

console.log(leepyear);
