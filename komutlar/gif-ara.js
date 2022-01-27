const Discord = require("discord.js");
const db = require('quick.db')
const request = require('request-promise-native');
 
exports.run = async (Bastion, message, args) => {
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
  try {
    if (args.length < 1)
 {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Lütfen Aramak İstediğin Bir Gif Türünü Belirt!** \n**__Örnek Kullanım__** : \`${prefix}gif-ara parti \`\n<a:dikkat:756447952637263992>  **__UYARI!__** **Gif'i Aratırken Türkçe Karakter KULLANMAYINIZ!**`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

    let options = {
      url: 'http://api.giphy.com/v1/gifs/search',
      qs: {
        q: encodeURI(args.join('+')),
        api_key: 'dc6zaTOxFJmzC',
        limit: 10,
        offset: 0
      },
      json: true
    };
    let response = await request(options);
    if (response.data.length) {
      message.channel.send({
        embed: {
          color: 0x00AE86,
          title: `GIF aranıyor: ${args.join(' ')}`.slice(0, 256),
          image: {
            url: response.data[Math.floor(Math.random() * response.data.length)].images.original.url
          },
        }
      }).catch(e => {
        console.log(e);
      });
    }
    else {
      return Bastion.emit('hata', '', Bastion.i18n.error(message.guild.language, 'bulunamadı', 'görsel'), message.channel);
    }
  }
  catch (e) {
    if (e.response) {
      return Bastion.emit('hata', e.response.statusCode, e.response.statusMessage, message.channel);
    }
    console.log(e);
  }
};

exports.config = {
  name: 'gif-ara',
  aliases: ["gif-ara"]
 };