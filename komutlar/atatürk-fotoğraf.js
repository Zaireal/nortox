   const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = [
"https://upload.wikimedia.org/wikipedia/commons/a/a8/Ataturk1930s.jpg",
"https://i.pinimg.com/originals/10/4b/fe/104bfef1a845246e657bf7f7d4f62191.jpg",
"https://4.bp.blogspot.com/-nyU2GgP1CCo/WTZero-Wm-I/AAAAAAAAK2k/Z0qRoAWq5x4eyeUyb8Ha8mF09JaevrBeACLcB/s1600/Mustafa_Kemal_Ataturk_01.jpg",
"https://img.a24.com.tr/hbrResim/Ataturk-fotograflari-resimli-10-Kasim-mesajlari-Ataturk-ve-10-Kasim-siirleri-4019.jpg",
"https://isteataturk.com/gorseller/thumb/1510260880_ataturk.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2019/11/07/depophotos_14842998-custom.jpg",
"https://pbs.twimg.com/profile_images/968956449308233729/CxdYpreK_400x400.jpg",
"https://i.pinimg.com/originals/05/61/d5/0561d5930d772b9f9464a9af2b3d670d.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806042.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806044.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806046.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806048.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806050.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806052.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806054.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806056.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806058.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806060.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806062.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806064.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806068.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806070.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806074.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806076.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806078.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806080.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806082.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806084.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806086.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806088.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806090.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806092.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806094.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806096.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806098.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806100.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806102.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806104.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806106.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806108.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806110.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806112.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806114.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806116.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/atat-uuml-rk-39-uuml-n-ilk-kez-yayinlanan-fotograflari-806118.jpg",
"https://i.sozcu.com.tr/wp-content/uploads/2014/08/670atatürk.jpg"



];

    let result = Math.floor((Math.random() * replies.length));

    let imageembed = new Discord.MessageEmbed()
        .setTitle("Atatürk FOTOĞRAF")
        .setColor("BLACK")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(imageembed);
};

exports.config = {
  name: 'atatürk-fotoğraf',
  aliases: ["atatürk-fotoğraf","atatürk-pp"]
 };