const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
   if (!message.member.hasPermission("BAN_MEMBERS")) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Üyeleri Engelle\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
 
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`<a:hypesquad1:750076071721828452> **Banlanan Kullanıcı bulunamadı**`)
       .setColor("#ffd100");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<a:hypesquad1:750076071721828452> Banlistesi | Sunucudan Banlananlar")
       .setColor("#ffd100");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.config = {
  name: 'banlananlar',
  aliases: ["banlılar","banliste", "bansay"]
};

