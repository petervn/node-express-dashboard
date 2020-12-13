const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector("#log-window");

connection.onmessage =  (event) => {
    logWindow.innerHTML = event.data;
}

connection.onopen =  () => {
    connection.send("Hello from the client!");
}
