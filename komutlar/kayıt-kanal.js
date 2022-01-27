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
  

  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply("Kanalı Etiketlemelisin Dostum.")
    }

  
    db.set(`kkanal_${message.guild.id}`, "<#"+channel.id+">")
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`Başarılı: ${channel}`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
  }
}
    exports.config = {
 name: "kayıt-kanal",
  aliases: ["kayıt-kanal"]
}
