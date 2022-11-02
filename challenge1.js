function sum(a, b, c, d, e) {

    if (a > b && a > c && a > d && a > e) {
        return a + b + c + d + e;
    } else if (a < b && a < c) {
        return a + b + c;
    } else if (a < b) {
        return a + b
    } else {
        return a
    }



}

let jumlah = sum(1, 2, 7);
console.log(jumlah);

let jumlah2 = sum(1, 4);
console.log(jumlah2);

let jumlah3 = sum(11);
console.log(jumlah3);

let jumlah4 = sum(10, 3, 6, 7, 9);
console.log(jumlah4);



