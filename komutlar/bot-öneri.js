
const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let mesaj = args.slice().join(' ')
if (!mesaj) 
{
              var embed = new Discord.MessageEmbed()
              .setColor("BLACK")
              .setTitle("• Nortox | Başarısız •")
              .setDescription("Öneriyi gönderebilmek için bir öneri belirtiniz.")
              .setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`)
            message.channel.send({embed})
            return
          }
message.delete()
client.channels.cache.get("756069174555574365").send(new Discord.MessageEmbed()
.setTimestamp()
      .setColor("BLACK")
      .setAuthor("Yeni Bir Öneri!", client.user.avatarURL())
      .addField("<a:hypesquad1:756152750282375234> • Öneren Kullanıcı:", message.author.tag, true)
      .addField("<a:hypesquad1:756152750282375234> • Öneren Kullanıcı ID:", message.author.id,true)
      .addField("<a:hypesquad1:756152750282375234> • Önerisi:", mesaj)
      .setThumbnail(message.author.avatarURL())
).then(a => {
              var embed = new Discord.MessageEmbed()
              .setColor("#22BF41")
              .setTitle("• Nortox | Başarılı •")
              .setDescription("Öneriniz alınmıştır! Teşekkür ederiz.")
              .setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`)
            message.channel.send({embed})
            return
          }
)
}
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 