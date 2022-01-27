 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Nortox Yardım Menüsü`, client.user.avatarURL())
.setColor('#0b74de')
.setDescription(`<a:hypesquad1:756152750282375234> Nortox botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.\n\n ⚡️ **Kategoriler**`)
.addField(`__Ana Komutlar__`,`<a:hypesquad1:756152750282375234> \`${prefix}ana-komutlar\` `,true)
.addField(`__Mod Komutları__`,`<a:settings:756153015848796180> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:hypesquad1:756152750282375234> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:hypesquad1:756152750282375234> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:settings:756153015848796180> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hypesquad1:756152750282375234> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:756152750282375234> \`${prefix}davet\` | Nortox'u Sunucunuza Davet Edersiniz\n<a:hypesquad1:756152750282375234> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:756152750282375234> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://i.hizliresim.com/pQROxh.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}