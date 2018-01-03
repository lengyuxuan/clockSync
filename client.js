const net = require("net");

const host = "127.0.0.1";
const port = 1227;

const client = new net.Socket();
client.connect(port, host, () => {
    console.log(`connected to ${host}:${port}`);
    client.write("I am client!");
});

client.on("data", (data) => {
    console.log(`data: ${data}`);

    client.destroy();
});

client.on("close", () => {
    console.log("connection closed");
});