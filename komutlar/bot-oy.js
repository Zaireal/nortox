const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`Nortox Bağlantılar`, client.user.avatarURL())
.setDescription('**• Bota oy vererek, botun yaygınlaşmasına yardımcı olabilirsin.**\n** :ballot_box: [Bota Oy Ver](https://discord.com/oauth2/authorize?client_id=755362841535578173&scope=bot&permissions=8)**\n\n**• Destek sunucusundayken, sunucuya oy vererek Destekçi rolü alabilirsin.\n :ballot_box: [Destek Sunucusuna Oy Ver](https://top.gg/bot/713713727794446397)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'oy',
   aliases: ["oy"]
 };