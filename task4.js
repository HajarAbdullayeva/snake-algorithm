
//Setirlerin sayi
let n = 5;
//Sutunlarin sayi
let m = 2;
//axtarilan setir (0 esasli deyil)
let x = 3;
//axtarilan sutun (0 esasli deyil)
let y = 1;

//Dovrlerde son qaldigimiz sutun indeksini yadda saxlayiriq
let j = 0;

//Qoyacagimiz reqemler
let value = 0

//Son netice
const arr = [];

//Setirler uzre dovre bashlayiriq
for(let i = 0; i < n; i++) {
    //Bu setrde olacaq reqemleri yadda saxlamaq uchun muveqqeti array. Dovrlerin birinde arxadan evvele gelirik deye sutun sayi uzunlugu veririk.
    const tempArr = Array(m)
    //Eger j - yeni sutun indeksi 0 disa demeli evvelden sona duzuruk
    if(j === 0) {
        for(j; j < m; j++) {
            tempArr[j] = value++
        }
    }
    //Eger j, 0 deyilse demeli bundan qabaqki dovrde, evvelden sona getmishik bu defe eksine gedirik.
    else {
        for(j = j - 1; j >= 0; j--) {
            tempArr[j] = value++
        }
        j = 0
    }
    //Hazirlagimiz muveqqeti array i, esas array a elave edirik. Her dovrde yeni array elave olundugu uchun netice olaraq 2D array olur
    arr.push(tempArr)
}

//Neticeni gormek uchun array i chapa veririk
console.log(arr);

//Esas netice, x ve y 0 esasli olmadigi uchun, duzgun koordinat goturmek uchun her birinden 1 vahid chixiriq
console.log(arr[x-1][y-1]);

