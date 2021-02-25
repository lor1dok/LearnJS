"use strict";

class Rectangle { //Классы пишутся с Большой_буквы
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
} // Концепция или шаблон 

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); //Супер всегда должна идти первой строчкой
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(16, 16, "Hell'o warld", 'black');

const squere = new Rectangle(32, 32); // Экземпляр
const long = new Rectangle(20, 100); // Экземпляр
// Абстракция, отделяем концепцию от экземпляров


console.log(squere.calcArea());
console.log(long.calcArea());

div.showMyProps();
console.log(div.calcArea());