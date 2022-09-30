const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "disconnect",
  description: "disconnect the bot!",
  inVc: true,
  sameVc: true,
  player:true,
  run: async (client, interaction, args) => {
  const player = client.poru.players.get(interaction.guild.id);
  player.destroy();
  return interaction.reply({ embeds: [{ color: 'WHITE', description: '<:checkmark:912259227060437012> |  Disconnected the player!'}]})  
  }
}
