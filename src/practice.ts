let count = 0;
count +=1;

const message:string = 'hello world';

const isDone:boolean = true;

const numbers:number[]=[1,2,3];
const messages:string[] = ['hello','world'];

let mightBeUndefined:string | undefined = undefined;
let nullabelNumber:number | null = null;

let color :'red'|'orange'|'yellow' = 'red';
color = 'yellow';

function sum(x:number, y:number):number {
    return x+y;
}

function sumArray(numbers:number[]):number {
    return numbers.reduce((acc,current)=>acc+current,0);
    // reduce((누적값, 현재값, 인덱스, 요소) => return 결과값, 초깃값(누적값의 초깃값))
}

const total = sumArray([1,2,3,4,5]);

sum(1,2);