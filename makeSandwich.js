let bread1 = prompt("which bread would you like to have :- ");
let veggies1 = prompt("what are your favorite veggies :- ");
let sauce = prompt("which sauce would you like to have :- ");

function makeSandwich(bread,veggies,sauce)
{
    let sandwich = bread + "bread" + veggies + " " + sauce + "sandwich";
}

let vegSandwich = makeSandwich(bread1,veggies1,sauce1);
console.log(vegSandwich);