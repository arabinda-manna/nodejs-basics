function Animal(age, name){
    this.age = age;
    this.name = name;
}

function Human(age, name) {
   Animal.call(this, age, name);
}

Object.defineProperties(Human.prototype, {
    legs: {
        get: function () { return this.noOfLegs; }
        , set: function (val) { this.noOfLegs = val; }
    }
});

function Bird(age, name) {
    Animal.call(this, age, name);
}

Object.defineProperties(Bird.prototype, {
    wings: {
        get: function () { return this.noOfWings; }
        , set: function (val) { this.noOfWings = val; }
    }
});

function Reptile(age, name) {
    Animal.call(this, age, name);
}

Object.defineProperties(Reptile.prototype, {
    tails: {
        get: function () { return this.noOfTails; }
        , set: function (val) { this.noOfTails = val; }
    }
});

let human = new Human(24, "Arabinda Manna");
human.legs = 2;

let bird = new Bird(1, "Parrot");
bird.wings = 2;

let reptile = new Reptile(1, "Python");
reptile.tails = 1;


console.log(human);
console.log(bird);
console.log(reptile);
