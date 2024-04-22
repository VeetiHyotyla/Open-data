const input = document.getElementById('wordguess')


const sanalista = ["osamäärä", "lasku", "suure", "prosentti", "kerto", "neliö"]

function submit() {
    var veikkaus = wordsubmit.value

    if (veikkaus == sanalista[0]) {
        v1.innerHTML = "o";
        v2.innerHTML = "s";
        v3.innerHTML = "a";
        v4.innerHTML = "m";
        v5.innerHTML = "ä";
        v6.innerHTML = "ä";
        v7.innerHTML = "r";
        v8.innerHTML = "ä";
    }

    else if (veikkaus == sanalista[1]) {
        a1.innerHTML = "l";
        a2.innerHTML = "a";
        a3.innerHTML = "s";
        a4.innerHTML = "k";
        a5.innerHTML = "u";
    }
}