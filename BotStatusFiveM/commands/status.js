let config = require('../config.json');
const Discord = require('discord.js');
let PlayerCount = require('../server/players');


module.exports = {
    name: 'status',
    description: 'Serveur Status',
    execute(msg, args){
        PlayerCount.getPlayerCount().then((result) => {

            if(result.status === 200){
                const onlineEmbed = new Discord.MessageEmbed()
                .setColor('#03fc41')
                .setTitle(config.SERVER_NAME)
                .setDescription(`**IP:** ${config.SERVER_URL}`)
                .setThumbnail(config.SERVER_LOGO)
                .addFields(
                    { name: 'Joueurs Connectés', value: result.data.length, inline: true  },
                    { name: 'Status Du Server', value: '✅ ONLINE', inline: true },
                   
                )
                .setTimestamp(new Date())
                .setFooter('Sent by: '+msg.author.tag, `${config.SERVER_LOGO}`);
                msg.channel.send(onlineEmbed);
           }
           

        })
           .catch(function(){
            const offlineEmbed = new Discord.MessageEmbed()
            .setColor('#fc0303')
            .setTitle(config.SERVER_NAME)
            .setDescription('IP: `54.37.165.191:29245`')
            .setThumbnail(config.SERVER_LOGO)
            .addFields(
              { name: 'Joueur Connecté', value: '0', inline: true  },
              { name: 'Serveur status', value: '❌ OFFLINE', inline: true },
             
          )
            .setTimestamp(new Date())
            .setFooter('Sent by: '+msg.author.tag, `${config.SERVER_LOGO}`);
            msg.channel.send(offlineEmbed);
           })
         
       
    }, 
};