"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Samuel";
let age = 27;
const isAdmin = true;
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
let myTuple;
myTuple = [10, 'Samuel', 'Martins'];
const user = {
    name: 'Samuel',
    age: 27
};
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = '10';
id = 200;
const userId = 10;
const productId = '0001';
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "medio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa gola v',
    size: Size.g
};
let teste;
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Samuel'));
function msg(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function mutiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(mutiplyNumbers({ n1: 1, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(mutiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`o número é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
doSomething(5);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name,
            this.role = role,
            this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Status do usuário é ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const zeca = new User('Zéca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car('W', 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('Sam');
console.log(sam);
