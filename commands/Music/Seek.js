module.exports = {
  name: "seek",
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (!player.currentTrack.isSeekable) {
      return message.reply("Track is not Seekable")
    }

    player.seekTo(args[0] * 1000)

    return message.reply(`Seeked ${args[0]}s`)
  }
}