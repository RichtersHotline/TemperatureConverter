function CelToFaren() {
let Celsius = +document.getElementById("Celc").value
let Faren = document.getElementById("Faren")

let Answer = Celsius * 1.8 + 32

Faren.innerHTML = Answer
console.log(Answer)
}

function 3 {
    let Farenh = +document.getElementById("Farenheit").value
    let Celcs = document.getElementById("Cels")
    
    let AnswerFaren = (Farenh - 32) * 5/9
    
    Celcs.innerHTML = AnswerFaren
    console.log(AnswerFaren)
    }