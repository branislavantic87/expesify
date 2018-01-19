const add = (a, b) => {
    // console.log(arguments)
    return a + b;
}

console.log(add(55, 1, 1000))

const user = {
    name: 'Bane',
    cities: ['Cacak', 'Drenova', 'Kraljevo'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [5, 10, 32, 16],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((num) => {
            return num * this.multiplyBy;
        });
    }
}

console.log(multiplier.multiply());