module.exports.run = async (client,player) => {
  // player.textChannel.send({content:`Queue has ended!`});
  player.destroy();
}