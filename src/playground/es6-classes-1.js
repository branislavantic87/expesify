
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi, i am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old!`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description +=  ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasHomeLocation()){
            description += ` And im coming from ${this.homeLocation}`
        }
        return description;
    }
}



const me = new Traveler('Bane Antic', 30, 'Cacak');
console.log(me.getDescription());

const other = new Traveler(undefined, 'Nowhere');
console.log(other.getDescription());