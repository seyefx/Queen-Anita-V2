//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "+2349052589365";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUN5TWFKbzFHQ2cxN0FKYnJCam9QL0FBU0M5UEt5dkZlc0VVNmJ5ejNWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM29jOUJTeFhhU1FvY2VacFU0TVJRMHVKUlllSEJ4MVVCVUYwejBXZU53WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSWFFaXlOOEI5eHlCVXMxdGsxUWFWZDYxQW1NVE9hMXNmclpjaWJjWEV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZ3BvQXN5OWcyVEo2enpSVUFNQkNJTG4yUmRFcldaVHZiWXRvTURxREEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCaFdtUStMRjlOYTF2M29nQUtoMXBYNHptcVhlVUdWdjh1dHlHaGZoME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJyeWZsS0NDL0RtcHFmTVJBVzhNQkdqK3E2QVhPNGJUdFdUTWhaR3lpUWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lWVUhaME4wREI4YksxZGlRVERkK012b0lkc3BnZ3B6a1RnbllsN29uaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2twSm45cmlmYjl4aTR4U2xVQ0h2cmJYUWNtU2hHek9VbU15a1ltQkQyST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVVSTRsM0FsTmFDMk9KY3VvU3hJYndlZkh0ejRqNEdzc3BpeVNNZFExZllPeFFxMFBkVThqZ1p2VGo0OFYzaEJnWWhGeCtYall3OFRnQTlhdEJGY2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJSdWVIZm5rOWJyMEczZHFpam42QkhYcEV5T0ppOXgyYVVkdlRvRk5EbkpJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEaV9sOEFVQVNPaW9LaWdvdHlFWnlnIiwicGhvbmVJZCI6ImUyZTE2Y2Y4LWYxNzktNDI3Ni1hZTM5LWY1NjExYTI4NzFjMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MkJLT2Zjdjl1dktQdkhUbWVEL01zZ2hRM0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkVlS1hNMzBFUU9wYXZBZncyNHRPV3BJYXpRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxCVFRSOFdBIiwibWUiOnsiaWQiOiIyMzQ5MDUyNTg5MzY1OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU29iYW5qbyBPbHVzZXllIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLUFNoZWtFRUxPSXlyZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLQTZxUnU1clFEOFRYenJFMXBKMHZ5bHczSzBiUzhSVjMvY05wUnViMVJjPSIsImFjY291bnRTaWduYXR1cmUiOiJSYmx6OEpXajRYd1VtTUl2WDA3Y29iR3o2RHpRakIydTNtVm4yQVZEYmJ0eDZQZXNuVmpDSVUxSERXenU3U0d0dWRqTk9vdG52OHkvcmZhQWNHMzJBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSTd6TVpwdnRPamtJRnZWMGtYMlZEK0loNVJaL0V2UWk5SjA0c2MzeHF4RjJLcDNhWkZFMWN2QjlzN2Yrb1JFdzF1LzNqTjlpMnpEMzNadlNZVlJJaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDUyNTg5MzY1OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2dPcWtidWEwQS9FMTg2eE5hU2RMOHBjTnl0RzB2RVZkLzNEYVVibTlVWCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI2Njc1MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPY3AifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
