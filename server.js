const net = require("net");

const host = "127.0.0.1";
const port = 1234;

net.createServer((socket) => {
    console.log(`connected ${socket.remoteAddress} : ${socket.remotePort} `);

    socket.on("data", (data) => {
        console.log(`收到消息：${data}`);
        socket.write(`You said ${data}`);
    })
    socket.on("close", (data) => {
        console.log(`closed ${socket.remoteAddress} ${socket.remotePort}`);
    })

}).listen(port, host);

console.log(`Server listening on ${host} : ${port}`);