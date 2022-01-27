const db = require('quick.db')
const Discord = require('discord.js')
 let ayarlar = ['aç','kapat']
exports.run = async (bot, message, args) => {
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


  if (!args[0]) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Küfür Engel Sistemi İçin Bir Seçenek Belirtiniz.** \n**__Örnek Kullanım__** : \`${prefix}küfür-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  if(!ayarlar.includes(args[0])) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> **Küfür Engel Sistemi İçin Geçerli Değişkenleri Kullanmalısın.** \n<a:hypesquad1:756152750282375234> **__Değişkenler__** : \`${ayarlar.join(' - ')}\`\n<a:hypesquad1:756152750282375234> **__Örnek Kullanım__** : \`${prefix}küfür-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
 
  if (args[0] == 'aç') {
    if(db.has(`küfürT_${message.guild.id}`)) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Küfür Engel Sistemi Zaten Açık!** \n**__Kapatmak İçin__** : \`${prefix}küfür-engel kapat\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

  
    db.set(`küfürT_${message.guild.id}`, 'acik')
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:aktif:755838164626833459> **Küfür Engel Sistemi Başarıyla Açıldı!**\n <a:hypesquad1:756152750282375234> **Artık Küfürleri Kontrol Edeceğim.**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
  if (args[0] == 'kapat') {
        if(!db.has(`küfürT_${message.guild.id}`)) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Küfür Engel Sistemi Zaten Kapalı!** \n**__Açmak İçin__** : \`${prefix}reklam-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
    db.delete(`küfürT_${message.guild.id}`)
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> **Küfür Engel Sistemi Başarıyla Kapatıldı!** \n<a:hypesquad1:756152750282375234> **Artık Küfürleri Kontrol Etmeyeceğim.**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
 
 
exports.config = {
 name: 'küfür-engel',
  aliases: ['reklam-engel']

};
