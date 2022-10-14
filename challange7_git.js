function weirdMultiply(sentence) {
    let angka = sentence.toString();
    let num = 1

    for (let i = 0; i < angka.length; i++) {
        num = num * angka[i];
    }
    if (num.toString().length == 1) {
        return num;
    } else {
        return weirdMultiply(num);
    }
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));

