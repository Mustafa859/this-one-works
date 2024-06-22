let saveButton = document.getElementById("save-id")
let num = document.getElementById("clickthis")

let count = 0
function increment(){
    count = count + 1
    num.innerText = count
}
function save(){
    let saveE = num.innerText + "-"
    saveButton.textContent += saveE
    /* num.textContent = 0 */
    count = 0
} 