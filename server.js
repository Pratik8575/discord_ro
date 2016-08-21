var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("message",function(message)
{
  if(message.content === "hello")
  {
      bot.reply(message, "Bol ne baka su kam padyu");
  }
  if(message.content === "Bapu")
  {
      bot.reply(message, "bov dayi!");
  }
});

bot.loginWithToken("MjE2ODc4ODIzMzYxMzQ3NTg1.CpshTA.3Q5ALO3rTGhSUxxMJjou-y-ryf0");

// https://discordapp.com/oauth2/authorize?client_id=216878823361347585&&scope=bot
