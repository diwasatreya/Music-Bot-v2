let slash = []
const { readdirSync } = require("fs");
const ascii = require("ascii-table");

//THIS ONE FROM V12

// Create a new Ascii table
let table = new ascii("Slash commands");
module.exports = (client) => {
    readdirSync("./SlashCommands/").forEach(dir => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
    
            if (pull.name) {
                client.slash.set(pull.name, pull);
                slash.push(pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            }
    });
    
    console.log(table.toString());


client.on("ready",async ()=> {



//registering slash comand

await client.application.commands.set(slash)
console.log("Slash Loaded")
})

}