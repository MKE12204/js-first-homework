const height = parseFloat(prompt('Введите высоту!'))
for (let a = 1; a <= height; a++) { 
    for (let b =height; b > a; b--) {
        document.write('&nbsp;'); 
    }
    document.write('*');
    if (a > 1) {
        for (let c = 1; c < (a - 1) * 2; c++) {
            document.write('&nbsp;');
        }
        document.write('*');
    }
    document.write('<br>');
}
for (let d = 0; d < height + 1  ; d++) {
    document.write('*');
}
document.write('<br>'); 