const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "radio",
  inVc: true,
  sameVc:true,
  // args: true,
  run: async (client, message, args) => {


  const embed = new MessageEmbed()
  .setTitle("Radio Stations")
  .setDescription(`
1. [Hot108 Jamz - Online Now](http://radio.idjstream.com:15000/stream)
2. [Hits & HipHop - Online Now](http://radio.idjstream.com:15002/stream)
3. [Soft Rock & Pop - Online Now](http://radio.idjstream.com:15004/stream)
4. [Top 40/Pop - Online Now](http://radio.idjstream.com:15006/stream)
5. [R&B Hits - Online Now](http://radio.idjstream.com:15008/stream)
6. [Classic Soul - Online Now](http://radio.idjstream.com:15010/stream)
7. [Classic Rock - Online Now](http://radio.idjstream.com:15012/stream)
8. [Classic Hits - Online Now](http://radio.idjstream.com:15014/stream)
9. [Alternative Rock - Online Now](http://radio.idjstream.com:15016/stream)
10. [70's Hits - Online Now](http://radio.idjstream.com:15018/stream)
11. [80's Hits - Online Now](http://radio.idjstream.com:15020/stream)
12. [90's Hits - Online Now](http://radio.idjstream.com:15022/stream)
13. [Today's Country - Online Now](http://radio.idjstream.com:15024/stream)
14. [BackBounce - Online Now](http://radio.idjstream.com:15026/stream)
15. [Trance - Online Now](http://radio.idjstream.com:15028/stream)
16. [Dubstep - Online Now](http://radio.idjstream.com:15030/stream)

*Use \`play radio <number>\` to play radio*`)
 message.reply({ embeds: [ embed ] })

    
   
  }
}