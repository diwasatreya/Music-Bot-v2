module.exports = {
  name: "resume",
  inVc: true,
  sameVc: true,
  player: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (!player.isPaused) {
      player.pause(false)
      return message.reply('Resumed')
     
    }

    if (player.isPaused) {
      
      return message.reply("Player is Already Resumed")
    }

    
  }
}