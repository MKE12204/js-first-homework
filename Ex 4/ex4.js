let a = parseFloat(prompt('Напишите число!'));
let b = 0;
let c = 1;
while(c <= a){
    b += c;
    c++;
}
document.write(`Сумма чисел от 1 до ${a} равна ${b}`)
