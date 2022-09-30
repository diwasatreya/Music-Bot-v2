module.exports.run = async (client, message) => {

  //simply ignore bot and dm messages
  if (message.author.bot || !message.guild) return;

  //if message dont start with prefix return it
  if (!message.content.startsWith(client.config.prefix)) return;


  //if message member not found find from fetch
  if (!message.member) message.guild.fetchMembers(message);

  //SCLICE FOR REMOVE PREFIX FROM ARGS, trim for remove spaces and split for make content in array
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);



  //take command from args first content example !help mod  taking help from it
  const cmd = args.shift().toLowerCase();


  //if command lengh is 0 example !  so it will return
  if (cmd.length === 0) return;


  let command = client.commands.get(cmd)


  //finding command from aliases
  if (!command) command = client.commands.get(client.aliases.get(cmd))
  const player = client.poru.players.get(message.guild.id);
  const memberChannel = message.member.voice.channelId;
  const botChannel = message.guild.me.voice.channelId;

  if (!command) return

    //Voice Only
    if (command.inVc && !memberChannel) {
      return message.channel.send('You must be in a Voice Channel to use this Command!')
    }
  //same vc
  if (command.sameVc && player && botChannel !== memberChannel) {

    return message.channel.send('You must be in the same Voice Channel as me!')


  }
  //player
  if (command.player && !player) {
    return (`No Player exists for this Guild!`)
  }
    if (command.current && !player.currentTrack){
message.channel.send("There is nothing playing right now!")}

  //args
  if (command.args && !args.length) {
    return message.channel.send(`You didn't provide any arguments!`)
  }
  if (command.owner) {
    if (message.author.id !== "") return;
  }
  if (command) command.run(client, message, args)





}