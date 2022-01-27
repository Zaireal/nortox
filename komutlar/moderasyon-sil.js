 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix; 

   if (!message.member.hasPermission("MANAGE_MESSAGES")) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
  
if(isNaN(args[0])) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> Mesajları silebilmem için bir sayı belirtmelisin. \n**__Örnek Kullanım__** : \`${prefix}sil <temizlenecek mesaj sayısı>\` `)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }
  
if (args[0] < 1) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> \`1\` adetten az mesaj silemem!`)
                .setColor("BLACK")
            message.channel.send({embed})
return
          }



if (args[0] > 100) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> \`100\` adetten fazla mesaj silemem!`)
                .setColor("BLACK")
            message.channel.send({embed})
return
          }

  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Hiç mesaj silemedim. \`14\` günden önceki mesajları silemem!`)
                .setColor("BLACK")
            message.channel.send({embed})
return
          }

})


              var embed = new Discord.MessageEmbed()
                .setDescription(`<:aktif:755838164626833459> \`${args[0]}\` adet mesaj başarıyla silindi!`)
                .setColor("BLACK")
            message.channel.send({embed})
return
          }

exports.config = {
name: "temizle",
aliases: ["sil"]
};