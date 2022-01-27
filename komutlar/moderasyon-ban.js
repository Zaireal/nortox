const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  const db = require('quick.db');
  
 if (!message.member.hasPermission("BAN_MEMBERS")) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Üyeleri Engelle\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }


  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  
  if (db.has(`banlog_${message.guild.id}`) === false) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Mod Log Kanalı Ayarlanmamış!**\n **__Örnek Kullanım__** : \`${prefix}modlog-ayarla #kanal\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

  let banmodlog = message.guild.channels.cache.get(db.fetch(`banlog_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Kullanıcıyı Etiketleyip Yasaklama Sebebini Belirtiniz!**\n**__Örnek Kullanım__** : \`${prefix}yasakla @Kullanıcı <Yasaklanma Sebebi>\``)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }



  if (reason.length < 1) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Kullanıcının Yasaklama Sebebini Belirtiniz!**\n**__Örnek Kullanım__** : \`${prefix}yasakla @Kullanıcı <Yasaklanma Sebebi>\``)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }

  if (user.id === message.author.id) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> Dostum Kendini BOT İle Sunucudan Yasaklayamazsın.`)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }

  var embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .addField('<a:settings:756153015848796180> İşlem', 'Sunucudan Yasaklama')
  .addField('<a:settings:756153015848796180> Yasaklanan Üye', `${user.tag} (${user.id})`)
  .addField('<a:settings:756153015848796180> Yasaklayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:settings:756153015848796180> Yasaklanma Sebebi', "```" + reason + "```")
  banmodlog.send(embed);
  user.send(`\`${message.guild.name}\` **Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
  
  message.guild.members.ban(user, 2);
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`<:aktif:755838164626833459> Kullanıcı Başarıyla Sunucudan Yasaklandı!`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'yasakla',
  aliases: ['ban','yasakla','banla']
};

