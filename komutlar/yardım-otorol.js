const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0b74de') 
.setAuthor(`Nortox Oto Rol Komutları`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:756152750282375234> Nortox botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Rol Ayarla__`,`<a:settings:756153015848796180> \`${prefix}otorol-ayarla\` Sunucunuzda Oto Rol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`<a:settings:756153015848796180> \`${prefix}otorol-kapat\` Sunucunuzdaki Oto Rol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`<a:settings:756153015848796180> \`${prefix}otorol-mesaj\` Sunucunuzdaki Oto Rol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla__`,`<a:settings:756153015848796180> \`${prefix}otorol-mesaj-sıfırla\` Sunucunuzdaki Oto Rol'ün Mesajını Sıfırlar.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:756152750282375234> \`${prefix}davet\` | Nortox'u Sunucunuza Davet Edersiniz\n<a:hypesquad1:756152750282375234> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:756152750282375234> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/pQROxh.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otorol",
  aliases: []
}
