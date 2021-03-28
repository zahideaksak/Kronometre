var sayac = document.getElementById("sayac");

var saniye = 0;
var dakika = 0;
var saat = 0;
var durmaZamani = true;

function start() {
    if (durmaZamani == true) {
        durmaZamani = false;
        zamanDongusu();
    }

}
function stop() {
    //zaman = setTimeout(zamanDongusu, 1000);
    //  clearTimeout(zaman);
    durmaZamani = true;
}

function zamanDongusu() {
    if (durmaZamani == false) {
        saniye = parseInt(saniye);
        dakika = parseInt(dakika);
        saat = parseInt(saat);

        saniye = saniye + 1;

        if (saniye == 60) {
            dakika = dakika + 1;
            saniye = 0;
        }
        if (dakika == 60) {
            saat = saat + 1;
            dakika = 0;
            saniye = 0;
        }
        if (saniye < 10 || saniye == 0) {
            saniye = '0' + saniye;
        }
        if (dakika < 10 || dakika == 0) {
            dakika = '0' + dakika;
        }
        if (saat < 10 || saat == 0) {
            saat = '0' + saat;
        }
        
        sayac.innerHTML = saat + ":" + dakika + ":" + saniye;
        setTimeout(zamanDongusu, 1000);
    }
}
function finish() {
    sayac.innerHTML = '00:00:00';
    durmaZamani = true;
    saat = 0;
    dakika = 0;
    saniye = 0;
}
