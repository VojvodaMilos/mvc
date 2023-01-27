const sendBtn = document.querySelector("button")
const link = document.querySelector(".link")

let dataForSend = {
    name: "Milos",
    age: 35,
    mail: "vojvoda1988@gmail.com"
}


startUp()

sendBtn.addEventListener("click", sendData)

async function startUp() {
    let data = await APIservice.getData()
    console.log(data)
}

async function sendData() {
    let data = await APIservice.sendData(JSON.stringify(dataForSend));
    console.log(data)
}