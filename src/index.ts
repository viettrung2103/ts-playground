// type Person = {
//   name: string;
// };

// const person: Person = {
//   name: "Jon"
// }

// console.log(person.name);

// Annotation

// Strings
// let myName: string = "12";
// myName = "123";
// console.log(myName)

// numbers
// let favNumber: number = 12;
// favNumber = 13;
// console.log(favNumber);

// let tsHard: boolean = false;

// console.log(tsHard);

//INTERFERRING

// let tech = "TS";
// let favNum = 8;
// let isTS = true;
// tech = 12;

// console.log(tech);

// Regular Func
// function addOne(num: number) {
//   return num + 1;
// }

// const result = addOne(3);
// console.log(result);


// //Arrow Func
// const double = (x:number, y: number):number => x * y
// const res = double(2,3) 
// console.log( res);

// // default parameter
// function greet(person: string = "noname"):string {
//   return `Hello ${person}`;
// }

// console.log(greet());

// function throwError(msg: string): never   {
//   throw new Error(msg)
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// let x: never


// Array
// const names : string[] = ["Alice","Trung"]
// const names1: Array<string> = ["1", "2", {}]

// names.push(true)

// console.log(names);
// console.log(names1);


// const singleDi: number[] = [1, 2, 3]
// const doublDi: number[][] = [
//   [1,2,3]
// ]
// const tripleDi: number[][][] = [
//   [
//     [1,2,3]
//   ]
// ]
// console.log(singleDi);
// console.log(doublDi);
// /** Logs the contents of the singleDi array to the console */
// console.log(tripleDi);


//Object in depth
// const person: { firstName: string, age: number } = {
//   firstName: "Trung",
//   age: 13
// }

// function printUser(): { name: string, age: number, isUser: boolean }{
//   return {
//     name: "Trung",
//     age: 12,
//     isUser: true
//   }
// }
// console.log(person);
// console.log(printUser());

// type User = {
//   name: string;
//   age?: number;
//   readonly location: string;
// }
// const printUserInfo = (user: User) => {
//   return `Name: ${user.name} - ${user.location} - ${user.age}`
// }

// const res = printUserInfo({ name: "Alex", age: 20, location: "USA" }
// )
// const per1: User = { name: "Trung", location: "Vietnam" }
// // per1.location = "China"
// const res1 = printUserInfo(
//   per1
// )
// console.log(res);
// console.log(res1);

// type UserInfo = {
//   first: string;
//   last: string;
//   age: number
// }

// type AccountDetails = {
//   email: string;
//   password: string
// }

// type User = UserInfo & AccountDetails
// const trung: User = {
//   first: "trung",
//   last: "doan",
//   age: 20,
//   email: "email",
//   password:"password"
// }
// console.log(trung);


// let password: string | number = 20
// type UserInfo = {
//   first: string;
//   last: string;
//   age: number
// }

// type AccountDetails = {
//   email: string;
//   password: string; 
// }

// const user: UserInfo | AccountDetails = {
//   email: "email",
//   password: "123"
// }

// const items: (number | string)[] = ["hi",1, 2, 3, 'true']
// console.log(items);


// let color: "red" | "blue" | "green"
// let correct: true
// color = "red";
// color = "yellow";
// correct = fals
// console.log(color);

// tuples
// let mytuple: [number, string]
// mytuple = [10,'ten']
// const games :[string, string, string] = ['game1','game2','game3']

// console.log(mytuple);
// console.log(games);

// enum
// enum WeatherConditions {
//   Sunny = 'sunny',
//   Cloudy = 'cloudy',
//   Rainy = 'rainy'
// } 

// console.log(WeatherConditions);
// const currentWeather = WeatherConditions.Sunny;
// console.log(`Current weather is ${currentWeather}`);

// class
// class Person {
//   readonly name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }


// const person1 = new Person("Jon", 10);
// console.log(person1);

// class Person{
//   private first: string;
//   public last: string
//   protected age : number

//   constructor(first: string, last: string, age: number) {
//     this.first = first;
//     this.last = last;
//     this.age = age
    
//   }
//   getName(): string{
//     return `${this.first} ${this.last} - age ${this.age}`;
//   }
// }

// class Human extends Person {
//   constructor(first: string, last: string, age: number) {
//     super(first, last, age)
//     // this.age = age
//   }
// }

// let p1 = new Person("123", "33",33)
// let h1 = new Human("444","555",123)
// // console.log(p1.first);
// console.log(h1);

// getter and setter
// class myClass {
//   private _myProperty: number = 0;

//   get myProperty(): number {
//     return this._myProperty;
//   }
  
//   set myProperty(value: number) {
//     this._myProperty = value;
//   }
// }

// const myInstance = new myClass();
// console.log(myInstance.myProperty);
// myInstance.myProperty = 20;
// console.log(myInstance.myProperty);

// interface
// interface Computer {
//   name: string;
//   ram: number;
//   hdd: number;
// }

// const computerExample: Computer =  {
//   name: "12",
//   ram: 8,
//   hdd: 100
// }

// console.log(computerExample.name);
// console.log(computerExample.ram);
// console.log(computerExample.hdd);

// interface Movie {
//   readonly name: string,
//   rating: number;
//   genra?: string
// }

// const movie1: Movie = {
//   name: "name 1",
//   rating : 1.2,

// }
// console.log(movie1);
// movie1.name = "new name";

// interface fucntion
// interface MathOperation {
//   (x: number, y: number): number;
// }

// const add: MathOperation = (a, b) => a + b
// console.log(add(1,3));
// const substract: MathOperation = (a, b) => a - b
// console.log(substract(3,2));


// interface class
// interface Person {
//   first: string,
//   last: string,
//   age: number,
//   sayHello(): void
// }

// function greet(person: Person) {
//   console.log(`Hello, ${person.first} ${person.last}`);
//   person.sayHello();
// }

// const john: Person = {
//   first: "Jon",
//   last: "Doe",
//   age: 30,
//   sayHello() {
//     console.log(`Hi from ${this.first}`);
//   }
// }
// greet(john);

// interface MovieDetails {
//   readonly name: string;
//   ratings: number;
//   printMovieInfo(name: string, price: number, ratings:number): string| number
// }

// interface MovieGenra extends MovieDetails {
//   genra: string;
// }

// const movie1: MovieGenra = {
//   name: "movie name",
//   ratings: 1.2,
//   genra: "Horror",
//   printMovieInfo(
//     name: string,
//     price: number,
//     ratings: number
//   ): string | number {
//     return `Movie name: ${name} price: ${price} ratings: ${ratings}`;
//   }
// }

// console.log(movie1);

// interface with class
// interface Vehicle {
//   start(): void
//   stop():void 
// }

// class Car implements Vehicle {
//   start(): void {
//     console.log("Car is starting..");
//   }
//   stop(): void {
//     console.log("Car is stopping.."); 
//   }
// }

// const myCar = new Car();
// myCar.start();
// myCar.stop();

// // declaration merging
// interface Car {
//   brand: string
//   start(): void
// }

// interface Car {
//   model: string;
//   stop(): void;
// }

// const myCar: Car = {
//   brand: "MBW",
//   model: "123",
//   start() {
//     console.log("Start");
//   },
//   stop() {
//     console.log("Stop");
//   }
// }

// myCar.start();
// myCar.stop();

// Generic Type
// function printNumber(item: number,  defaultValue : number): [number, number] {
//   return [item, defaultValue];
// }function printString(item: string,  defaultValue : string): [string, string] {
//   return [item, defaultValue];
// }function printBoo(item: boolean,  defaultValue : boolean): [boolean, boolean] {
//   return [item, defaultValue];
// }
// function printNumber(item: any,  defaultValue : any): [any, any] {
//   return [item, defaultValue];
// }
// const num = printNumber(1, "true");
// const str = printString("1", "3");
// const boo = printBoo(true, true);
// console.log(num);
// console.log(str);
// console.log(boo);

// function uniqueDataTypesFunc<T>(item: T, defaultValue: T):[T, T]{
//   return [item,defaultValue]
// }

// const res = uniqueDataTypesFunc<number>(10, 20);
// const res2 = uniqueDataTypesFunc<string>("hello", "world")
// const res3 = uniqueDataTypesFunc<boolean>(true, true)
// console.log(res);
// console.log(res2);
// console.log(res3);

// interface Dog {
//   name: string;
//   breed: string;
// }

// const dog1 = uniqueDataTypesFunc<Dog>({ name: "12", breed: "black" }, { name: "22", breed: "newDog" })
// // console.log(dog1);

// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
//   key: string; 
//   value: T;
// }{
//   const keys = Object.keys(obj)
//   const randKey = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKey, value: obj[randKey] };
// }

// const stringObject = { a: "apple", b: "banana", c: "cherry" }
// const resStr = getRandomKeyValuePair<string>(stringObject);
// console.log(resStr);

// const numObj = { one: 1, two: 2, three: 3 }
// const resNum = getRandomKeyValuePair<number>(numObj);
// console.log(resNum);

// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//   return array.filter((item) =>condition(item))
// }

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 == 0);
// console.log(evenNumbers);

// const stringArray = ["apple", "banana", "cherry", "date"]
// const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
// console.log(shortWords);

// interface Fruit {
//   name: string;
//   color: string;
// }

// const fruitArray: Fruit[] = [
//   { name: "Apple", color: "Red" },
//   { name: "Banana", color: "Yellow" },
//   { name: "Cherry", color: "Red"}
// ]

// const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "Red")
// console.log(redFruits);

// function reversePair<T, U>(value1: T, value2: U): [U, T] {
//   return [value2, value1];
// }

// const reversedPair = reversePair<string, number>("hello", 20);
// console.log(reversedPair);

//generic class
// class Box<T> {
//   private content: T;
//   constructor(initialContent: T) {
//     this.content = initialContent;
//   }
//   getContent(): T{
//     return this.content
//   }
//   setContent(newContent: T): void{
//     this.content = newContent
//   }
// }

// const stringBox = new Box<string>("Hello TS")
// console.log(stringBox.getContent());
// stringBox.setContent("new TS");
// console.log(stringBox.getContent());

// const numberBox = new Box<number>(20);

// console.log(numberBox.getContent());
// numberBox.setContent(100);
// console.log(numberBox.getContent());

// type narrowing
// typeof
// type MyType = string | number;

// function exampleFunction(value: MyType): void {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// exampleFunction("hello");
// exampleFunction(20)

// instanceof operator
// class Dog{
//   bark(): void {
//     console.log("wof wof");
//   }
// }
// class Cat {
//   meow(): void {
//     console.log("moew meow");
//   }
// }

// function animalSound(animal: Dog | Cat): void {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// const cat = new Cat();
// const dog = new Dog();

// animalSound(dog);
// animalSound(cat);

// intersection type
// type Employee = {
//   id: number;
//   name: string;
// }

// type Manager = {
//   department: string;
//   role: string;
// }

// type ManagerEmployee = Employee & Manager;

// const manager: ManagerEmployee = {
//   id: 12,
//   name: "123",
//   department: "boss",
//   role: "manager",
// }

// console.log(manager);

// console.log(document);



