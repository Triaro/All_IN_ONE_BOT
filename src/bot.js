const Discord = require('discord.js');
const memes = require("../microservices/memes");
const crickets = require("../microservices/cricket_score");
const lucky_no = require("../microservices/lucky_no");
const helps = require("../microservices/help");
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
    switch(mess[0].toLowerCase()){
      case "meme":
        let meme1 = await memes();
        msg.channel.send(meme1);
        break;

        case "cricket":
        let cricket = await crickets();
        msg.channel.send(cricket);
        break;

        case "luckyno":        
        //console.log(msg.author.username);
        let lno = await lucky_no(msg.author.username.toLowerCase());
        msg.channel.send(lno);
        break;

        case "help":
          let help = await helps();
          msg.channel.send(help);
          break;
    }
  }
});

client.login(process.env.TOKEN);