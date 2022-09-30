## Configration

- Enter your bot token in .env file with `TOKEN` variable
```js
{
  "prefix": '!',
  "owner":["YOUR DISCORD ID"],
  "nodes": [{
    "name":"v1",
    "host":"localhost", // your lavalink host
    "port": 6969, // Your lavalink port
    "password": "iamnotdumb" // Your lavalink pass
  }]
}
```
### Remove Command
- To remove `loop` command delete `/commands/Music/loop.js` file

- To remove `join` command delete `/commands/Music/Join.js` file
  
*remove the `.js` file to remove command*

### Change Status
- Goto `/events/ready.js` in line number `8`

### Change Messages
- You can goto `/events/messageCreate.js` && `interactionCreate.js` to change some messages

## Thanks for Using <3 


### Need help?
If you need help ! Feel free to join our [Support server](https://aromaxdev.xyz/discord)




### Music Package
Made using [Poru](https://npmjs.com/poru) npm package