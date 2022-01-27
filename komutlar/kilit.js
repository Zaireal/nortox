const Discord = require('discord.js');
const db = require("quick.db");
const ms = require('ms');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix; 

  if (!message.member.hasPermission("ADMINISTRATOR")) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
if(isNaN(args[0])) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> Kanalı Kilitleyebilmem İçin Bir Süre Belirtmelisin. \n**__Örnek Kullanım__** : \`${prefix}kilit 1 min\`\n**__Hemen Kapatmak İçin__** : \`${prefix}kilit 0\` `)
                .setColor("BLACK")
            message.channel.send({embed})
        return
          }
if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kilit` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['kilitaç', 'unlock'];
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('**Kanal Kilidi Açıldı.**');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions([{
      id: message.guild.id,
      deny: ['SEND_MESSAGES']
    }]).then(() => {
      message.channel.send(`**Kanal Kilitlendi.** ${ms(ms(time), { long:true })}`).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions([{
            id: message.guild.id,
            allow: ['SEND_MESSAGES']
          }]).then(message.channel.send('**Kanalın Kilidi Açıldı.**')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => {
        console.log(error);
      });
    });
  }
};
 exports.config = {
      name: 'kilit',
   aliases: ["kilit"]
 };