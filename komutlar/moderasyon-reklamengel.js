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
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Reklam Engel Sistemi İçin Bir Seçenek Belirtiniz.** \n**__Örnek Kullanım__** : \`${prefix}reklam-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  if(!ayarlar.includes(args[0])) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> **Reklam Engel Sistemi İçin Geçerli Değişkenleri Kullanmalısın.** \n<a:hypesquad1:756152750282375234> **__Değişkenler__** : \`${ayarlar.join(' - ')}\`\n<a:hypesquad1:756152750282375234> **__Örnek Kullanım__** : \`${prefix}reklam-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
 
  if (args[0] == 'aç') {
    if(db.has(`reklam_${message.guild.id}`)) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Reklam Engel Sistemi Zaten Açık!** \n**__Kapatmak İçin__** : \`${prefix}reklam-engel kapat\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

  
    db.set(`reklam_${message.guild.id}`, 'acik')
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:aktif:755838164626833459> **Reklam Engel Sistemi Başarıyla Açıldı!**\n <a:hypesquad1:756152750282375234> \`Üyeleri Yasakla\` **Yetkisine Sahip Olanların Reklamları Engellenmeyecektir.**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
  if (args[0] == 'kapat') {
        if(!db.has(`reklam_${message.guild.id}`)) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Reklam Engel Sistemi Zaten Kapalı!** \n**__Açmak İçin__** : \`${prefix}reklam-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
    db.delete(`reklam_${message.guild.id}`)
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> **Reklam Engel Sistemi Başarıyla Kapatıldı!** \n<a:hypesquad1:756152750282375234> **Artık herkes reklam yapabilir!**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
 
 
exports.config = {
 name: 'reklamengelle',
  aliases: ['reklam-engel']

};
