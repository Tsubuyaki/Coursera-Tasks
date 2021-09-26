//var message = "in global";
//console.log ("global: message = " + message);

//var a = function () {
//	var message = "inside a";
//	console.log ("a: message = " + message);

//	function b () {
//		console.log ("b: message = " + message);
//	}

//	b();
//}

//a ();

//var x;
//console.log(x);

//if (x == undefined) {
//	console.log("x is undefined");
//}

//x = 5;
//if (x == undefined) {
//	console.log("x is undefined");
//}
//else {
//	console.log('x has been defined');
//}

// var string = "Hello";
// string += " World";
// console.log(string + "!");

// console.log((5+4)/3);
// console.log(undefined/5);

// var x = 4, y = 4;
// if (x == y) {
// 	console.log ('x=4 is equal to y=4');
// }

// x = "4";
// if (x == y) {
// 	console.log ("x='4' is equal to y=4");
// }

// if (x === y) {
// 	console.log("Strict: x='4' is equal to y=4");
// }
// else {
// 	console.log("Strict: x='4' is NOT equal to y=4");
// }

// if (false || null || undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute");
// }
// else {
// 	console.log ("All false");
// }

// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }

// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);

// function orderChickenWith(sideDish) {
// 	sideDish = sideDish || "whatever!";
// 	console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();
// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;
// console.log("Stock price is: " + company[stockPropName]);

// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 110
// };

// console.log(facebook.ceo.firstName);

// function multiply(x,y) {
//   return x * y;
// }
//  multiply.version = "v.1.0.0";
//  console.log(multiply.version);

//  function makeMultiplier(multiplier) {
//   var myFunc = function(x) {
//     return multiplier * x;
//   };

//   return myFunc;
//  }

//  var multiplyBy3 = makeMultiplier(3);
//  console.log(multiplyBy3(10));
//  var doubleAll = makeMultiplier(2);
//  console.log(doubleAll(100));

//  function doOperationOn(x, operation) {
//   return operation(x);
//  }
//  var result = doOperationOn(5, multiplyBy3);
//  console.log(result);
//  result = doOperationOn(100, doubleAll);
// console.log(result);

// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

// function changePrimitive(primValue) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);

//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);

// function changeObject(objValue) {
//   console.log("in changeObject...");
//   console.log("before:");
//   console.log(objValue);

//   objValue.x = 5;
//   console.log("after:");
//   console.log(objValue);
// }

// var value = {x: 7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);

// function test() {
//   console.log(this);
//   this.myName = "Daria";
// }

// test();
// console.log(window.myName);

// function Circle (radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius,2);
// };

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// var literalCircle = {
//   radius: 10,

//   getArea: function () {
//     console.log(this);
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// };

// console.log(literalCircle.getArea());

// var array = new Array();
// array[0] = "Daria";
// array[1] = 2;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);

// var names = ["Daria","Maria","Olga"];
// // console.log(names);

// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }; 


// names[100] = ["Jim"];
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }; 

// var names2 = ["Daria","Maria","Olga"];
// var myObj = {
//   name: "Daria",
//   course: "HTML/CSS/JS",
//   platform: "Coursera"
// };
// for (var prop in myObj) {
//   console.log(prop + ": " + myObj[prop]);
// }


// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi!";

// for (var name in names2) {
//   console.log("Hello " + names2[name]);
// }

function makeMultiplier (multiplier) {
  return (
    function (x) {
      return multiplier * x;
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));