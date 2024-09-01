 const height = parseFloat(prompt('Введите высоту! ')); 
for (let i = 1; i <= height; i++) {
    for (let j = height; j > i; j--) {
        document.write('&nbsp;&nbsp;');
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        document.write('*');
    }
    document.write('<br>');
}
for (let i = height; i >= 1; i--) {
    for (let j = height; j > i; j--) {
        document.write('&nbsp;&nbsp;');
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        document.write('*');
    }
    document.write('<br>');
}