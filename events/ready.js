module.exports.run = async (client) => {
 
  client.poru.init(client)
  console.log(`[API] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
 
    setInterval(() => {
      const statuses = [
        `!help`, `prefix: !`
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "LISTENING" });
    }, 60000);

}