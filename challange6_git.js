function sentencesManipulation(sentence) {
    let str = sentence.split(" ");
    let result = [];

    let i = 0;
    while (i < str.length) {
        let j = 0;
        if (str[i][j] === "a" || str[i][j] === "i" || str[i][j] === "u" || str[i][j] === "e" || str[i][j] === "o") {
            result.push(str[i]);
        } else {
            result.push(str[i].substring(1) + str[i][j] + "nyo")
        }
        i++;
    }
    // console.log(result.toString().replace(/,/g, " "));
    console.log(result.join(" "));
}

sentencesManipulation("ibu pergi ke pasar bersama aku");

