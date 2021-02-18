
const turnOffServer = async () => {

    let uri = 'http://localhost:3000/serverStatus';

    try {
        await fetch(uri, {
            method: 'PUT',
            body: JSON.stringify({
                online: false
             }),
             headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            })

            document.querySelector("h1").innerText = "Server is Down";

    } catch (err) {
        console.log("JSON-SERVER IS NOT WATCHING DB.JSON FILE");
    }
}

const turnOnServer = async () => {

    let uri = 'http://localhost:3000/serverStatus';

    try {
        await fetch(uri, {
            method: 'PUT',
            body: JSON.stringify({
                online: true
             }),
             headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
    
        document.querySelector("h1").innerText = "Server is Up and Running";

    } catch (err) {
        console.log("JSON-SERVER IS NOT WATCHING DB.JSON FILE");
    }
}


document.getElementById("turnOff").addEventListener("click", turnOffServer);

document.getElementById("turnOn").addEventListener("click", turnOnServer);