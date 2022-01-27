const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:756152750282375234> **Bu komutu kullanabilmek için** \`Yönetici\` **yetkisine sahip olmalısın.**`);
 
 if(!kanal)
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Lütfen Bir Kanal ve Sayı Belirt!** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  
 if(isNaN(args[1])) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
 
 if(message.guild.memberCount > args[1]) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Nortox Sayaç▬▬▬▬▬▬▬▬▬
║► <a:hypesquad1:756152750282375234> Sayaç Aktif Edildi.
║► <a:hypesquad1:756152750282375234> **${args[1]}** Olarak Güncelledim! 
║► <a:hypesquad1:756152750282375234> Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
║► <a:hypesquad1:756152750282375234> ${args[1]} Kişi Olmaya Son :fire: **${kalan}** :fire: Kişi Kaldı!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
};

exports.config = {
  name: 'sayaç-ayarla',
  aliases: ["sayaçayarla"]
};

