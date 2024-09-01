let a = parseFloat(prompt('Введите число!'));
if (isNaN(a)) {
    document.write('Неверные данные, введите число повторно!');
} else if (a % 2 === 0) {
    document.write('Число парное');
} else {
    document.write('Число непарное');
}
