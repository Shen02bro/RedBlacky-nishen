/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./redblacky/');
const fs = require('fs');

async function RedBlacky () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 30000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Red')}${chalk.blue.bold('Blacky')}
${chalk.white.italic('BlackyString Kodu Alıcı')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Blacky String Kodunuz: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `BLACKY_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz.')
        );
        process.exit(0);
    });

    await conn.connect();
}

RedBlacky()
