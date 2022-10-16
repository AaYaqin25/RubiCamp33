function spiral(param1) {
    let startRow = 0;
    let startCol = 0;
    let rowEnd = param1 - 1;
    let colEnd = param1 - 1;
    let selisih = -1
    let arrPenampung = [];
    let result = [];

    for (let x = 0; x < param1; x++) {
        arrPenampung[x] = [];
        for (let y = 0; y < param1; y++) {
            arrPenampung[x][y] = selisih += 1; 
        }
    }

    while (startCol <= colEnd && startRow <= rowEnd) {

        for (let i = startCol; i <= colEnd; i++) {
            result.push(arrPenampung[startRow][i])
        }
        startRow++;

        for (let i = startRow; i <= rowEnd; i++) {
            result.push(arrPenampung[i][colEnd])
        }
        colEnd--;

        for (let i = colEnd; i >= startCol; i--) {
            result.push(arrPenampung[rowEnd][i])
        }
        rowEnd--;
        
        for (let i = rowEnd; i >= startRow; i--) {
            result.push(arrPenampung[i][startCol])
        }
        startCol++;
    }
    return console.log(result);
}

spiral(5);
spiral(6);
spiral(7);