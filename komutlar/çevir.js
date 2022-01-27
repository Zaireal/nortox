const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let store = args.slice(0).join('%20');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + store;
        if(!store)return message.channel.send("Lütfen çevirmek istediğin yazıyı yaz.")
        if(!link)return message.channel.send("Algılanamadı.")
        var embed = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setTimestamp()
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter("Çeviri");
          
    message.channel.send(embed);
  
}

 exports.config = {
      name: 'çeviri',
   aliases: ["çeviri"]
 };