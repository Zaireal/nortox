const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {

    let kullanıcı = await db.fetch(`ksistem_${message.guild.id}`);

  if( kullanıcı == undefined){
message.reply("**Kayıt komutları kapalı açmak için !kayıtsistemi aç**")
  }else{
      if( kullanıcı == "acik"){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let role = message.mentions.roles.first()

    if (!role) {
        return message.reply("Ayarlamak istediğin rolü etiketlemelisin!")
    }

  
    db.set(`krol_${message.guild.id}`, role.id)
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`» Kayıt olunca verilecek rol başarıyla **${role.name}** olarak ayarlandı! Rolü değiştirmek istersen tekrar etiketlemelisin.`)
    .setColor("BLACK")
    message.channel.send({embed})
      }
  }

}
exports.config = {
 name: "kayıt-rol-ayarla",
  aliases: ["kayıt-rol-ayarla"]
}
