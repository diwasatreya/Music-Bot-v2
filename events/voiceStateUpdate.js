module.exports.run = async (client,oldVoice,newVoice) => {

 const player = client.poru.players.get(oldVoice.guild.id);
      if (!player) return;

      if(!newVoice.guild.me.voice.channel){
        player.destroy()
      }
}
