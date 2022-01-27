const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args) => {
  let pingUye = message.mentions.users.first() || message.author;
  const pingDiscordTarih = new Date().getTime() - pingUye.createdAt.getTime();
  const pingSunucuTarih =
    new Date().getTime() -
    message.guild.members.cache.get(pingUye.id).joinedAt.getTime();
  const pingGün = moment
    .duration(pingDiscordTarih)
    .format("D [gün], hh [saat], mm [dakika], ss [saniyedir]");
  const pingGün2 = moment
    .duration(pingSunucuTarih)
    .format("D [gün], hh [saat], mm [dakika], ss [saniyedir]");
  {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:discord:755701492719288330> » \`${pingGün}\` **Discord'a kayıtlı.**\n<a:kanat:756082401796685835> » \`${pingGün2}\` **bu sunucuya üye.**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
};

exports.config = {
  name: 'günsayım',
  aliases: ["günsayım"]
 };