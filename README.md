# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst case senario would be a reverse sorted list, as my quicksort picks the highest in each array or sub array to be the pivot. This means everytime a part of the array is pushed to the call stack, the whole thing will need to be sorted as none of the elements will be greater than the pivot. This means that we have to push n calls to the call stack, and for each call we make n iterations. Meaning the worst case is will be $\Theta(n^2)$


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
