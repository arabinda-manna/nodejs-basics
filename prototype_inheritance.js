function Animal(age, name){
    this.age = age;
    this.name = name;
}

function Human(age, name, leg) {
   Animal.call(this, age, name);
   this.legs = leg;
}

Object.defineProperties(Human.prototype, {
    legs: {
        get: function () { return this.noOfLegs; }
        , set: function (val) { this.noOfLegs = val; }
    }
});

function Bird(age, name, wing) {
    Animal.call(this, age, name);
    this.wings = wing;
}

Object.defineProperties(Bird.prototype, {
    wings: {
        get: function () { return this.noOfWings; }
        , set: function (val) { this.noOfWings = val; }
    }
});

function Reptile(age, name, tail) {
    Animal.call(this, age, name);
    this.tails = tail;
}

Object.defineProperties(Reptile.prototype, {
    tails: {
        get: function () { return this.noOfTails; }
        , set: function (val) { this.noOfTails = val; }
    }
});

let array = [];
array.push(new Human(24, "Arabinda Manna", 2));
array.push(new Bird(1, "Parrot", 2));
array.push(new Human(28, "Abhisek Kundu", 2));
array.push(new Bird(10, "Eagle", 2));
array.push(new Reptile(20, "Python", 1));
array.push(new Bird(5, "Peacock", 2));
array.push(new Human(27, "Srijita Thakur", 2));
array.push(new Reptile(11, "Crocodile", 1));
array.push(new Human(34, "Rajashri Ghosh", 2));

for (const value of array) {
    if(value instanceof Human){
        console.log("Human Name : " + value.name + " & Age : " + value.age + " & No of Legs : " + value.legs);
    } else if (value instanceof Bird){
        console.log("Bird Name : " + value.name + " & Age : " + value.age + " & No of Wings : " + value.wings);
    } else if (value instanceof Reptile){
        console.log("Reptile Name : " + value.name + " & Age : " + value.age + " & No of Tails : " + value.tails);
    }
}
