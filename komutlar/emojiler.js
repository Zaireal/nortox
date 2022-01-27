  
const Discord = require('discord.js');
exports.run = (client, message, args) => {  
 
  const emojiList =  message.guild.emojis.cache.map(e=>e.toString()).join(" **|** ");
  message.channel.send(emojiList);
};
exports.config = {
  name: 'emojiler',
  aliases: ["emojiler"]
 };