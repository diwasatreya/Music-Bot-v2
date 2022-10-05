[![music bot v2](https://user-images.githubusercontent.com/74746579/193857533-7094bab4-192f-4e66-92c5-9b961524829b.png)](https://youtu.be/uDOZTsgyFNk)
<div align="center">
  <br>

  <h3> Star the Project + Follow me on github </h3>

 <img src="https://user-images.githubusercontent.com/74746579/168328818-6995ed8d-915d-4083-9279-3d94e1d150c5.png" alt="help to star">
 </div>
           

# Information

- Watch the video carefully for instalizaion
- You can read the `README.md` file for configration
- If any coding help need then open the issue [ Dont ask coding help of this code in server ]
- Last thing make sure to star & fork this repo


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

### Enable/Disable Youtube Support
- Goto `./config` in line number `4` 
- To enable Youtube Support change the `false` boolean to `true`
- To disable Youtube Support change the `true` boolean to `false`
### Change Status
- Goto `/events/ready.js` in line number `8`

### Change Messages
- You can goto `/events/messageCreate.js` && `interactionCreate.js` to change some messages

## Thanks for Using <3 


### Need help?
If you need help! Feel free to join our [Support server](https://aromaxdev.xyz/discord)



# Some image captured from bot

![image](https://user-images.githubusercontent.com/74746579/193800380-723bfd6a-f7b2-48ec-98a4-c4a2a6c3e10c.png)

![image](https://user-images.githubusercontent.com/74746579/193800689-325fe092-783a-4573-b95a-08b9c205723c.png)

![image](https://user-images.githubusercontent.com/74746579/193800738-23036e21-3f0e-496b-96a8-22f48b2d7b93.png)


### Music Package
Made using [Poru](https://npmjs.com/poru) npm package
