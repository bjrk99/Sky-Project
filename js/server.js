
document.getElementById("turnOff").addEventListener("click", turnOffServer);

document.getElementById("turnOn").addEventListener("click", turnOnServer);

function turnOffServer() {
    fetch('http://localhost:3000/serverStatus', {
        method: 'PUT',
            serverStatus: {
                online: false
            }
    })
}

function turnOnServer() {
    fetch('http://localhost:3000/serverStatus', {
        method: 'PUT',
       //  body: JSON.stringify({
            serverStatus: {
                online: true
            }
        // })
    })
}