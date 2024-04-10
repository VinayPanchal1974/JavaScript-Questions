// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);

// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

// let a = [20];
// let b = ["20"];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

// console.log(typeof NaN);

// let data = 10 - -10
// console.log(data);

// let data={name:"vinay"}
// console.log(delete data.name);
// console.log(data);

// let data={name:"vinay"}
// console.log(delete data);
// console.log(data);

// const data = ["vinay", "kumar", "panchal"];
// const [y] = data;
// console.log(y);

// const data = ["vinay", "kumar", "panchal"];
// const [,y] = data;
// console.log(y);

// const data = ["vinay", "kumar", "panchal"];
// const [,,y] = data;
// console.log(y);

// const data = {name:"vinay",age:25,skill:"js"}
// const {name} = data
// console.log(name);

// let data = { name: "vinay", age: 25, skill: "js" };
// let info = { city: "bahadurgarh" };
// data = { data, ...info };
// console.log(data);

// const result = false || {} || null;
// console.log(result);

// const result = null || false || "";
// console.log(result);

// const result = [] || 0 || true
// console.log(result);

// console.log(Promise.resolve(5));     //promise fullfilled

// what will JSON.parse() will do.

// console.log(`${(x=>x)("i love ")} to program`)

// const name = "vinay"
// console.log(!typeof name === "object");
// console.log(!typeof name === "string");
// console.log(!typeof name === false);

// let person = {name:"vinay"}
// // what can modify person object
// Object.seal(person)
// console.log(person)

// check a number is even or odd

// let data = "true"
// // convert data to boolean false value
// console.log(!data);

// let data = "true"
// // convert data to boolean true value
// console.log(data);

// const arr = [1,2,3]
// delete arr[1]
// console.log(arr);
// console.log(typeof arr[1]);

// let A10 =  "vinay"
// let 10A = "kumar"       // convention error
// console.log(10A);

// let a = "hello";
// let b = `hello`;
// console.log(a === b);

// let a = 1
// let c = 2
// console.log(--c === a);

// let a = 1;
// let b = 1;
// let c = 2;
// console.log( a === b === --c);

// let a = 1;
// let b = 1;
// let c = 2;
// console.log( a === b == --c);

// console.log([[[[]]]]);

// let for = 100

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }

// console.log(+true);
// console.log(typeof +true)

// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// var x;
// let x = 10;
// console.log(x);

// let a = 3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);

// function fruit(){
//     console.log("woof");
// }
// fruit.name = "apple"
// fruit()

// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,"2"));

// let num = 0
// console.log(num++);
// console.log(++num);
// console.log(num);
// console.log(num++);
// console.log(num++);

// function sum(...arg){
// console.log(typeof arg);
// }
// sum(12)

// function getAge(){
//     'use strict'
//     age=21
//     console.log(age);
// }
// getAge()

// const sum = eval(`10*10+5`)
// console.log(sum);

// const obj = {1:"a",2:"b",3:"c"}
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

// const obj = {a:"one",b:"two",a:"repeat"}
// console.log(obj);

// for (let i = 1; i < 5; i++) {
//   if (i == 3) continue;
//   console.log(i);
// }

// const foo = () => console.log("first");
// const bar = () => setTimeout(() => console.log("second"));
// const baz = () => console.log("third");
// bar();
// foo();
// baz();

// const person = {name:"vinay"}
// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,25));
// console.log(sayHi.bind(person,25));

// const person = {name:"vinay"}
// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,25));
// console.log(sayHi.bind(person,25)());

// function sayHi(){
//     return (()=>0)()
// }
// console.log(typeof sayHi());

// function sayHi() {
//   return () => 0;
// }
// console.log(typeof sayHi()());

// function sayHi() {
//   return () => 0;
// }
// console.log(typeof sayHi());

// const number = [1, 2, 3];
// number[9] = number;
// console.log(number);.

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));

// console.log([..."vinay"])

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });
// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

// let person = {
//   name: "peter",
// };
// const members = [person];
// person = null;
// console.log(members);

// const person = {
//   name: "batman",
//   age: 23,
// };
// for (const item in person) {
//   console.log(item);
// }

// console.log(typeof 3 + 4 + "5");

// console.log(typeof (3 + 4 + "5"));

// console.log(typeof (3 + 4 + +"5"));

// console.log(+"5");

// let data = [1, 2, 3].map((num) => {
//     if (typeof num === "number") return;
//     return num * 2;
//   });
//   console.log(data);

// let data = [1, 2, 3,"3"].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(data);

// function Car() {
//   this.make = "tata";
//   return { make: "kia" };
// }
// const myCar = new Car();
// console.log(myCar.make);

// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x);

// (()=>{
//     let x = y = 10;
// })();
// console.log(typeof y);

// (() => {
//   let x = 10;
// })();
// (() => {
//   let x = 10;
// })();
// console.log(typeof x);

// (() => {
//   let x = y = 10;
// })();
// (() => {
//   let x = y = 20;
// })();
// console.log(typeof y);

// let x = 100;
// (() => {
//   var x = 20;
// })();
// console.log(x);

// console.log(!true - true);

// console.log(true + +"10");
