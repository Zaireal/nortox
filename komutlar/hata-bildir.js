
const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let mesaj = args.slice().join(' ')
if (!mesaj) 
{
              var embed = new Discord.MessageEmbed()
              .setColor("BLACK")
              .setTitle("• Nortox | Başarısız •")
              .setDescription("Hata bildirimi gönderebilmek için bir hata belirtiniz.")
              .setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`)
            message.channel.send({embed})
            return
          }
message.delete()
client.channels.cache.get("756924983468621884").send(new Discord.MessageEmbed()
.setTimestamp()
      .setColor("BLACK")
      .setAuthor("Yeni Bir Hata Bildirimi!", client.user.avatarURL())
      .addField("<a:hypesquad1:756152750282375234> • Bildiren Kullanıcı:", message.author.tag, true)
      .addField("<a:hypesquad1:756152750282375234> • Bildiren Kullanıcı ID:", message.author.id,true)
      .addField("<a:hypesquad1:756152750282375234> • Bildirisi:", mesaj)
      .setThumbnail(message.author.avatarURL())
).then(a => {
              var embed = new Discord.MessageEmbed()
              .setColor("#22BF41")
              .setTitle("• Nortox | Başarılı •")
              .setDescription("Hata bildiriminiz alınmıştır! Teşekkür ederiz.")
              .setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`)
            message.channel.send({embed})
            return
          }
)
}

exports.config = {
  name: "hata-bildir",
  aliases: ["hata"],
};