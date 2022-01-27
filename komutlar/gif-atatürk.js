   const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = [
"https://media.giphy.com/media/IgEzHBZvYKaJkoAK43/giphy.gif",
"https://media.giphy.com/media/Xc4dop7WgINtfqalR4/giphy.gif",
"https://media.giphy.com/media/cLBAke8IJbxmEqGdrf/giphy.gif",
"https://media.giphy.com/media/VdVwQxkrlOaKXswqw8/giphy.gif",
"https://media1.tenor.com/images/8c8049ac8a9617a7ade6058782b6038d/tenor.gif?itemid=11220137",
"https://media.tenor.com/images/3f545d8e04335b796ab5764e3fd200d2/tenor.gif",
"https://media.tenor.com/images/aa591ce057c47b863324797ed3365b08/tenor.gif",
"https://media.tenor.com/images/0c1b5820d462fadc4dc7446e0ffc1396/tenor.gif",

];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("Atatürk GIF")
        .setColor("BLACK")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.config = {
  name: 'atatürk-gif',
  aliases: ["atatürk-gif"]
 };