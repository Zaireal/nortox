const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
  const db = require('quick.db');

  var embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`${message.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? message.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : 'Bulunamadı'}`)
  return message.channel.send(embed)
};

exports.config = {
 name: "roller",
  aliases: ["roller"]
}