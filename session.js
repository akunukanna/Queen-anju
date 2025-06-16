//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZuMG1KRytzOGJDcElxSjVza1ptSGg0dkpkR2tUK2dqT0ExMUxUNjVuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmgzV0x3WkVHWE9XSGdtNEk0b3lvS2VvVDIvbVRJUS92dTRGY1RxdUFraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTnZFODQzTjVoTmw0VjRjRVJrK25iNTFRSXo2T3FCdStwL1FVMHZqbm5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKaFBMalQ3dkc4clp1UW1ibGl5MXJFMk54R1RXb2FNL0xHN3MycEVCbm5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJcjNwUTIzamtiMEhCdzZtSnhOZm5uTmZwaFRqSWxIajhuN2lIMUVVMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB4dE1HY29FTXhFcHcvcjdUREp3QWFhVG1TWG1qT0NYTjRTWGN0VzdSazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURxM0ovNVBIVkFmWlQ0dUU2Vm4rWnBmVGgxWDIyeVZFamROTkh4V0NuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDhhSWQ3NWFzOGJZNjQ4WGZDcWRkUDBpWERJTTc4ZkJneW05TmVxa1pVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitWd1VTd1J1OElWaUtPdjVtalRWOTdocHFmVTZSVTlnYTlzRlYvVDVCQ0VML2tTNU5PYTdBS1BCaERNUkhybnhMYjd1RHFoYlcwNmF6RmVUR1Z1amh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IldXSWRMVUQyYTJOU3VXYWdsUGlwTU0vZy9JeTdCN2RPWjRMMHJ4NlE5TkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlYtV2Y4b1UxUm9DTXA1RlZPOUtTRWciLCJwaG9uZUlkIjoiZGYyZGIyODctZmNiZi00YjQwLTkyNjMtOGEyZTkxNDk1N2MwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4Q1E1Q3FYTUVxVURoTmxvMlIvYjA5RTY3dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzL1VWRkdtQ2NtdTBla1NIc0tqbmdQNWxDSk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTlUWEFUQjEiLCJtZSI6eyJpZCI6Ijk0Nzc4NTg3MzI0OjI3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAxOTA2Njg5MDg5NTgyOjI3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS21Vb2VNQ0VJdUt3Y0lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib0pDUkZHV1A5bTRqeVZsZUJTTzZmUkUvWDBEb0JrU1ZpZEdHUWd3WWpXUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2dING95RkExdFlSckU3U1dTUGprRytHYUx0SlBrdnVJNXBvWHZDSEQyNkZlQnBURENZelhheDhaQ0FodTRuZEV0dExQeWk4ek4wL2d4Y3lVbEhNQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IklwQysvaVJKQTNoSlh0K1B4MnNPQVlFU0FJdENuU0tIUnppcGdVM1dBVW44bjV4UWVlRFFxNTFONTFIVVdzM0FOSkk2TzZXalZXMFdPQWV6VTVPeWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzg1ODczMjQ6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUNRa1JSbGovWnVJOGxaWGdVanVuMFJQMTlBNkFaRWxZblJoa0lNR0kxayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMDkxMDMxLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
