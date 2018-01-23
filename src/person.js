console.log('Person.js trci!');


const isAdult = (num) => {
    return num >=18 ? 'Yes' : 'No'
}

const canDrink = (num) => {
    return num >=21 ? 'Yes' : 'No'
}

export default (num) => num>=65;

export { isAdult, canDrink}