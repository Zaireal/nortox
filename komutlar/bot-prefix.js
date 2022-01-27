const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`<a:hypesquad1:756152750282375234> **Bu Komutu Kullanabilmek İçin Mesajları Yönet Yetkisine Sahip Olmalısınız** | **Şu anki Prefix:** ${p}`));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord. MessageEmbed()
                                         .setColor("BLACK")
.setDescription(`**Ayarlanmış Şeyi Tekrar Ayarlıyamassın | Şu anki Prefix:** ${p} **Sıfırlamak İçin** ${p}**prefix sıfırla**`));
      }
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("BLACK")
.setDescription(`<a:hypesquad1:756152750282375234>  **Bir Prefix Girip Tekrar Dene |  Şu anki Prefix:** ${p}`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed()
                          .setColor("BLACK")
.setDescription(`<a:hypesquad1:756152750282375234>  **Prefix Başarıyla Ayarlandı | Şu anki Prefix:** ${args[1]}`));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("BLACK")
.setDescription(`<a:hypesquad1:756152750282375234> **Ayarlanmayan Prefixi Sıfırlayamazsınız | Şu anki Prefix:** ${p}`));
    }
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
                                    .setColor("BLACK")
.setDescription(`<a:hypesquad1:756152750282375234> **Prefix Başarıyla Sıfırlandı | Şu anki Prefix:** ${a}`));
  }
 
 if(!args[0]) return message.channel.send(new Discord.MessageEmbed()     
                  .setColor("BLACK")                             
.setDescription(`<a:hypesquad1:756152750282375234> **Prefix Ayarlamak İçin** ${p}**prefix ayarla <prefix>**\n <a:hypesquad1:756152750282375234> **Sıfırlamak İçin** ${p}**prefix sıfırla | Şu anki Prefix:** \`${p}\``));
  
};
exports.config = {
name: "prefix",
aliases: ['p']
};