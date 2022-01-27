const Discord = require('discord.js');


exports.run = (client, message, params) => {
  
      if (!message.member.hasPermission("ADMINISTRATOR"))
 {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

      
            message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setTitle('Nortox - Sunucu Kur').setDescription('Gerekli Dosyalar Yüklensin Mi?').setFooter('Bu işlemi onaylamak için "evet" yazman yeterlidir. Bu işlem 30 saniye içinde sona erecek.'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
     message.member.send(':gear: **Sunucunuzdaki kanalların, kategorilerin ve rollerin hepsinin silinip, botun sunucu kurmasını onayladınız! Sunucunuz kuruluyor, bu işlem biraz zaman alabilir.**')
       message.guild.channels.cache.forEach(function(kan) {
       message.guild.roles.cache.forEach(function(rol) {
                 rol.delete()
                 kan.delete()
                 
       })}) 
  
  
            message.guild.channels.create(`「🔨」Önemli Kanallar`, { type: 'category'});
   message.guild.channels.create(`「📜」Kurallar`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🔨」Önemli Kanallar")))
   message.guild.channels.create(`「🔁」Giriş-Çıkış`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🔨」Önemli Kanallar")))
   message.guild.channels.create(`「🎉」Duyurular`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🔨」Önemli Kanallar")))
   message.guild.channels.create(`「🎥」Video-Odası`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🔨」Önemli Kanallar")))
             message.guild.channels.create(`「💬」Metin Kanalları`, { type: 'category'});
   message.guild.channels.create(`「💬」Sohbet`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「💬」Metin Kanalları")))
   message.guild.channels.create(`「📈」Komutlar`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「💬」Metin Kanalları")))
   message.guild.channels.create(`「☯」Rütbe-komut`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「💬」Metin Kanalları")))
   message.guild.channels.create(`「📷」Fotoğraf`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「💬」Metin Kanalları")))
   message.guild.channels.create(`「💎」Şikayet Odası`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「💬」Metin Kanalları")))
              message.guild.channels.create(`「🔉」Ses Kanalları`, { type: 'category'});
   message.guild.channels.create(`╠ ● Genel Sohbet ①`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🔉」Ses Kanalları")))
   message.guild.channels.create(`  ♫ Müzik Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🔉」Ses Kanalları")))
   message.guild.channels.create(`╠ ● Bekleme Odası`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🔉」Ses Kanalları")))
            message.guild.channels.create(`「🎮」Oyun Odaları`, { type: 'category'});
message.guild.channels.create(`🎮》LOL`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
 message.guild.channels.create(`🎮》ZULA`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
 message.guild.channels.create(`🎮》COUNTER STRİKE`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
 message.guild.channels.create(`🎮》PUBG`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
  message.guild.channels.create(`🎮》FORTNİTE`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
   message.guild.channels.create(`🎮》MİNECRAFT`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
    message.guild.channels.create(`🎮》ROBLOX`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
     message.guild.channels.create(`🎮》WOLFTEAM`, {type : "voice"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "「🎮」Oyun Odaları")))
 
  message.guild.roles.create({ data: { name: '👑 | Kurucu', color: '#46FE95', permissions: ['ADMINISTRATOR'] } });
  message.guild.roles.create({ data: { name: '🚨 | Yönetici', color: 'RED', permissions: ['MANAGE_GUILD', 'MANAGE_ROLES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MANAGE_MESSAGES', 'MANAGE_NICKNAMES', 'KICK_MEMBERS'] }})
  message.guild.roles.create({ data: { name: '🛡️ | Moderatör', color: '#f1c40f', permissions: ['MANAGE_MESSAGES', 'MANAGE_NICKNAMES', 'DEAFEN_MEMBERS', 'MUTE_MEMBERS', 'MANAGE_ROLES'] } });
  message.guild.roles.create({ data: { name: '📔 | Destek Ekibi', color: '#f1c40', permissions: [] } });
  message.guild.roles.create({ data: { name: '❤️ | Özel Kişi', color: '#ee77ff', permissions: [] } });
  message.guild.roles.create({ data: { name: '😊 | Sponsor', color: 'GREEN', permissions: [] } });
  message.guild.roles.create({ data: { name: '👥 | Üye', color: '#00fff5', permissions: [] } });
  message.guild.roles.create({ data: { name: '🤖 | Botlar', color: '#413FEE', permissions: [] } });

message.member.send('**Kanallar ve Roller kuruldu. İzinleri ve diğer gerekli düzenlemeleri yapmak size kaldı! ^^**')
          });
});
        
   
};

exports.config = {
name: "sunucu-kur",
aliases: ["sunucu-kur"]
};