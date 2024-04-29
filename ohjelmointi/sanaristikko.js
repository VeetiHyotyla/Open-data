const input = document.getElementById('wordguess')
const sanalista = ["osamäärä", "lasku", "suure", "prosentti", "kertoluku", "neliö"]
let score = 0
let pisteytetty = []


// Pisteytyksen tallennus
if (localStorage.getItem('score') !== null) {
    score = parseInt(localStorage.getItem('score'))
    document.getElementById('tulos').innerHTML = score
} 

// Sanojen tallennus ja niiden takaisin lataus
if (localStorage.getItem('pisteytetty') !== null) {
    pisteytetty = JSON.parse(localStorage.getItem('pisteytetty'))
    for (let i = 0; i < pisteytetty.length; i++) {
        main(pisteytetty[i])
    }
}


function submit() {

    var veikkaus = input.value.toLowerCase()

    // pisteytys ja tarkistus onko sanaa jo pisteytetty
    if (pisteytetty.includes(veikkaus)) {
        alert("Olet jo vastannut sanan!")

    } else if (sanalista.includes(veikkaus)) {
        score++
        scoreUpdate()
        pisteytetty.push(veikkaus);
        main(veikkaus)
        // Pisteiden ja sanojen tallennus
        localStorage.setItem('pisteytetty', JSON.stringify(pisteytetty))
        localStorage.setItem('score', score);

    // Huomautetaan, jos sana on väärin

    } else if (!sanalista.includes(veikkaus))
        alert("Sana ei ole sanaristikossa!")
    
    main()

}

// sanaristikon toimivuus ja output ristikkoon

function main(veikkaus) {
    // Haetaan sana listasta
    for (let i = 0; i < sanalista.length; i++) {
        var sana = sanalista[i]

        // Haetaan kirjain sanasta
        if (veikkaus === sana) {
            for (let j = 0; j < sana.length; j++) {
                var kirjain = sana[j]

                // tulostetaan sana ristikkoon
                if (i === 0) {
                    document.getElementById('v' + (j + 1)).innerHTML = kirjain
                }
                else if (i === 1) {
                    document.getElementById('a' + (j + 1)).innerHTML = kirjain
                }
                else if (i === 2) {
                    // otetaan huomioon 's' ruutu, joka on kahdessa sanassa
                    if (j === 0) {
                        document.getElementById('a3').innerHTML = kirjain
                    } else {
                        document.getElementById('b' + (j)).innerHTML = kirjain
                    }
                }
                else if (i === 3) {
                    if (kirjain === 'r') {
                        document.getElementById('b3').innerHTML = kirjain
                    } else if (kirjain === 's') {
                        document.getElementById('v2').innerHTML = kirjain
                    } else {
                        document.getElementById('c' + (j + 1)).innerHTML = kirjain
                    }

                }
                else if (i === 4) {
                    if (kirjain === 't') {
                        document.getElementById('c7').innerHTML = kirjain
                    } else {
                        document.getElementById('d' + (j + 1)).innerHTML = kirjain
                    }
                }
                else if (i === 5) {
                    if (kirjain === 'i') {
                        document.getElementById('c9').innerHTML = kirjain
                    } else {
                        document.getElementById('e' + (j + 1)).innerHTML = kirjain
                    }
                }  
            }
        }
    }
}

// pisteytyksen päivitys ja tarkistetaan onko peli voitettu

function scoreUpdate() {
    document.getElementById('tulos').innerHTML = score
    if (score == 6) {
        alert("Onneksi olkoon, sait sanaristikon tehtyä!")
    }
}

// Tallennuksen tyhjennys

function tyhjennys() {
    localStorage.clear()
    location.reload()
}