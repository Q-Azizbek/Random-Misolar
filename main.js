function myRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}



alert('Keling random misola yechamiz');



let prCount = +prompt("Nechta misol yechmoqchisiz");
let minInit = +prompt("Minimal son kiriting");
let maxInit = +prompt("Maximal son kiriting");



for (let i = 0; i < prCount; i++) {

    let num1 = myRandom(minInit, maxInit)
    let num2 = myRandom(minInit, maxInit)


    let pr = +prompt(`${i}) Misol: ${num1} + ${num2} = Nechiga teng ?`);
    let pr1 = +prompt(`${i} Misol: ${num1} * ${num2} = Nechiga teng ?`);
    let pr2 = +prompt(`${i} Misol: ${num1} / ${num2} = Nechiga teng ?`);


    if (num1 / num2 == pr2) {
        console.log('Javobingiz tog`ri');
    }

    if (num1 * num2 == pr1) {
        console.log('Javobingiz tog`ri');
    }

    if (num1 + num2 == pr) {
        console.log('Javobingiz tog`ri');
        
    } else {
        console.log('Javobigiz notog`ri');
    }

    alert(`${i}) Misol: ${num1} + ${num2} = ${num1 + num2}, Sizning javobingiz: ${pr}`)
}