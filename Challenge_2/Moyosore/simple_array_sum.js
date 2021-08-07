function array_sum(ar){
     /* 
        write your code here
     */ 
     var total = 0;
     for (var i in ar) {
         total += ar[i];
     }
     return total;
}
var payChecks = [3, 4, 5, 1, 8];
var weeklyPay = array_sum(payChecks);