const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "k."
var token = "procès.env.TOKEN"

client.login(token);

client.on("ready", () => {
  client.user.setActivity("Kanna The Best Loli", {
    type: "STREAMING",
    url: "https://www.twitch.tv/android"
  })
  console.log(" je suis Pr�t ! ")
});

