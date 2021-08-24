 /* 
    Given an array of integers, find the sum of its elements.
    For example, if the array ar = [1,2,3,4], 1+2+3+4 = 10
    Therefore, return 10
 */ 

function array_sum(ar){
     //write your code here
     var total=0;
     for(var i in ar) { 
         total += ar[i];
     }
     return total;
 }
 
 var payChecks = [3, 4, 5, 1, 8]; 
 var weeklyPay= array_sum(payChecks);
   
