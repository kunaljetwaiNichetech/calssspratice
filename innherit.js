"use strict";
class Persons {
    // this is constructor for  creating multiple instacne 
    // this key word refer to this class object property only
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    //this called method in class we can normaly say the function 
    introduice() {
        return `My name is ${this.name} and my age is ${this.age} ,i love ${this.hobbies.join(",")}.`;
    }
}
// this is instance of claass 
const Persons1 = new Persons("kunal", 12, ["cricket", "traveling"]);
const Persons2 = new Persons("jetwani", 18, ["songs", "cycleing"]);
console.log(Persons1);
console.log(Persons2.introduice());
// this is one person it works fine this is instance of class 
// for multiple we have to use constructor so in instance we can pass value and dispay that 
// for common properties  person class is there 
// for  inhertance  follwing code
// for  keyword "Extends" will alow studen to access the properties of Persons in student 
class Student extends Persons {
    constructor(grade, name, age, hobbies) {
        super(name, age, hobbies);
        // this.name=name  // we can also write like this but we use super for accesing the properties 
        this.grade = grade;
    }
    //   introduice():string{
    //     return `My name is ${this.name} and my age is ${this.age} i study in ${this.grade} ,i love ${this.hobbies.join(",")}.`
    // }
    // or we can also do like that 
    introduice() {
        return ` ${super.introduice()} i study in grade ${this.grade}`;
    }
}
const student1 = new Student(10, "jetwani", 18, ["songs", "cycleing"]);
console.log(student1);
console.log(student1.introduice());
// for public and private or protected properties write the key word before the variable like public age or protected age or private age 
// public access to all 
// protected allowd to only children by methoda or this key word outside calss not avialbe
// private the property is only allowed to the the class where it is been declared othern then that not in child or not outside the class any where 
// only whin that class where it is declare can be used inside that class only
/////////////////////////for short hand properties we need  use access modifier public private protected////
// the define of variables is went and this .variable is also went 
class Persons8 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    //this called method in class we can normaly say the function 
    introduice() {
        return `My name is ${this.name} and my age is ${this.age} ,i love ${this.hobbies.join(",")}.`;
    }
}
// this is instance of claass 
const Persons81 = new Persons("kunal", 12, ["cricket", "traveling"]);
const Persons82 = new Persons("jetwani", 18, ["songs", "cycleing"]);
console.log("publicccc", Persons81);
console.log("publicccccc", Persons82.introduice());
