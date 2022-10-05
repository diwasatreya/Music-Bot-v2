module.exports.run = async (client) => {
 
  client.poru.init(client)
  console.log(`[API] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
 const cl = client.config.youtube
 if(cl){
  console.log("YOUTUBE SUPPORT IS ENABLED")
 } else {
  console.log("YOUTUBE SUPPORT IS DISABLED")
 }
    setInterval(() => {
      const statuses = [
        `!help`, `prefix: !`
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "LISTENING" });
    }, 60000);

}