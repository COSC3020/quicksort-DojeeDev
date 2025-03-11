/*
 sources used:
 https://www.geeksforgeeks.org/function-call-stack-in-c/
 https://www.maxgcoding.com/iterquick (not directly adapted but clued me into used a stack)
 https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme 
*/

function part(a, lo, hi) {

  var p = a[hi];
  var i = lo;

  for(var j = lo; j < hi; j++) {
    if(a[j] <= p) {
      // console.log("swaping " + a[i] + " and " + a[j]);
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
      i++;
    }
  }
    var tmp = a[i];
    a[i] = a[hi];
    a[hi] = tmp;
  return i;
}

function quicksort(a) {
  if (a.length <= 1) { return a; }
  var lo = 0;
  var hi = a.length-1;
  var stack = new Array(hi+1);
  var top = -1;
  stack[++top] = lo;
  stack[++top] = hi;

  var d = 1;

  while (top >= 0) {
    // console.log("Run(" + d + "): " + a);
    d++;
    hi = stack[top--];
    lo = stack[top--];

    var i = part(a, lo, hi);

    if (i-1 > lo) {
        stack[++top] = lo;
        stack[++top] = i - 1;
    }
    if (i+1 < hi) {
        stack[++top] = i + 1;
        stack[++top] = hi;
    }
  }
  return a;
}

console.log(quicksort([5,4,3,2,1,9,87,7]));

/**
function quicksort(a) {
  var l = 0; // left pointer
  var r = a.length-1; // right pointer
  var stack = new Array(r+1);
  stack.fill(0);

  var top = -1;

  // add initial range to stack
  stack[++top] = l;
  stack[++top] = r;

  // go through stack until it is empty
  while (top >= 0) {
    // get our current range for the call
    r = stack[top--];
    l = stack[top--];

    var i = part(a, l, r);


    if (i - 1 > l) {
      stack[++top] = l;
      stack[++top] = i - 1;
    }
    if (i + 1 < r) {
      stack[++top] = i + 1;
      stack[++top] = r;
    }
  }
  return a;
}
// partition method adapted from lomuto scheme
function part(a, l, r) {
  var pv = a[r];
  var i = a[l];

  for (var j = l; j < r; j++) { // maybe change to r - 1
    if (a[j] <= pv) {
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
      i++;
    }
  }
  tmp = a[i]
  a[i] = a[r]
  a[r] = tmp;
  return i;
}

**/
