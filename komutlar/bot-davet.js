const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`Nortox Bağlantılar`, client.user.avatarURL())
.setDescription('**• [Nortox`u Davet Et.](https://discord.com/oauth2/authorize?client_id=755362841535578173&scope=bot&permissions=8)** <a:can:755700681922576405>\n\n**• [Nortox`a Oy Ver](https://top.gg/bot/713713727794446397)** <a:kirmizi_kalp:756401097026830397>\n\n**• [Nortox`un Destek Sunucusu](https://discord.gg/4VpTXC2)** <a:discord:755701492719288330>')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","bağlantılar"]
 };