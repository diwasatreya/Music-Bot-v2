module.exports = {
  name: "join",
  inVc: true,
  run: async (client, message, args) => {

    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    })

    message.reply("Joined")

  }
}
