let p = parseInt(prompt("Введіть n:"));
let count = [2,3];

if (isNaN(p) || p < 1) { 
    console.log("Будь ласка, введіть число більше або дорівнює 1");
} else {
    for (let i = 2; i <= p; i++) {
        count[i] = count[i - 1] + count[i - 2];
    }
    console.log("Результат:", count[p]);
}
