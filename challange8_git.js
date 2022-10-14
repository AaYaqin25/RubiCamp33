function pola(str) {
    let switcher = "a";
    let switcher2 = "b";
    let angka = str.replace("#", switcher).split(" ");
    let newAngka = angka[4].replace("#", switcher2);
    let arr = newAngka;
    angka.pop();
    angka.push(arr);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let num = angka[0].replace(switcher, i);
            let nam = angka[4].replace(switcher2, j);
            if (angka[2] * num == nam) {
                return [i, j];
            }
        }

    }
}


console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));