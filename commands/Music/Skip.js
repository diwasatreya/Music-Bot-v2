module.exports = {
  name: "skip",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)
    
 player.stop()
    
message.reply("Skipped")
  }
}