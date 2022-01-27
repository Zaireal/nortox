  
   const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = [
"https://media.giphy.com/media/fx5Eg6LbyUq8RSWAKy/giphy.gif",
"https://media.giphy.com/media/S79W75MK4e8ieDtOvI/giphy.gif",
"https://media.giphy.com/media/2rAKTgJIQe1buYU1R5/giphy.gif",
"https://media.giphy.com/media/3ohuPpou3IQFVvd69i/giphy.gif",
"https://media.giphy.com/media/TdiGSPC3P6QXvCBdWx/giphy.gif",
"https://media.giphy.com/media/cluoH97qdlBd56Izol/giphy.gif",
"https://media.giphy.com/media/iHtVadz9FLGqLiTgs8/giphy.gif",
"https://media.giphy.com/media/eLpO6JFWmTximd6608/giphy.gif",
"https://media.giphy.com/media/pPd9XthNGcARhencgK/giphy.gif",
"https://media.giphy.com/media/Lr4MuiBF2QPx2E0foV/giphy.gif",
"https://media.giphy.com/media/kD59Y2omlC44mOqS7v/giphy.gif",
"https://media.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy.gif",
"https://media.giphy.com/media/MXjpAPu4yF0Thhb3HO/giphy.gif",
"https://media.giphy.com/media/YLsgQgqBSTiJiV4o3w/giphy.gif",
"https://media.giphy.com/media/blnvHDOuoqq6DK6xae/giphy.gif",
"https://media.giphy.com/media/H6WuPBrcngOgcgBLPf/giphy.gif",
"https://media.giphy.com/media/jTf2Io0LtBXGZddOVE/giphy.gif",
"https://media.giphy.com/media/fUA19fi3gRyxmpLb8I/giphy.gif",
"https://media.giphy.com/media/kgsBIWtPd5Q5Pw11Rq/giphy.gif",
"https://media.giphy.com/media/3oFzlVd5hA0lhYp3ws/giphy.gif",
"https://media.giphy.com/media/XeXJlF9ouoWkeAyHhO/giphy.gif",
"https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif",
"https://media.giphy.com/media/Yle9Yz9izeVRyiwavn/giphy.gif",
"https://media.giphy.com/media/GDwGfwoIC9Mru/giphy.gif",
"https://media.giphy.com/media/mWrXc8R1CJQxq/giphy.gif",
"https://media.giphy.com/media/WOxdv9K63yLRXLEhad/giphy.gif",
"https://media.giphy.com/media/55rK0m0pzyUbyyicrs/giphy.gif",
"https://media.giphy.com/media/Xf8D9Qf8OCKnMvNnru/giphy.gif",
"https://media.giphy.com/media/a5viI92PAF89q/giphy.gif",
"https://media.giphy.com/media/XEbIyyo02CsFyDmFXL/giphy.gif",
"https://media.giphy.com/media/UQmhh2tibkGajPOvjG/giphy.gif",
"https://media.giphy.com/media/8nhgZZMKUicpi/giphy.gif",
"https://media.giphy.com/media/hR6Fz4OxVCsTY47MgD/giphy.gif",
"https://media.giphy.com/media/xUPJPw3Eaoeamv6HEA/giphy.gif",
"https://media.giphy.com/media/VF5ZXlzQ8VcMpgJr1G/giphy.gif",
"https://media.giphy.com/media/3o7WIKJzFh68P9iJI4/giphy.gif",
"https://media.giphy.com/media/f8ywYgttpGzzVPH5AO/giphy.gif",
"https://media.giphy.com/media/4GWgNkOcQeubVjoc5P/giphy.gif",
"https://media.giphy.com/media/1BfhAhC5Vvd12EUaFq/giphy.gif",
"https://media.giphy.com/media/VdVwQxkrlOaKXswqw8/giphy.gif",
"https://media.giphy.com/media/IgEzHBZvYKaJkoAK43/giphy.gif",


];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("Random GIF")
        .setColor("BLACK")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.config = {
  name: 'randomgif',
  aliases: ["randomgif"]
 };