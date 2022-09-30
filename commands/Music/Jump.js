 function moveArrayElement(arr, fromIndex, toIndex) {
        arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
        return arr;
    }

module.exports = {
  name: "jump",
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
 
    let player = client.poru.players.get(message.guild.id)

    const position = Number(args[0]);
    
  const from = args[0] ? parseInt(args[0], 10) : null;
  const to = args[1] ? parseInt(args[1], 10) : null;
     
    if (from === null || to === null)
        return message.reply(`invaild usage \n jump 10 1`)

        if (from === to || (isNaN(from) || from < 1 || from > player.queue.length) || (isNaN(to) || to < 1 || to > player.queue.length))
            return message.reply('that number is out of queue length')
    

const moved = player.queue[from - 1];
moveArrayElement(player.queue, from - 1, to - 1)
    
    return message.reply(`${moved.info.title} moved to \`${to}\``)
  }
}