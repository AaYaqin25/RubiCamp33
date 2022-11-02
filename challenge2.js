function deretKaskus(n) {
    let angka = [];
    let result = [];


    for (let i = 1; i <= n; i++) {
        angka.push(i * 3);
    }
    for (let j = 0; j < n; j++) {
        if (angka[j] % 5 === 0 && angka[j] % 6 === 0) {
            result.push("KASKUS");
        } else if (angka[j] % 5 === 0) {
            result.push("KAS");
        } else if (angka[j] % 6 === 0) {
            result.push("KUS");
        } else {
            result.push(angka[j]);
        }
    }
    return result;
}

console.log(deretKaskus(30));