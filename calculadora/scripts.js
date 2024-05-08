let v = []
let r = []
let det, detx, dety, detz, x, y, z
let clas
const btn = document.getElementById("calcularBtn")


function setvetor() {
    document.getElementById("aa").innerHTML = document.getElementById("a").value
    document.getElementById("ab").innerHTML = document.getElementById("b").value
    document.getElementById("ac").innerHTML = document.getElementById("c").value
    document.getElementById("ba").innerHTML = document.getElementById("d").value
    document.getElementById("bb").innerHTML = document.getElementById("e").value
    document.getElementById("bc").innerHTML = document.getElementById("f").value
    document.getElementById("ca").innerHTML = document.getElementById("g").value
    document.getElementById("cb").innerHTML = document.getElementById("h").value
    document.getElementById("cc").innerHTML = document.getElementById("i").value
}


function calcdeterminante() {
    det = ((document.getElementById("a").value * document.getElementById("e").value * document.getElementById("i").value) + 
    (document.getElementById("b").value * document.getElementById("f").value * document.getElementById("g").value) + 
    (document.getElementById("c").value * document.getElementById("d").value * document.getElementById("h").value)) - 
    ((document.getElementById("c").value * document.getElementById("e").value * document.getElementById("g").value) + 
    (document.getElementById("b").value * document.getElementById("d").value * document.getElementById("i").value) +
    (document.getElementById("a").value * document.getElementById("f").value * document.getElementById("h").value)) 

    document.getElementById("detA").innerHTML = "detA = " + det
}

function calcdetx() {
    detx = ((document.getElementById("r1").value * document.getElementById("e").value * document.getElementById("i").value) + 
    (document.getElementById("b").value * document.getElementById("f").value * document.getElementById("r3").value) + 
    (document.getElementById("c").value * document.getElementById("r2").value * document.getElementById("h").value)) - 
    ((document.getElementById("c").value * document.getElementById("e").value * document.getElementById("r3").value) + 
    (document.getElementById("b").value * document.getElementById("r2").value * document.getElementById("i").value) +
    (document.getElementById("r1").value * document.getElementById("f").value * document.getElementById("h").value)) 

    document.getElementById("detX").innerHTML = "detX = " + detx
}

function calcdety() {
    dety = ((document.getElementById("a").value * document.getElementById("r2").value * document.getElementById("i").value) + 
    (document.getElementById("r1").value * document.getElementById("f").value * document.getElementById("g").value) + 
    (document.getElementById("c").value * document.getElementById("d").value * document.getElementById("r3").value)) - 
    ((document.getElementById("c").value * document.getElementById("r2").value * document.getElementById("g").value) + 
    (document.getElementById("r1").value * document.getElementById("d").value * document.getElementById("i").value) +
    (document.getElementById("a").value * document.getElementById("f").value * document.getElementById("r3").value)) 

    document.getElementById("detY").innerHTML = "detY = " + dety
}

function calcdetz() {
    detz = ((document.getElementById("a").value * document.getElementById("e").value * document.getElementById("r3").value) + 
    (document.getElementById("b").value * document.getElementById("r2").value * document.getElementById("g").value) + 
    (document.getElementById("r1").value * document.getElementById("d").value * document.getElementById("h").value)) - 
    ((document.getElementById("r1").value * document.getElementById("e").value * document.getElementById("g").value) + 
    (document.getElementById("b").value * document.getElementById("d").value * document.getElementById("r3").value) +
    (document.getElementById("a").value * document.getElementById("r2").value * document.getElementById("h").value)) 

    document.getElementById("detZ").innerHTML = "detZ = " + detz
}


function resposta() {
    x = detx/det
    y = dety/det
    z = detz/det

    document.getElementById("X").innerHTML = "X = " + x
    document.getElementById("Y").innerHTML = "Y = " + y
    document.getElementById("Z").innerHTML = "Z = " + z

    if (det != 0) {
        clas = "sistema possível determinado"
    } else if (detx == 0 && dety == 0 && detz == 0) {
        clas = "sistema possível indeterminado"
    } else {
        clas = "sistema impossível"
    }

    document.getElementById("tipo").innerHTML = clas
}



function setv() {
    v = [[document.getElementById("a").value, document.getElementById("b").value, document.getElementById("c").value], 
[document.getElementById("d").value, document.getElementById("e").value, document.getElementById("f").value],
[document.getElementById("g").value, document.getElementById("h").value, document.getElementById("i").value]]

r = [document.getElementById("r1").value, document.getElementById("r2").value, document.getElementById("r3").value]

setvetor()
calcdeterminante()
calcdetx()
calcdety()
calcdetz()
resposta()
}




btn.addEventListener("click", setv)



