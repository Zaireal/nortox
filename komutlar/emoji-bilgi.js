  const Discord = require('discord.js');
exports.run = (client, message, args) => {

    let emojiname = args[0];
    const emoji = (message.guild.emojis.cache.find(x => x.name === `${emojiname}`))
    if (!emojiname)
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457>  **Bu Komutu Kullanabilmek İçin Bir Emoji Adı Girmelisin.** `)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
    var embed = new Discord.MessageEmbed()
    .setAuthor('Nortox | Emoji Bilgi',client.user.avatarURL())
    .setColor("BLACK")
    .setThumbnail(`${emoji.url}`)
    .addField("Emojinin Adı", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Emoji Bağlantısı", `${emoji.url}`)
    .setFooter(" Nortox | Yeni Nesil Gelişmiş BOT",client.user.avatarURL())
    message.channel.send(embed)
}

exports.config = {
  name: 'emoji-bilgi',
  aliases: ["emoji-bilgi"]
 };