function part(a, lo, hi) {
  var p = a[hi];
  var i = lo;

  for(var j = lo; j < hi; j++) {
    if(a[j] <= p) {
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
  while (top >= 0) {
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

/*
 sources used:
 https://www.geeksforgeeks.org/function-call-stack-in-c/
 https://www.maxgcoding.com/iterquick (not directly adapted but clued me into used a stack)
 https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme 
*/
