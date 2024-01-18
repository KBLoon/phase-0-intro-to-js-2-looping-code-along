// Code your solutions in this file

writeCards(["Charlie", "Samip", "Ali"], "birthday");
function writeCards(names, event) {
    let newArray = [];
    
    for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
}
    return newArray;
}

function countDown (){
    let countD = 10;
    while (countD > -1) {
        console.log (countD--)
    }
}