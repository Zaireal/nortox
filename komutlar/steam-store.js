const Discord = require('discord.js');
const db = require('quick.db')
var steam = require('steam-provider');
var provider = new steam.SteamProvider();


exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Lütfen Oyun Adı Belirt!** \n**__Örnek Kullanım__** : \`${prefix}steam-store <Oyun Adı>\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new Discord.MessageEmbed()
    .setAuthor('Steam Mağazası', steampng)
    .setColor("BLACK")
    .setTitle(result[0].name)
    .addField(`Oyunun ID'si`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Tür', results.genres)
    .addField('Platform', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
.addField('Fiyatı', `Normal Fiyat **${results.priceData.initialPrice}**₺
İndirimli Fiyat **${results.priceData.finalPrice}**₺`)
    .addField('Geliştirici', results.otherData.developer, true)
    .addField('Yayıncı', results.otherData.publisher, true)
  .setColor("BLACK")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hata Oluştu Ya da `' + game + '` Adlı Oyun Bulunamadı')
    })
})
})
}
exports.config = {
      name: 'steam-store',
   aliases: ["steam-store","steam-mağaza"]
 };