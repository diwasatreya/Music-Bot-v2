const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    let prefix = client.prefix


    if (!args[0]) {
   
// copyright 2022 @diwasatreya
      
      const embed = new MessageEmbed()
        .setTitle("HELP MENU")
        .setDescription(`
        Here  are the commands available for this bot 
        \`cqueue\`  : clears the queue
        \`join\`    : join the VC
        \`jump\`    : jump the queue
        \`loop\`    : repeat the song
        \`pause\`   : pause the song
        \`play\`    : play the song
        \`queue\`   : show queue songs
        \`radio\`   : play radio station
        \`remove\`  : remove song from queue
        \`remove\`  : remove song from queue
        \`repeat\`  : loop the song
        \`seek\`    : skip some clip
        \`shuffle\` : shuffle the queue
        \`skip\`    : skip the whole song
        \`spotify\` : play spotify song
        \`stop\`    : stop the song
        \`volume\`  : change the volume
        \`help\`    : show all commands
        \`ping\`    : show the bot ping
      `)

        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        ).setFooter(`Type ?help <command name> for details on a command!`)
        .setTimestamp()
        .setColor("WHITE");
      return message.reply({ embeds: [embed] });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)

          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Help Command: " + args[0])
        .addField("PREFIX:", `\`!\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`?${command.name} ${command.usage}\``
            : `\`?${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("WHITE");
      return message.reply({embeds:[embed]});
    }

  }
}
