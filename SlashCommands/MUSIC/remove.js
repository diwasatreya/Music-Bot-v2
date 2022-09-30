const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "remove",
  description: "remove the player!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

    if (args[0] == 0) return interaction.reply( { color: 'WHITE', description: 'can\'t remove the song which is already playing'});
    if (args[0] > player.queue.length) return interaction.reply( { color: 'WHITE', description: 'Song not found!'});

    player.queue.remove(args[0] - 1)
    return interaction.reply( { color: 'WHITE', description: 'Remove track from queue'});
  }
} // try it 