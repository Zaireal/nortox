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
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Büyük Harf Engel Sistemi İçin Bir Seçenek Belirtiniz.** \n**__Örnek Kullanım__** : \`${prefix}büyükharf-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  if(!ayarlar.includes(args[0])) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> **Büyük Harf Engel Sistemi İçin Geçerli Değişkenleri Kullanmalısın.** \n<a:hypesquad1:756152750282375234> **__Değişkenler__** : \`${ayarlar.join(' - ')}\`\n<a:hypesquad1:756152750282375234> **__Örnek Kullanım__** : \`${prefix}büyükharf-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
 
  if (args[0] == 'aç') {
    if(db.has(`capslock_${message.guild.id}`)) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Büyük Harf Engel Sistemi Zaten Açık!** \n**__Kapatmak İçin__** : \`${prefix}büyükharf-engel kapat\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

  
    db.set(`capslock_${message.guild.id}`, 'acik')
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:aktif:755838164626833459> **Büyük Harf Engel Sistemi Başarıyla Açıldı!**\n <a:hypesquad1:756152750282375234> **Artık Büyük Harfleri Kontrol Edeceğim.**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
  if (args[0] == 'kapat') {
        if(!db.has(`capslock_${message.guild.id}`)) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Büyük Harf Engel Sistemi Zaten Kapalı!** \n**__Açmak İçin__** : \`${prefix}büyükharf-engel aç\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }
    db.delete(`capslock_${message.guild.id}`)
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> **Büyük Harf Engel Sistemi Başarıyla Kapatıldı!** \n<a:hypesquad1:756152750282375234> **Artık Büyük Harfleri Kontrol Etmeyeceğim.**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  }

	exports.config = {
   name: "capsengel",
   aliases: ['caps-engel','capsengel','büyükharf-engel']
}
  