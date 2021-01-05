"use strict";
var Circle = /** @class */ (function () {
    // Circle class가 Shape interface를 충족시켜야한다는 뜻
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // public 선언 시 클래스 외부에서 값 조회 가능
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
        // 클래스 내 멤버변수 = 생성자 인자로 들어온 값
    }
    //private 선언 시 클래스 내부에서만 조회 가능
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
