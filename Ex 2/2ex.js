let a = parseFloat(prompt('Введите возраст!'));
if(isNaN(a) || a <= 0){
    document.write('Неверные данные!')
}
else if(a <= 12){
    document.write("Дитина");
}else if(a > 12 && a < 19){
    document.write("Підліток");
}else if(a > 18 && a < 61){
    document.write("Дорослий");
}else {
    document.write("Пенсіонер");
}
