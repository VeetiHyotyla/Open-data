const input = document.getElementById('wordguess')
const sanalista = ["osamäärä", "lasku", "suure", "prosentti", "kertoluku", "neliö"]
let score = 0
let pisteytetty = []

function submit() {
    var veikkaus = input.value.toLowerCase()

    // pisteytys ja tarkistus onko sanaa jo pisteytetty

    if (pisteytetty.includes(veikkaus)) {
        alert("Olet jo vastannut sanan!")

    } else if (sanalista.includes(veikkaus)) {
        score++
        scoreUpdate()
        pisteytetty.push(veikkaus);

    // Huomautetaan, jos sana on väärin

    } else if (!sanalista.includes(veikkaus))
        alert("Sana ei ole sanaristikossa!")

    // sanaristikon toimivuus ja output ristikkoon
    if (veikkaus === sanalista[0]) {
        document.getElementById('v1').innerHTML = "o";
        document.getElementById('v2').innerHTML = "s";
        document.getElementById('v3').innerHTML = "a";
        document.getElementById('v4').innerHTML = "m";
        document.getElementById('v5').innerHTML = "ä";
        document.getElementById('v6').innerHTML = "ä";
        document.getElementById('v7').innerHTML = "r";
        document.getElementById('v8').innerHTML = "ä";
    } else if (veikkaus === sanalista[1]) {
        document.getElementById('a1').innerHTML = "l";
        document.getElementById('a2').innerHTML = "a";
        document.getElementById('a3').innerHTML = "s";
        document.getElementById('a4').innerHTML = "k";
        document.getElementById('a5').innerHTML = "u";
    } else if (veikkaus === sanalista[2]) {
        document.getElementById('a3').innerHTML = "s";
        document.getElementById('b2').innerHTML = "u";
        document.getElementById('b3').innerHTML = "u";
        document.getElementById('b4').innerHTML = "r";
        document.getElementById('b5').innerHTML = "e";
    } else if (veikkaus === sanalista[3]) {
        document.getElementById('c1').innerHTML = "p";
        document.getElementById('b4').innerHTML = "r";
        document.getElementById('c3').innerHTML = "o";
        document.getElementById('v2').innerHTML = "s";
        document.getElementById('c5').innerHTML = "e";
        document.getElementById('c6').innerHTML = "n";
        document.getElementById('c7').innerHTML = "t";
        document.getElementById('c8').innerHTML = "t";
        document.getElementById('c9').innerHTML = "i";
    } else if (veikkaus === sanalista[4]) {
        document.getElementById('d1').innerHTML = "k";
        document.getElementById('d2').innerHTML = "e";
        document.getElementById('d3').innerHTML = "r";
        document.getElementById('c7').innerHTML = "t";
        document.getElementById('d4').innerHTML = "o";
        document.getElementById('d5').innerHTML = "l";
        document.getElementById('d6').innerHTML = "u";
        document.getElementById('d7').innerHTML = "k";
        document.getElementById('d8').innerHTML = "u";
    } else if (veikkaus === sanalista[5]) {
        document.getElementById('e1').innerHTML = "n";
        document.getElementById('e2').innerHTML = "e";
        document.getElementById('e3').innerHTML = "l";
        document.getElementById('c9').innerHTML = "i";
        document.getElementById('e4').innerHTML = "ö";
    }
}

// pisteytyksen päivitys ja tarkistetaan onko peli voitettu

function scoreUpdate() {
    document.getElementById('tulos').innerHTML = score
    if (score == 6) {
        alert("Onneksi olkoon, sait sanaristikon tehtyä!")
    }
}