// interface Person {
//     name : string;
//     age?:number;
//     // 물음표가 들어간 경우, 설정을 해도 되고 안해도 되는 값
// }

// interface Developer extends Person {
//     skills:string[];
// }

// const person:Person = {
//     name:'신재민',
//     age : 25
// }

// const expert:Developer = {
//     name:'신개발',
//     skills:['js','react']
// }

// const people: Person[] = [person, expert];

type Person = {
    name : string;
    age?:number;
}

type Developer = Person & {
    skills : string[];
}

const person: Person= {
    name:'신재민'
};

const expert:Developer = {
    name : '신개발',
    skills:['js','react']
}

type People = Person[];
const people:People = [person, expert];
console.log(people);

// type Color = 'red' | 'orange' | 'yellow';
// const color:Color = 'red';
// const colors:Color[] = ['red','orange'];