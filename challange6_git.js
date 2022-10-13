function sentencesManipulation(sentence) {
    let str = sentence.replace("pergi", "ergipnyo");
    let strKata = str.replace("ke", "eknyo");
    let strKata2 = strKata.replace("pasar", "asarpnyo");
    let strKata3 = strKata2.replace("bersama", "ersamabnyo");


    console.log(strKata3);

}

sentencesManipulation("ibu pergi ke pasar bersama aku");
