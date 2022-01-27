const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
exports.run = async function(client, message, args) {
  let lastDaily = await db.fetch(`gunluk_${message.guild.id}`)
      let cooldown = 8.64e7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;
      if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

if (!message.member.hasPermission("MANAGE_GUILD"))
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Sunucuyu tanıtabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

        var embed = new Discord.MessageEmbed()
          .setDescription("<:pasif:755838175540412457> **Bu Komutu Sadece 24 Saatte Bir Kullanabilirsin.**")
          .setColor(0x00ffff);
        message.channel.send({ embed });
      } else {
        var embed = new Discord.MessageEmbed()
          .setTitle(
            "Başarılı! <:aktif:755838164626833459>"
          )
          .setDescription(
            "**Sunucunuz Başarıyla** [Destek Sunucumda](https://discord.gg/4VpTXC2) **Tanıtıldı.**\n**24 Saat Sonra Tekrar Sunucunuzu Tanıtabilirsiniz**"
          )
          .setColor("GREEN");
        message.channel.send(embed);
        message.channel.createInvite({ maxAge: 0 }).then(invite => {
          var embed = new Discord.MessageEmbed()
            .addField("Tanıtan Yetkili", message.author.tag, true)
            .addField("Sunucu İsmi", message.guild.name, true)
            .addField("Sunucudaki Üye Sayısı", message.guild.members.cache.size, true)
            .addField("Sunucu Davet Linki", invite.url, true)
            .setColor("BLACK")
            .setThumbnail(message.guild.iconURL);
          client.channels.cache.get("758238246789709855").send(embed);

          db.set(`gunluk_${message.guild.id}`, Date.now());
        });

      
    }
  };
exports.config = {
name: "sunucu-tanıt",
  aliases: []
}
