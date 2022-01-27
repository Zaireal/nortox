const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Üyeleri At\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Mod Log Kanalı Ayarlanmamış!**\n **__Örnek Kullanım__** : \`${prefix}modlog-ayarla #kanal\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Kullanıcıyı Etiketleyip Atılma Sebebini Belirtiniz!**\n**__Örnek Kullanım__** : \`${prefix}at @Kullanıcı <Atılma Sebebi>\``)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }

  if (reason.length < 1) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Kullanıcının Atılma Sebebini Belirtiniz!**\n**__Örnek Kullanım__** : \`${prefix}at @Kullanıcı <Atılma Sebebi>\``)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }


  if (user.id === message.author.id) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> Dostum Kendini BOT İle Sunucudan Atamazsın.\n Sunucudan Ayrılmak İstiyorsan, Sunucuya Sağ Tıklayıp \`Sunucudan Ayrıl\`'a Basabilirsin!`)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }


  var embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .addField('<a:settings:756153015848796180> İşlem', 'Sunucudan Atma')
  .addField('<a:settings:756153015848796180> Atılan Kullanıcı', `${user.tag} (${user.id})`)
  .addField('<a:settings:756153015848796180> Atan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:settings:756153015848796180> Atılma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`<:aktif:755838164626833459> Kullanıcı Başarıyla Sunucudan Atıldı!`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

