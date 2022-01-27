  const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0b74de') 
.setAuthor(`Nortox Yetkili Komutları`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:756152750282375234> Nortox botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<a:hypesquad1:756152750282375234> \`${prefix}at\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:hypesquad1:756152750282375234> \`${prefix}yasakla\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:hypesquad1:756152750282375234> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`<a:hypesquad1:756152750282375234> \`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`<a:hypesquad1:756152750282375234> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:hypesquad1:756152750282375234> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:hypesquad1:756152750282375234> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:756152750282375234> \`${prefix}davet\` | Nortox'u Sunucunuza Davet Edersiniz\n<a:hypesquad1:756152750282375234> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:756152750282375234> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://i.hizliresim.com/pQROxh.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yetkili",
  aliases: []
}
