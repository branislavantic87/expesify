var nameVar = 'Bane';
var nameVar = 'mike'
console.log('nameVar', nameVar)


let nameLet = 'jeni';
nameLet = 'Kobas'
console.log('nameLet', nameLet);


const nameConst = 'Marko';
console.log('nameConst', nameConst)


// Block scoping

var fullName = 'Branislav Antic';
let firstName;
if(fullName){
     firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName);