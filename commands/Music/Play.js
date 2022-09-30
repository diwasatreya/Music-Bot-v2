const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "play",
  inVc: true,
  sameVc:true,
  args: true,
  run: async (client, message, args) => {

    const memberChannel = message.member.voice.channel.id

    // Spawning lavalink player
    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    })

    // Getting tracks
   
     
  



if(args[0]=="radio") {

   
    //  if (!player.isPlaying && !player.isPaused) {
    //    player.stop()
    // }.then{}
  
  if(args[1]=="1"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15000/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
      if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
      
    
} 
  if(args[1]=="2"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15002/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
     
        if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
   
}
  if(args[1]=="3"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15004/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
      if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
   
}
  if(args[1]=="4"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15006/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
      if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
   
}
  if(args[1]=="5"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15008/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}
  if(args[1]=="6"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15010/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}
  if(args[1]=="7"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15012/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
   
}
  if(args[1]=="8"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15014/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="9"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15016/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="10"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15018/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="11"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15020/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="12"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15022/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="13"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15024stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="14"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15026/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
       if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="15"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15028/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
      if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

  if(args[1]=="16"){
  const resolve = await client.poru.resolve("http://radio.idjstream.com:15030/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Playing Radio:: \`${track.info.title}\`` });
      if(player.isPlaying) {        player.stop()       } else {      player.play()     }
   
}

 
} else {


const resolve = await client.poru.resolve(args.join(' '))
    const { loadType, tracks, playlistInfo } = resolve;


    
    // Adding in queue
    if (loadType === "PLAYLIST_LOADED") {

      for (let x of resolve.tracks) {
         x.info.requester = message.author;
          player.queue.add(x);

      }
      message.channel.send({ content: `Added: \`${resolve.tracks.length} from ${resolve.playlistInfo.name}\`` });
      if (!player.isPlaying && !player.isPaused) return  player.play();

    }else if(loadType ==="SEARCH_RESULT"|| loadType ==="TRACK_LOADED"){
      const track = tracks.shift();
    track.info.requester = message.author;

      
      
     player.queue.add(track);         
        message.channel.send({ content: `Added: \`${track.info.title}\`` });
        if (!player.isPlaying && !player.isPaused) return  player.play();
        
    }else{
      
       return message.channel.send({ content: "There are no results found."})
    }

    }
  
  }
}