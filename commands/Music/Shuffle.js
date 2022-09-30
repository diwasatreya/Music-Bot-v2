module.exports = {
  name: "shuffle",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
 
    let player = client.poru.players.get(message.guild.id)
    
    if(!player.currentTrack.isSeekable){
  message.reply("Track is not seekable")
}
player.queue.shuffle()
 
    return message.reply('queue shuffled')
  }
}