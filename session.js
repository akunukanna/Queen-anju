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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpjYVJ2T0poUUtvbFhUOGFvY2Nhbm5mWEpqT0hKUmx0bVBzaHFLb1lIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiak1xS0VjTmJyMS9LSkxDYXVub2QrV0FUQUFkMllQNy80TFhXQ0Naa3FCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RTRFRGlCckI5Q3N1a05ETTR3Mnh2dVZiQzd5UGttcFR2TnQzS1hSclUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRnh2N1BCQWhSUHIveWROcmFQRGxjZUd0OXBIQnBxb0dKT2s3Y1ZYNUZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMTWJWeVloNjdJSEVLcm5ueUtSUVpsWWwwYWRPN3l0L1ErL0ZwS0JhSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJLd2dJM3FRbjR6aXFCVGlzdUh3NUlOVlNxZ25YbWhrYnVnSHN6ZmhaeGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NqcmZPeThBRlJWU1dRYWdaN2g4NFFkMGpEVHJQUDBiaWdlMGFBY2dFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG5lU2lSUnR3TWk0WWdGSzlRTFlPWVNGSGlzbkZHUjRLc0N3Ny9SRGVEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB3TXo0djhQRlVyRmM2U3Q1OUh2Z2ozeE1mK0hqYlpiTExiTVBGbjY2Uy83ZER3QkNvcEdHZEx2YmVZQzZiT3M4WnB5MVM5dHZNSURMQ1U2VXdqRWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiUURSWW1ULzJkdy9UMFladkYxNkwvRXhodmRDRGJnbys1dnZJMHhwMnZaST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZkdMdlV2S1lRMFNMTHpuU1VUWENlUSIsInBob25lSWQiOiJlN2MyNmQxYi1jZjgyLTQxNmUtOTgwYS0yNGEzYTk1NTMyNTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHhGZmtmd3dlZGkrdnkzQ0VCdU9Oc014bHVjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMxUERvL1FHMVppNTU0d0pxelNYdFltNXBHOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2TVRCMlc0UCIsIm1lIjp7ImlkIjoiOTQ3Nzg1ODczMjQ6MjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDE5MDY2ODkwODk1ODI6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbVVvZU1DRUxyRDI4SUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvSkNSRkdXUDltNGp5VmxlQlNPNmZSRS9YMERvQmtTVmlkR0dRZ3dZaldRPSIsImFjY291bnRTaWduYXR1cmUiOiJmRUNGaXdPSFdVSWRZbGVidWVqTStGczZnb0FKNmZWeSt0RUNYS1d4MEVsWUN3Rzl4UDRjMTdrMFgrYjNJL1hQRytVWG9ud08wYjdicVVUZVhmamlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ2NqQUJIZmc4QTFUUkg4YTF0Tndmc3FDYVExT3BqKzVUcnRHbHNTcVNGS1lJUmFYUXZRZ0tvWVgyS2Q5RFNvQ05wbXl2Z21GNmUxeWhyK204cmNraEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3ODU4NzMyNDoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhQ1FrUlJsai9adUk4bFpYZ1VqdW4wUlAxOUE2QVpFbFluUmhrSU1HSTFrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1MjQzNTksImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
  BOT_NUMBER:0778587324
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: Esanda2008
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
