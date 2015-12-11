function binarySearch(A,n,x) {
    
    var start = 0;
    var end = n;
    var mid = Math.floor(n/2);
    while(start <= end) {

        if(A[mid] == x) {
            return x + " found at " + mid + "position";
        }
        if(A[mid] > x) {
           end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = (start + end)/2;
        Math.floor(mid);
    }
    return x + " Not Found" ;
}

var A = [1,2,4,6,8,10,12,14,18,22,32,42,52,62];
var n = A.length;
var x = 52;
