
interface Shape {
    getArea():number;
}

class Circle implements Shape {
    // Circle class가 Shape interface를 충족시켜야한다는 뜻
    constructor(public radius:number) {
        this.radius = radius;
    }
    // public 선언 시 클래스 외부에서 값 조회 가능
    
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}


class Rectangle implements Shape {
    constructor(private width : number,private height : number) {
        this.width = width;
        this.height = height;
        // 클래스 내 멤버변수 = 생성자 인자로 들어온 값
    }
    //private 선언 시 클래스 내부에서만 조회 가능

    getArea() {
        return this.width * this.height;
    }
}

const shapes:Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape=>{
    console.log(shape.getArea());
})