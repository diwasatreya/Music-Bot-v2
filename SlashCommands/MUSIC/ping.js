module.exports = {

name : "ping",
description : "chekling ping of bot",
run : async (client,interaction,args) => {





interaction.followUp({content : client.ws.ping + "ms"})
}



}