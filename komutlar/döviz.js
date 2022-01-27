const Discord = require("discord.js")
const db = require('quick.db')
const client = new Discord.Client()
const tcmbdoviz = require('tcmb-doviz')
const Doviz = new tcmbdoviz();
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

    if(!args[0]) {
        let embed = new Discord.MessageEmbed();
        embed.setDescription(`<a:hypesquad1:756152750282375234>  **Lütfen Bir Kur Birim Kodu Belirt!** \n**__Örnek Kullanım__** : \`${prefix}döviz <KUR>\`\n Kur Birim Kodları = \`USD EUR AUD DKK GBP CHF SEK CAD KWD NOK JPY SAR BGN RON RUB IRR CNY PKR QAR\`\n<a:dikkat:756447952637263992>  **__UYARI!__** : **Kur Birim Kodlarını BÜYÜK HARFLE Yazınız. Yoksa Çalışmaz!**
`);
        embed.setColor("BLACK");
        message.channel.send({embed: embed});
    }
    if (args[0] === "USD"){
        const res = await Doviz.getKur("USD");
        const tarih = await Doviz.guncelTarih();
        let embed = new Discord.MessageEmbed();
        embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL);
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`);
        embed.setColor("RED");
        embed.addField(`Alış`,res.alis);
        embed.addField(`Satış`,res.satis,true);
        embed.addField(`Birim Kodu`,res.kod,true);
        message.channel.send({embed: embed});
    }
   if(args[0] === "EUR"){
const res = await Doviz.getKur("EUR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "AUD"){
const res = await Doviz.getKur("AUD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "DKK"){
const res = await Doviz.getKur("DKK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "GBP"){
const res = await Doviz.getKur("GBP");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "CHF"){
const res = await Doviz.getKur("CHF");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "SEK"){
const res = await Doviz.getKur("SEK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "CAD"){
const res = await Doviz.getKur("CAD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "KWD"){
const res = await Doviz.getKur("KWD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "NOK"){
const res = await Doviz.getKur("NOK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "JPY"){
const res = await Doviz.getKur("JPY");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "SAR"){
const res = await Doviz.getKur("SAR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "BGN"){
const res = await Doviz.getKur("BGN");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "RON"){
const res = await Doviz.getKur("RON");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "RUB"){
const res = await Doviz.getKur("RUB");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "IRR"){
const res = await Doviz.getKur("IRR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "CNY"){
const res = await Doviz.getKur("CNY");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "PKR"){
const res = await Doviz.getKur("PKR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "QAR"){
const res = await Doviz.getKur("QAR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL)
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
}
exports.config = {
  name: 'döviz',
  aliases: ["döviz"]
 };