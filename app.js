let sadCats = ["cat1.png", "cat2.png", "cat3.jpeg", "cat4.jpeg", "cat5.gif", "cat6.gif"]
let ptr = 1
let accepted = false
let width = 90
let height = 50
let fontSize = 23

function decline() {
    if (accepted) {
        return
    }
    let image = document.getElementById('image')
    if (ptr < sadCats.length) {
        image.src = "img/" + sadCats[ptr]
        btn = document.getElementById('correct')
        btn.style.width = width + "px"
        btn.style.height = height + "px"
        btn.style.fontSize = fontSize + "px"
        width += 10
        height += 5
        fontSize += 3
        ptr++
    }
    if (ptr >= sadCats.length) {
        btn = document.getElementById('incorrect')
        btn.remove()
        sth = image.parentElement
        sth.innerHTML += '<h3 id="threat">😡 say yes!! you have no choice 😡</h3>'
    }
}

let happyCat = "img/cat7.jpeg"
function accept() {
    accepted = true
    let btns = document.getElementsByTagName('button')
    Array.from(btns).forEach(e => {
        e.remove()
    })
    let image = document.getElementById('image')
    image.src = happyCat
    sth = image.parentElement
    sth.innerHTML += "<h3>🥰 cool 🥰</h3>"
    threat = document.getElementById('threat')
    if (threat) {
        threat.remove()
    }
}