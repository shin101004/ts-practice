"use strict";
var count = 0;
count += 1;
var message = 'hello world';
var isDone = true;
var numbers = [1, 2, 3];
var messages = ['hello', 'world'];
var mightBeUndefined = undefined;
var nullabelNumber = null;
var color = 'red';
color = 'yellow';
function sum(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
    // reduce((누적값, 현재값, 인덱스, 요소) => return 결과값, 초깃값(누적값의 초깃값))
}
var total = sumArray([1, 2, 3, 4, 5]);
sum(1, 2);
