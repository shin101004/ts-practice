"use strict";
// interface Person {
//     name : string;
//     age?:number;
//     // 물음표가 들어간 경우, 설정을 해도 되고 안해도 되는 값
// }
var person = {
    name: '신재민'
};
var expert = {
    name: '신개발',
    skills: ['js', 'react']
};
var people = [person, expert];
console.log(people);
// type Color = 'red' | 'orange' | 'yellow';
// const color:Color = 'red';
// const colors:Color[] = ['red','orange'];
