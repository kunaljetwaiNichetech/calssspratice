class Persons {
    name:string;
    age:number;
    hobbies:string[];

    // this is constructor for  creating multiple instacne 
    // this key word refer to this class object property only
    constructor(name:string,age:number,hobbies:string[]){
        this.name=name
        this.age=age
        this.hobbies=hobbies
    }

    //this called method in class we can normaly say the function 
    introduice():string{
        return `My name is ${this.name} and my age is ${this.age} ,i love ${this.hobbies.join(",")}.`
    }
}
// this is instance of claass 
const Persons1= new Persons ("kunal",12,["cricket","traveling"])
const Persons2= new Persons ("jetwani",18,["songs","cycleing"])
console.log(Persons1);
console.log(Persons2.introduice());

// this is one person it works fine this is instance of class 
// for multiple we have to use constructor so in instance we can pass value and dispay that 







