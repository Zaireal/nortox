const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const fynx = require("./ayarlar/bot.json"); 
const { Player } = require("discord-player"); 
const db = require('quick.db');

const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";


//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const embed = new Discord.MessageEmbed()
.setThumbnail()
.addField(`Nortox | Teşekkür Mesajı`, `**Selamlar, Ben AffedilmemTR (Nortox'un Geliştiricisi) Öncelikle Botumuzu Eklediğiniz ve Bize Destek Olduğunuz İçin Sizlere Teşekkürlerimi Sunarım**`)
.addField(`Nortox | Prefix`, `**Nortox Botun Prefixi(ön eki) = \`${fynx.prefix}\`\n\n Değiştirebilmek için \`${fynx.prefix}prefix\` Yazabilirsiniz.**`)
.addField(`Nortox | Nasıl Kullanılır?`, `**Nortox botun tüm özelliklerinden yararlanabilmek için sadece \`${fynx.prefix}yardım\` yazmanız yeterlidir.**`)
.addField(`Nortox | Bağlantılar`, `**Sohbet Kanalına -davet Yazmanız Yeterlidir**`)
.setFooter(`Nortox | Gelişmiş Türkçe Bot | 2020`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(embed)

});

//----------------------------------------------------------------\\


const player = new Player(client, fynx.youtube_api);
client.player = player;

//----------------------------------------------\\

client.on("message", async message => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
const messageArray = message.content.split(" ");
const cmd = messageArray[0].toLowerCase();
const args = messageArray.slice(1);
if (!message.content.startsWith(prefix)) return;
const commandfile =
client.commands.get(cmd.slice(prefix.length)) ||
client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
if (commandfile) commandfile.run(client, message, args);
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



fs.readdir("./komutlar/", (err, files) => {
const jsfiles = files.filter(f => f.split(".").pop() === "js");
if (jsfiles.length <= 0) {
return console.log("Herhangi bir komut bulunamadı!");
}
jsfiles.forEach(file => {
console.log(`Yüklenen Komut: ${file}`);
const command = require(`./komutlar/${file}`);
client.commands.set(command.config.name, command);
command.config.aliases.forEach(alias => {
client.aliases.set(alias, command.config.name);
});
});
});

//-------------Kendini Sağirlaştirma Komutu ---------------\\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\\


client.login(fynx.fynxtoken)
.then(function() {
console.log('Token doğru. Bot aktif ediliyor.')
}, function(err) {
console.log("Tokeniniz yanlış. Bot başlatılamıyor.")
setInterval(function() {
process.exit(0)
}, 20000);
})

//------------------Değişen Oynuyor---------------------------\\

const bot = new Discord.Client();

var oyun = [
`✨ Yardım almak için | n!yardım`,
`🚀 Yeni Özellikler İçin | n!yardım`,
`🔔 Yenilenen Tasarımı İle`,
`⚡️ Botu eklemek için | n!davet`,
`🌟 Prefix ayarlamak için | n!prefix`
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "WATCHING"});

        }, 2 * 5000);
});


//-----------------Etiket Prefix-----------------\\



client.on('message', async msg => {
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || fynx.prefix 
  if(msg.content == `<@!755362841535578173>`) return msg.channel.send(`> **Nortox | Prefix**\n\n> <a:hypesquad1:756152750282375234> **Sanırım beni etiketledin.** :slight_smile: \n > <a:hypesquad1:756152750282375234> Buyur prefix'im : \`${prefix}\``);
});



//---------------------------------------------------\\
client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    let songelen =  member.guild.channels.find(x =>(x.name).startsWith("Son Üye • "))
   
   
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
      songelen.setName(`Son Üye • ${member.user.username}`)
   } catch(e) { }
  }
})
client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Rekor Aktiflik •"))
   
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   
   } catch(e) { }
  }
})
//////////////////////////////////////////REKLAMKİCK
client.on("message", async message => {
      let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
      let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
      let kullanici = message.member;
      if (reklamkick == 'kapali') return;
      if (reklamkick == 'acik') {
          const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
          if (reklam.some(word => message.content.toLowerCase().includes(word))) {
              if (!message.member.hasPermission("ADMINISTRATOR")) {
                  message.delete();
                  db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                  if (uyarisayisi === null) {
                      let uyari = new Discord.RichEmbed()
                          .setColor("#ffd100")
                          .setFooter('Nortox BOT', client.user.avatarURL)
                          .setDescription(`<a:hypesquad1:750076071721828452> **<@${message.author.id}> Reklam Kick Sistemine Yakalandın! Reklam Yapmaya Devam Edersen Kickleniceksin (1/3)**`)
                          .setTimestamp()
                      message.channel.send(uyari)                
  }
                  if (uyarisayisi === 1) {
                      let uyari = new Discord.RichEmbed()
                          .setColor("#ffd100")
                          .setFooter('Nortox BOT ', client.user.avatarURL)
                          .setDescription(`<a:hypesquad1:750076071721828452> **<@${message.author.id}> Reklam Kick Sistemine Yakalandın! Reklam Yapmaya Devam Edersen Kickleniceksin (2/3)**`)
                          .setTimestamp()
                      message.channel.send(uyari)
                  }
                  if (uyarisayisi === 2) {
                      message.delete();
                      await kullanici.kick({
                          reason: `Reklam Reklam Kick Sistemi`,
                      })
                      let uyari = new Discord.RichEmbed()
                          .setColor("#ffd100")
                          .setFooter('Nortox BOT', client.user.avatarURL)
                          .setDescription(`<a:hypesquad1:750076071721828452> **<@${message.author.id}> 3 Adet Reklam Uyarısı Aldığı İçin Kicklendi. Bir Kez Daha Yaparsa Banlanacak**`)
                          .setTimestamp()
                      message.channel.send(uyari)
                  }
                  if (uyarisayisi === 3) {
                      message.delete();
                      await kullanici.ban({
                          reason: `Nortox Reklam Kick Sistemi`,
                      })
                      db.delete(`reklamuyari_${message.author.id}`)
                      let uyari = new Discord.RichEmbed()
                          .setColor("#ffd100")
                          .setFooter('Nortox BOT', client.user.avatarURL)
                          .setDescription(`<a:hypesquad1:750076071721828452> **<@${message.author.id}> Kick Yedikten Sonra Tekrar Devam Ettiği İçin Banlandı.**`)
                          .setTimestamp()
                      message.channel.send(uyari)
                  }

              }
          }
      }
  });

 
               


///////////////////////reklamkick

// MOD LOG

client.on('messageDelete', async message   => { // mod-log
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setTitle("MESAJ SİLİNDİ")
.setDescription(`<a:hypesquad1:756152750282375234> <@!${message.author.id}> **adlı kullanıcı tarafından** <#${message.channel.id}> **kanalına gönderilen mesaj silindi!** \n\nSilinen Mesaj: \`${message.content}\``)
  .setFooter("Nortox Bot | Log Sistemi")
  modlogkanal.send(embed);
  })

client.on('guildBanAdd', async message  => {
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")

    .setDescription(`<a:hypesquad1:756152750282375234> **Üye Sunucudan Yasaklandı!** \n<@!${message.user.id}>, ${message.user.tag}`)
        .setThumbnail(message.user.avatarURL)
  .setFooter("Nortox Bot | Log Sistemi")
  modlogkanal.send(embed);
  })

client.on('channelCreate', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('#ffd100')
                .setTitle("METİN KANALI OLUŞTURULDU")
                .setDescription(`<a:hypesquad1:756152750282375234> \`${channel.name}\` **Adlı Metin Kanalı Oluşturuldu!**`)
                .setFooter(`Nortox Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI OLUŞTURULDU")
                .setDescription(`<a:hypesquad1:756152750282375234> \`${channel.name}\` **Adlı Ses Kanalı Oluşturuldu!**`)
                .setFooter(`Nortox Bot | Log Sistemi Kanal ID: ${channel.id}`)

                modlogkanal.send({embed});
            }
        
    })
client.on('channelDelete', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
.setTitle("METİN KANALI SİLİNDİ")
                    .setColor('#ffd100')
                .setDescription(`<a:hypesquad1:756152750282375234> \`${channel.name}\` **Adlın Metin Kanalı  Silindi**`)
                .setFooter(`Nortox Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI SİLİNDİ")
                .setDescription(`<a:hypesquad1:756152750282375234> \`${channel.name}\` **Adlı Ses Kanalı Silindi**`)
            .setFooter(`Nortox Bot | Log Sistemi  Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            }
    })
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.cache.get(db.fetch(`log_${oldMsg.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  const embed = new Discord.MessageEmbed()
  .setTitle("MESAJ DÜZENLENDİ")
.setColor("#ffd100")
  .addField("Kullanıcı", oldMsg.author.tag, true)
  .addField("Eski Mesaj",`  \`${oldMsg.content}\`  `)
  .addField("Yeni Mesaj", `\`${newMsg.content}\``)
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);  
        
    })

//////////////////KÜFÜR ENGEL

client.on("message", async msg => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;

        const lus = await db.fetch(`küfürT_${msg.guild.id}`)
  let i = await db.fetch(`küfürT_${msg.guild.id}`) 
        if (i == 'acik') {
            const kelime = ["amk", "aq", "p!ç", "pç", "piç", "velet", "göt", "amcık", "sikiyim", "sik", "vld", "amına", "pipi", "annesiz", "amık", "sg", "a-q", "a--q", "a.q", "a+q", "anan", "orusbu", "pezevenk","oropu","oç","amq"];
            if (kelime.some(word => msg.content.toLowerCase().includes(word))) {
              try {
                if (!msg.member.hasPermission("MANAGE_GUILD")) {
                  msg.delete();                   
                  let embed = new Discord.MessageEmbed()
                  .setColor("BLACK")
                  .setFooter('Nortox  -|-  Küfür Engellendi.', client.user.avatarURL)
                  .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                  .setDescription("BOT Küfür Engelleme Sistemi | " + `**${msg.guild.name}**` + " adlı sunucunuzda Küfür yakaladım.")
                  .addField('Küfür Kullanan Kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                  .addField('Engellenen mesaj', msg.content, true)
                  .setTimestamp()                   
                  msg.guild.owner.user.send(embed)                       
                  return msg.channel.send(`\`${msg.author.tag}! | Ettiğin küfür yetkililere iletildi! Bence devam etmemelisin. :)\``).then(msg => msg.delete(1000));
                }             
              } catch(err) {
                console.log(err);
              }
            }
        }
        if (!i) return;
});

//////////////////REKLAM ENGEL

client.on("message", async message => {
  
  const lus = await db.fetch(`reklamengel_${message.guild.id}`)
 let i = await db.fetch(`reklam_${message.guild.id}`) 
        if (i == 'acik') {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glitch.me/", ".rf.gd", ".biz", "www.", "www", ".gg", ".tk", ".tr.ht", ".ml", ".ga", ".cf", ".cq",".xyz"];
    if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
          message.delete();
       
   {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Gerçekten Bu Sunucuda Reklam Yapabileceğini Mi Zannediyorsun** ${message.author}?`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async (newMessage, oldMessage) => {
  
  const lus = await db.fetch(`reklamengel_${newMessage.guild.id}`)

  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glitch.me/", ".rf.gd", ".biz", "www.", "www", ".gg", ".tk", ".tr.ht", ".ml", ".ga", ".cf", ".cq",".xyz"];
    if (reklamengel.some(word => newMessage.content.toLowerCase().includes(word))) {
      try {
        if (!newMessage.member.permissions.has('BAN_MEMBERS')) {
         newMessage.delete();

{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234> **Gerçekten Bu Sunucuda Reklam Yapabileceğini Mi Zannediyorsun** ${newMessage.author}?`)
                .setColor("BLACK")
            newMessage.channel.send({embed})
            return
          }

        
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
//caps
    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 {
              var embed = new Discord.MessageEmbed()
                .setDescription(`✋ ${msg.author} Bu sunucuda, büyük harf kilidini kullanarak yazı yazılması **Nortox** tarafından engellenmektedir!`)
                .setColor("BLACK")
            msg.channel.send({embed}).then(a=>a.delete({timeout:10000}))
            return }
     }
       }
     }
   }
  }
}); 
// SA-AS SİSTEMİ

client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 's.a.' || msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'slm') {
          try {

                  return msg.reply('**<a:hypesquad1:750076071721828452> Aleyküm Selam, Hoşgeldin.** ')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });

// SAYAÇ SİSTEMİ

client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
    const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`)
    ///....

  ///....
  if (!mesaj) {
    return client.channels.cache.get(kanal).send(":loudspeaker: :inbox_tray: Kullanıcı Katıldı! `" + sayaç + "` Kişi Olmamıza `" + sonuç + "` Kişi Kaldı `" + member.guild.memberCount + "` Kişiyiz! <:aktif:755838164626833459>\nHoş geldin `"+ member.user.username + "`!");
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels.get(kanal).send(`<a:hypesquad1:756152750282375234> **Sayaç Sıfırlandı!** \`${member.guild.memberCount}\` **Kişiyiz!**`)
    await db.delete(`sayacK_${member.guild.id}`)
    await db.delete(`sayacS_${member.guild.id}`)
    await db.delete(`sayacHG_${member.guild.id}`)
    await db.delete(`sayacBB_${member.guild.id}`)
  }
  if (mesaj) {
    const mesaj31 = mesaj.replace("-uyetag-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.cache.get(kanal).send(mesaj31);
    
  }
});

client.on("guildMemberRemove", async member => {

  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`)
  if (!kanal) return;
  if (!sayaç) return;
    ///....

  if (!mesaj) {
    return client.channels.cache.get(kanal).send(":loudspeaker: :outbox_tray: Kullanıcı Ayrıldı. `" + sayaç + "` Kişi Olmamıza `" + sonuç + "` Kişi Kaldı `" + member.guild.memberCount + "` Kişiyiz! <:pasif:755838175540412457>\nHoşça kal `"+ member.user.username + "`!");
      }

  if (mesaj) {
    const mesaj31 = mesaj.replace("-uye-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.cache.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});

//KAYIT SİSTEMİ

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`kayitKanal_${member.guild.id}`);
    let mesaj = db.fetch(`kayitGM_${member.guild.id}`);
  if (!kanal) return;

  if (!mesaj) {
    client.channels.cache.get(kanal).send("<a:hypesquad1:750076071721828452> **Selam!** `" + member.user.username + "`**!kayıtol yazarak kayıt olabilirsin!**");
    
  }

  if (mesaj) {
    var mesajs = mesaj.replace("-uye-", `${member.user.username}`).replace("-uyetag-", `${member.user.tag}`);
    return client.channels.cache.get(kanal).send(mesajs);
     }
});
/// KÜFÜR ENGEL SİSTEMİ

/// OTOROL SİSTEMİ

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    client.channels.cache.get(kanal).send("<a:hypesquad1:756152750282375234> <a:onay:755699571388317718> Otomatik olarak ayarlanan rol verildi. Seninle Beraber `" + member.guild.memberCount + "` Kişiyiz! <:aktif:755838164626833459>\nHoş geldin `"+ member.user.username + "`!");
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj.replace("-uye-", `${member.user}`).replace("-uyetag-", `${member.user.tag}`).replace("-rol-", `${member.guild.roles.cache.get(rol).name}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.cache.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
     }
});

client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === ozelkomutYazi) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});

/// YASAKLI TAG

client.on('guildMemberAdd', async member => {
let guild = member.guild; 
let user = guild.members.cache.get(member.id);

const tag = await db.fetch(`banned-tag.${guild.id}`)
const sayı = await db.fetch(`atıldın.${guild.id}.${user.id}`)
if(user.user.username.includes(tag)) {
  
if(sayı === null) {
await db.add(`atıldın.${guild.id}.${user.id}`, 1)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atıldınız, tekrar giriş yapmayı denerseniz **yasaklanacaksınız**!`))
await user.kick() }

if(sayı === 1) {
await db.delete(`atıldın.${guild.id}.${user.id}`)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atılmıştınız, tekrar giriş yapmayı denediğiniz için **${guild.name}** sunucusundan kalıcı olarak **yasaklandınız**!`))
await user.ban() } } 
  
})


