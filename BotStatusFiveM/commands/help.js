  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
let config = require('../config.json');
module.exports = {
    name: 'help',
    description: 'help Command',
    execute(message, args){
        const Fivem = new Discord.MessageEmbed()
        .setTitle('FiveM')
        .setColor('#ffaa17')
        .addField(`${config.PREFIX}status`, 'Voir le status du serveur')
        .addField(`${config.PREFIX}playerlist`, 'Voir les joueur connecté au serveur')
        .addField(`${config.PREFIX}suggest`, 'Faire une suggestion au serveur ')
        .setTimestamp()

       const pages = [
            Fivem,
         ]

        const emojiList = ["", ""];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }, 
};