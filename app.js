const qrcode = require("qrcode-terminal");
const keep_alive = require("./keep_alive.js");

const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is readcy!");
});

client.on("message", (msg) => {
  if (msg.body == "!ping") {
    msg.reply("pong");
  }
});

client.initialize();
