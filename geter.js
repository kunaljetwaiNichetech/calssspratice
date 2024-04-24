"use strict";
class Persons {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
        // one method 
        // if(this.age>150 || this.age<0){
        //     throw new Error ("not valid age")
        // }
    }
    // set and get method 
    // this is set method for seting the value
    set agemeth(age) {
        if (age > 150 || age < 0) {
            throw new Error("not valid age");
        }
        this.age = age;
    }
    // this is th get method which all to get the value 
    get agemeth() {
        if (this.age === undefined) {
            throw new Error("not defined");
        }
        return this.age;
    }
    //this called method in class we can normaly say the function
    introduice() {
        return `My name is ${this.name} and my age is ${this.age} ,i love ${this.hobbies.join(",")}.`;
    }
}
// this is instance of claass
const Persons81 = new Persons("kunal", ["cricket", "traveling"]);
Persons81.agemeth = 12;
console.log("publicccc", Persons81);
console.log(Persons81.agemeth);
////////////////////////pratice ////////
class BankAccount {
    constructor(name, AccountNO) {
        this.name = name;
        this.AccountNO = AccountNO;
        this._balance = 0;
    }
    get balance() {
        if (this.balance === undefined) {
            throw new Error("the balamce is not defined");
        }
        return this._balance;
    }
    set balance(balance) {
        if (balance < 0) {
            throw new Error("the balance is negetive ");
        }
        this._balance = balance;
    }
    cheackbalance() {
        return `My name is ${this.name} and account Number is ${this.AccountNO} and the balance is ${this._balance}`;
    }
}
const Details1Person = new BankAccount("kunal", 12345678910);
Details1Person.balance = 45000;
console.log(Details1Person.cheackbalance());
/// another pratice for converter for the temprature
class Temprature {
    constructor(feranite) {
        this.feranite = feranite;
        this._celcious = 0;
    }
    // set for the f to c
    set feraniteToCelcios(celcious) {
        if (celcious) {
            let con = (celcious * 9) / 5 + 32;
            this._celcious = con;
        }
        if (celcious === 0 || celcious < 0) {
            throw new Error("the value is 0");
        }
    }
    // set for c to f
    set celtoferanite(feranite) {
        if (feranite) {
            let con = ((feranite - 32) * 5) / 9;
            this.feranite = con;
        }
        if (feranite === 0 || feranite < 0) {
            throw new Error("the value is 0");
        }
    }
    // get gor f to c
    get feraniteToCelcios() {
        if (this._celcious === undefined) {
            throw new Error("its undefined");
        }
        return this._celcious;
    }
    get celtoferanite() {
        if (this.feranite === undefined) {
            throw new Error("its undefined");
        }
        return this.feranite;
    }
    convertedceltofer() {
        return `Celcious converted to fernite is  ${this._celcious}`;
    }
    convertedfertocer() {
        return `Feranite  converted to celios is  ${this.feranite}`;
    }
}
const celtofera = new Temprature(4);
celtofera.feraniteToCelcios = 2;
console.log(celtofera.convertedceltofer());
const feratocel = new Temprature(4);
feratocel.celtoferanite = 50;
console.log(feratocel.convertedfertocer());
