const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Ghost Development",
        state: "Creating New Projects 🎃",
        startTimestamp: new Date(),
        largeImageKey: "ghostdevelopment",
        largeImageText: "Ghost Development Logo",
        buttons: [{
            label: "Ghost Development Discord",
            url: "https://discord.gg/zSWWKGMxzG"
        }, {
            label: "Ghost Development GitHub",
            url: "https://github.com/0TheGhost"
        }]
    })
    console.log("Ghost RPC Etkin")
})

rpc.login({
    clientId: "835603846843072574"
})