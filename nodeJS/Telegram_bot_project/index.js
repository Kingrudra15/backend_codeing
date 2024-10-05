// we will use telegraf npm packasge and bring code from there
/**
 * how to get secret token for bot?
 * open telegram search bot father bot
 * /start and it give some step
 * to create a new bot type /newbot and press enter
 * it will askr bot name without / for ex coding_bot
 * then it will ask user name with bot at end give unique name like avicodeex_bot
 * url is "https://t.me/avicodeex_bot"
 * 
 * Done! Congratulations on your new bot. You will find it at t.me/avicodeex_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
7400490016:AAFGHn1ebCxPrZoZgFTTcqA3VEfzdpZOYE0  on product we need to hide this code will learn later
we have one package "Dotenv" package that can hide it
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
now we configure bot
 * 
 */

const { Telegraf } = require("telegraf")
const  axios = require('axios')

// let binarysearchjs = `
//     /**
//  * This function tries to find the element x in the sorted array arr
//  * @param {* Sorted arrangement of elements in the given array} arr
//  * @param {* Element to find } x
//  */
// function binarySearch(arr, x) {
//   /**
//    * Time: O(logn)
//    * Space: O(1)
//    */
//   let lo = 0;
//   let hi = arr.length - 1;
//   while(lo <= hi) {
//     let mid = Math.floor((lo + hi) / 2);
//     if(arr[mid] === x) return mid;
//     if(arr[mid] < x) {
//       lo = mid + 1;
//     } else {
//       hi = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1,2,5,7,8,9,13,16,17,20,22,25,26], 33));

// `;

/**
 * // here we hardcode the code if we want to get the data from internet ?
 * we can use our git hub repo with help of axios we can send the call
 */
const bot = new Telegraf('7400490016:AAFGHn1ebCxPrZoZgFTTcqA3VEfzdpZOYE0')

bot.start((ctx)=> ctx.reply('welcome to new coding bot from Avi'))
 //bot.command('binarysearchjs',(ctx)=> ctx.reply(binarysearchjs))
bot.command('binarysearchjs',async function(ctx){
    const response = await axios.get('https://raw.githubusercontent.com/Kingrudra15/JSPROBLEM/refs/heads/main/problems.js')
    console.log(response.data);
    return ctx.reply(response.data)
    
})

bot.on('sticker',(ctx)=> ctx.reply('❤️'))
// start  on are event when they start do this 
bot.launch();