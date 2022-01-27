const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
    
  if (!message.member.hasPermission("BAN_MEMBERS")) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Üyeleri Engelle\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  

  let user = args[0];
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
 if (isNaN(user))
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Yasaklanmasını Kaldırmak İstediğiniz Kullanıcının ID'sini ve Sebebini Giriniz.**\n **__Örnek Kullanım__** : \`${prefix}yasak-aç <ID> <Sebep>\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }



  if (reason.length < 1) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Sebep Belirtiniz.**\n **__Örnek Kullanım__** : \`${prefix}yasak-aç <ID> <Sebep>\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
 
  
  var embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .addField('<a:settings:756153015848796180> İşlem', 'Yasaklama Kaldırma')
  .addField('<a:settings:756153015848796180> Yasaklaması Açılan Üye', `(${user})`)
  .addField('<a:settings:756153015848796180> Yasaklamayı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:settings:756153015848796180> Yasaklamayı Açma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.members.unban(user);
  

  
  const embed2 = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setDescription(`<:aktif:755838164626833459> Kullanıcının Yasaklaması Başarıyla Kaldırıldı.`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'unban',
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır']
};
