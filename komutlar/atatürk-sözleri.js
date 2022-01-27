 const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("**🔍 Mustafa Kemal Atatürk'ün Sözlerinden Birini Buluyorum!**").then(message => {
    var xfalcon = [
      "Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez.", 
      "Yurtta sulh, cihanda sulh.", 
      "Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.", 
      "Egemenlik verilmez, alınır.", 
      "Hayatta en hakiki mürşit ilimdir.",
      "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.",
      "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.", 
  
      "Gençler cesaretimizi takviye ve idame eden sizlersiniz. Siz, almakta olduğunuz terbiye ve irfan ile insanlık ve medeniyetin, vatan sevgisinin, fikir hürriyetinin en kıymetli timsali olacaksınız. Yükselen yeni nesil, istikbal sizsiniz. Cumhuriyeti biz kurduk, onu yükseltecek ve yaşatacak sizsiniz.",
      "Dünyada her şey için, medeniyet için, hayat için, başarı için, en hakiki mürşit bilimdir, fendir.", 
      "Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin.", 
      "Hürriyet olmayan bir memlekette ölüm ve çöküş vardır. Her ilerleyişin ve kurtuluşun anası hürriyettir.", 
      "Bir ulus, sımsıkı birbirine bağlı olmayı bildikçe yeryüzünde onu dağıtabilecek bir güç düşünülemez.", 
      "Öğretmen bir kandile benzer, kendini tüketerek başkalarına ışık verir.", 
      "Başarı tüm ulusun azim ve inancıyla çabasını birleştirmesi sonucu kazanabilir.", 
      "Bir milletin medeniyetini ölçmek istiyor musunuz? Kadınlarına nasıl muamele edildiğine bakınız.",
      "Kültür zeminle orantılıdır. O zemin milletin seciyesidir.",
      "Cumhuriyet, fikir serbestliği taraftarıdır. Samimi ve meşru olmak şartıyla her fikre hürmet ederiz.",
      "Taş kırılır, tunç erir ama Türklük ebedidir.",
      "En büyük savaş, cahilliğe karşı yapılan savaştır.",
      "Vatana ihanetin nedeni olmaz; er ya da geç bedeli olur.",
      "Bağımsızlık, uğruna ölmesini bilen toplumların hakkıdır.",
      "Biz Türkler, bütün tarihimiz boyunca hürriyet ve istiklâle timsal olmuş bir milletiz.",
      "Cehalet yenilmesi gereken en büyük düşmandır.",
      "Beni olağanüstü bir kişi olarak yorumlamayınız. Doğuşumdaki tek olağanüstülük Türk olarak dünyaya gelmemdir.",
      "Bir millet zenginliğiyle değil, ahlak değeriyle ölçülür.",
      "Şayet ölecek olursam, memlekete ait söyleyecek hiçbir şeyim yoktur. Çünkü yürürlükteki Cumhuriyet yasaları bu işleri temine yeterlidir.",
      "Medeni olmayan insanlar, medeni olanların ayakları altında kalmaya mahkumdurlar.",
      "Ben icap ettiği zaman en büyük hediyem olmak üzere, Türk Milletine canımı vereceğim.",
      "Hiçbir şeye ihtiyacımız yok, yalnız bir şeye ihtiyacımız vardır; çalışkan olmak!",
      "Öğretmen bir kandile benzer, kendini tüketerek başkalarına ışık verir.",
      "Milletimiz her güçlük ve zorluk karşısında, durmadan ilerlemekte ve yükselmektedir.",
      "Cumhuriyet, fikir serbestliği taraftarıdır. Samimi ve meşru olmak şartıyla her fikre hürmet ederiz.",
      "Türk milletinin karakterine ve adetlerine en uygun olan idare, Cumhuriyet idaresidir.",
      "Cumhuriyetimiz öyle zannolunduğu gibi zayıf değildir. Cumhuriyet bedava da kazanılmış değildir. Bunu elde etmek için kan döktük. Her tarafta kırmızı kanımızı akıttık. İcabında müesseselerimizi müdafaa için lâzım olanı yapmağa hazırız.",
      "Onlar, kolaylıkla anlayacaklardır ki, çürümüş bir hanedanın, halife unvanıyla başının üstünden zerre kadar uzaklaşmasına imkân kalmayacak surette muhafazasının mecburî kılan bir devlet şeklinde, cumhuriyet idaresi ilân olunsa bile, onu yaşatmak mümkün değildir.",
      "Beni ne zaman görmek isterseniz aynaya bakın. Siz Türk çocukları benim bir parçamsınız ve bende sizin.",
      "Bir milletin medeniyetini ölçmek istiyor musunuz? Kadınlarına nasıl muamele edildiğine bakınız.",
      "Bir ulusun asker ordusu ne kadar güçlü olursa olsun, kazandığı zafer ne kadar yüce olursa olsun, bir ulus ilim ordusuna sahip değilse, savaş meydanlarında kazanılmış zaferlerin sonu olacaktır. Bu nedenle bir an önce büyük, mükemmel bir ilim ordusuna sahip olma zorunluluğu vardır.",
      "Bir millet eğitim ordusuna sahip olmadıkça, savaş meydanlarında ne kadar parlak zaferler elde ederse etsin, o zaferlerin kalıcı sonuçlar vermesi ancak eğitim ordusuyla mümkündür.",
      "Gençliği yetiştiriniz. Onlara ilim ve irfanın müspet fikirlerini veriniz. Geleceğin aydınlığına onlarla kavuşacaksınız.",
      "Hürriyet olmayan bir memlekette ölüm ve çöküş vardır. Her ilerleyişin ve kurtuluşun anası hürriyettir.",
      "Çalışmak demek, boşuna yorulmak, terlemek değildir. Zamanın gereklerine göre bilim ve teknik ve her türlü uygar buluşlardan azami derecede istifade etmek zorunludur.",
      "Bir ulus, sımsıkı birbirine bağlı olmayı bildikçe yeryüzünde onu dağıtabilecek bir güç düşünülemez.",
      "Ben, manevi miras olarak hiçbir nass-ı katı, hiçbir dogma, hiçbir donmuş ve kalıplaşmış kural bırakmıyorum. Benim manevi mirasım, bilim ve akıldır. Benden sonra beni benimsemek isteyenler, bu temel mihver üzerinde akıl ve ilmin rehberliğini kabul ederlerse manevî mirasçılarım olurlar.",
      "Biz cahil dediğimiz zaman, mektepte okumamış olanları kastetmiyoruz. Kastettiğimiz ilim, hakikati bilmektir. Yoksa okumuş olanlardan en büyük cahiller çıktığı gibi, hiç okumak bilmeyenlerden de hakikati gören gerçek alimler çıkabilir.",
      "Tehdide dayanan ahlak, bir erdemlilik olmadığından başka, güvenilmeye de layık değildir.",
      "Birtakım kuş beyinli kimselere kendinizi beğendirmek hevesine düşmeyiniz; bunun hiçbir kıymeti ve önemi yoktur.",
      "Bir milletin ahlak değeri, o milletin yükselmesini sağlar. Bir millet, zenginliğiyle değil, ahlak değeriyle ölçülür.",
      "Saygısızlığın, saldırının küçüğü, büyüğü yoktur. Samimiyetin lisanı yoktur. Samimiyet sözlerle açıklanamaz. O, gözlerden ve tavırlardan anlaşılır. Medeniyetin esası, ilerlemesi ve kuvvetin temeli, aile hayatındadır. Bu hayattaki fenalık mutlaka toplumsal, ekonomik ve politik beceriksizliği doğurur.",
      "Bir millette, özellikle bir milletin iş başında bulunan yöneticilerinde özel istek ve çıkar duygusu, vatanın yüce görevlerinin gerektirdiği duygulardan üstün olursa, memleketin yıkılıp kaybolması kaçınılmaz bir sondur.",
      "Türk gençliği amaca, bizim yüksek ülkümüze, durmadan, yorulmadan yürüyecektir.",
      "Bir milletin kültür düzeyi üç safhada; devlet, düşünce ve ekonomideki çalışma ve başarılarının özüyle ölçülür.",
      "Asıl önemli olan ve memleketi temelinden yıkan, halkını esir eden, içerdeki cephenin suskunluğudur.",
      "Medeniyetin emir ve talep ettiğini yapmak insan olmak için yeterlidir.",
      "Ordularımızın kazandığı zafer, sizin ve sizin ordularınızın zaferi için yalnız zemin hazırladı.",
      "Ulusal egemenlik öyle bir nurdur ki, onun karşısında zincirler erir, taç ve tahtlar yanar, mahvolur.",
      "İnsaf ve merhamet dilenmekle millet işleri görülemez; millet ve devletin şeref ve bağımsızlığı elde edilemez, insaf ve merhamet dilenmek gibi bir kural yoktur.",
      "Türkiye’nin güvenini amaç edinen, hiçbir başka ulusun aleyhinde olmayan bir barış yolu, her zaman bizim ilkemiz olacaktır.",
      "Ben yaşayabilmek için, kesin olarak bağımsız bir ulusun evladı kalmalıyım. Bu yüzden ulusal bağımsızlık bence bir hayat sorunudur.",
      "Ya istiklal, ya ölüm.",
      "Spor, ahlaktır. Türk gençliği, sağlıklı yetişip spor yaparsa ulusumuzun geleceği güvence altındadır.",
      "Sporda başarılı olmak için bütün milletçe sporun niteliği ve değeri anlaşılmış olmak ve ona kalpten sevgiyle bağlanmak ve onu vatan görevi saymak gerekir.",
      "Devrimin amacını kavramış olanlar sürekli olarak onu koruma gücüne sahip olacaklardır.",
      "Bütün ümidim gençliktedir. Anaların bugünkü evlatlarına vereceği terbiye eski devirlerdeki gibi basit değildir. Bugünün anaları için gerekli Vasıfları taşıyan evlat yetiştirmek, evlatlarını bugünkü hayat için faal bir uzuv haline koymak pek çok yüksek vasıflar taşımalarına bağlıdır. Onun için kadınlarımız, hatta erkeklerimizden çok aydın, daha çok feyizli, daha fazla bilgili olmaya mecburdurlar; eğer hakikaten milletin anası olmak istiyorlarsa.",
      "Devrimin amacını kavramış olanlar sürekli olarak onu koruma gücüne sahip olacaklardır.",
      "Her boy ölçüşmede arkalarında Türk Milletinin bulunduğu ve Millet şerefini düşünmelerini Türk sporcularına meslek düsturu olarak kaydediyorum.",

    ]; 
    var devtr = xfalcon[Math.floor(Math.random() * xfalcon.length)]; 
    message.edit(`**Ulu Önder Gazi Mustafa Kemal Atatürk'ün Bir Sözü** : \n\`${devtr}\``); 
  });
}; 

exports.config = {
      name: 'atatürk-söz',
   aliases: ["atatürk-söz"]
 };