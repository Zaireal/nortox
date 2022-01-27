const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
  if (!message.member.hasPermission("ADMINISTRATOR"))
 {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

let banlogk = message.mentions.channels.first();
let banlogkanal = await db.fetch(`banlog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!banlogkanal) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> Modlog Kanalı Zaten Ayarlı Değil.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }


    db.delete(`log_${message.guild.id}`)
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> Modlog Kanalı Başarıyla Sıfırlandı.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  
    return
  }
  
if (!banlogk) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}modlog-ayarla #kanal \``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }


db.set(`banlog_${message.guild.id}`, banlogk.id)

{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:aktif:755838164626833459> Modlog Kanalı Başarıyla ${banlogk} olarak ayarlandı.\n Kapatmak için **__Örnek Kullanım__** : \`${prefix}modlog kapat\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

};

exports.config = {
    name: "ban-mod-log",
    aliases: []
}