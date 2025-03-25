

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1044998751472844880", ""], 
  mongodbUri : "mongodb+srv://beluga:dynoe@cluster0.wdvyszi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#00FFFF",
  activityName: "/help", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Avinan",
      password: "avinan",
      host: "new-york-node-1.vortexcloud.xyz",
      port:  9323,
      secure: false
    }
  ]
}
