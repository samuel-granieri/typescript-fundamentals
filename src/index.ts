//string, boolean, number, ...

let x: number = 10;

x = 12;

console.log(x);


//inferência x annotation

//inferência
let y = 12;

//annotation
let z: number = 12;


//tipos básicos
let firstName: string = "Samuel";
let age: number = 27;
const isAdmin: boolean = true;

//object
const myNumbers:number[] = [1,2,3]

console.log(myNumbers)
console.log(myNumbers.length)
console.log(firstName.toUpperCase())
myNumbers.push(5)

//tuplas
let myTuple:[number, string, string]
myTuple = [10, 'Samuel','Martins']

//object literals -> {prop: value}
const user:{name:string, age:number}={
    name: 'Samuel',
    age: 27
}

console.log(user.name)

//any
let a:any = 0

a = "teste"
a = true
a = []


//union type
let id: string | number = '10'
id = 200


//type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = '0001'


//enum
//taminho de roupas (size:medio, size: pequeno)

enum Size{
    p = 'pequeno',
    m = 'medio',
    g = 'grande'
}

const camisa ={
    name: 'Camisa gola v',
    size: Size.g
}

//literal types
let teste:"algumValor" | null
teste = null

//funcoes
function sum(a:number,b:number){
    return a + b
}

console.log(sum(12,12))

function sayHelloTo(name:string): string{
    return `Hello ${name}` 
}

console.log(sayHelloTo('Samuel'))


function msg(msg:string): void{
    console.log(msg)
} 

function greeting(name:string, greet?:string):void{

    if (greet){
        console.log(`Olá ${greet} ${name}`)
    }else{
        console.log(`Olá ${name}`)
    }
    
}

//interfaces
interface MathFunctionParams{
    n1: number,
    n2: number
}

function sumNumbers(nums:MathFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2: 2}))

function mutiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

console.log(mutiplyNumbers({n1: 1, n2: 2}))

const someNumbers:MathFunctionParams={
    n1: 5,
    n2: 10
}

console.log(mutiplyNumbers(someNumbers))


//narrowing
//checagem tipos

function doSomething(info:number|boolean){
    if(typeof info === 'number'){
        console.log(`o número é ${info}`)
        return
    }
    console.log('Não foi passado um número')
}

doSomething(5)
doSomething(true)

//generics
function showArraysItems<T>(arr:T[]){
    arr.forEach((item)=>{
        console.log(`ITEM ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ['a','b','c']

showArraysItems(a1)
showArraysItems(a2)

//classes
class User{
    name
    role
    isApproved

    constructor(name: string, role:string, isApproved: boolean){
        this.name = name,
        this.role = role,
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void{
        if(canShow){
            console.log(`Status do usuário é ${this.role}`)
            return
        }
        console.log('Informação restrita')
    }
}

const zeca = new User('Zéca', 'Admin', true) 

console.log(zeca)

zeca.showUserName()

zeca.showUserRole(false)

//interfaces em classes
interface IVehicle{
    brand:string,
    showBrand():void
}

class Car implements IVehicle{

    brand
    wheels

    constructor(brand: string, wheels:number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}

const fusca = new Car('W', 4)

fusca.showBrand()


//heranca
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels:number, engine:number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar('Audi',4, 2.0)

console.log(a4)

a4.showBrand()


//decorators
function BaseParameters(){
    return function<T extends {new(...args:any):{}}>(constructor: T){
        return class extends constructor{
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person{
    name

    constructor(name:string){
        this.name = name
    }
}

const sam = new Person('Sam')

console.log(sam)