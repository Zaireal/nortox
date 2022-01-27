const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
  const db = require('quick.db')
  let kullanıcı = await db.fetch(`ksistem_${msg.guild.id}`);

  if( kullanıcı == undefined){
msg.reply("**Kayıt komutları kapalı açmak için !kayıtsistemi aç**")
  }else{
      if( kullanıcı == "acik"){
    let kayıt = msg.author

         const kanal = db.fetch(`kkanal_${msg.guild.id}`).replace("<#", "").replace(">", "")

         const channelss = db.fetch(`kkanal_${msg.guild.id}`).replace("<#", "").replace(">", "")

  if (msg.channel.id !== kanal) return msg.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
    if (msg.channel.id == kanal) {
                              msg.guild.channels.cache.forEach(async (channel, id) => {
                await channel.overwritePermissions([{
                  id: msg.author,
                  allow: ['VIEW_CHANNEL']
                }]);
            });
                          
                 msg.guild.channels.cache.get(channelss).overwritePermissions([{
                   id: msg.author,
                   deny: ['VIEW_CHANNEL']
                 }]);
                   const rol = db.fetch(`krol_${msg.guild.id}`)
            msg.member.roles.add(rol)
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Tebrikler kayıt oldunuz, yönlendiriliyorsunuz bekleyin.")
        }
    
                     
    })
      }
  }
}
}

exports.config = {
 name: "kayıt-ol",
  aliases: ["kayıtol", "k", "kayit", "kaydol"]
}
