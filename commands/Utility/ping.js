module.exports = {
    name : "ping",
    run : async (client,message,args)=> {

    message.channel.send({content : `pong! ${client.ws.ping}`})  
    }
}