const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR"))
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }


 const rol = db.fetch(`sayacS_${message.guild.id}`)  
 if(!rol) return message.channel.send(`<a:hypesquad1:756152750282375234> Sanırım \`Sayaç\` özelliği zaten kapalıymış. :slight_smile: `)
 
 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:aktif:755838164626833459> Sayaç başarılı bir şekilde kapatıldı. `)
                .setColor("BLACK")
            message.channel.send({embed})
        
          }

 
  db.delete(`sayacS_${message.guild.id}`)  
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacBB_${message.guild.id}`) 
  db.delete(`sayacHG_${message.guild.id}`)  
};
exports.config = {
  name: 'sayaç-kapat',
  aliases: ["sayaç-kapat"]
};
