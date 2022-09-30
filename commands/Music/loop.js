module.exports = {
  name: "loop",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (player.loop === 0) {
      player.TrackRepeat();
      message.reply("loop track enabled")
    } else if (player.loop === 1) {
      player.QueueRepeat();
      message.reply("loop queue enabled")
    } else if (player.loop === 2) {
      player.DisableRepeat();
      message.reply("loop disabled")
    }
  }
}