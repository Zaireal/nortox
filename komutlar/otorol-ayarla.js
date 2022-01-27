const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) 

{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

 if(!rol) 
 {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla #kanal @Rol\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Olmalı Yoksa Rolü Veremez!** `)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }

 
 if(!kanal) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }

 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Nortox Otorol▬▬▬▬▬▬▬▬▬
║► <a:hypesquad1:756152750282375234> Otorol Aktif Edildi.
║► <a:hypesquad1:756152750282375234> **${rol}** Olarak Güncelledim! 
║► <a:hypesquad1:756152750282375234> Oto Rol Kanalını **${kanal}** Olarak Güncelledim! 
║► <a:hypesquad1:756152750282375234> **Eğer Botun Rolü, Verilecek Rolün Altında Olursa BOT O Rolü Veremez!!**
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'otorol-ayarla',
  aliases: []
};
