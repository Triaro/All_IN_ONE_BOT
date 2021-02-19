const Discord = require('discord.js');
const memes = require("../microservices/memes");
const client = new Discord.Client();
require("dotenv").config();
client.on('ready', () => {
  console.log(`Ready`);
});

client.on('message', async(msg) => {
 
  if (msg.content.startsWith("^")) {
   let msg1 = (msg.content).substr(1);
   // console.log(msg1) 
    let mess= msg1.split(" ");
   // console.log(mess[0]) 
    switch(mess[0]){
      case "meme":
        let meme1 = await memes();
        msg.channel.send(meme1);
        break;
    }
  }
});

client.login(process.env.TOKEN);