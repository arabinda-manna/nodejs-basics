class Animal{
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
}

class Human extends Animal{
    constructor(age, name){
        super(age, name); //initializing parent class with the age and name
    }

    get legs(){
        return this.noOfLegs;
    }

    set legs(value){
        this.noOfLegs = value;
    }

    static getType(){
        return "Human";
    }
}

console.log(Human.getType()); //static method

let human = new Human(24, "Arabinda Manna"); //constructor calling and super calling if exists
human.legs = 2; //setter method
console.log(human.legs); //getter method

