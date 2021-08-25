'use strict'

module.exports = async(guilds, users, shards) => {
    const fetch = require('node-fetch');

    if(!guilds) {
        throw new Error('You haven\'t provided guilds count');
    }
    if(isNaN(guilds)) {
        throw new Error('Provided guilds count isn\'t a number');
    }

    let usersCount = !isNaN(users) ? Number(users) : 0;
    let shardsCount = !isNaN(shards) ? Number(shards) : 0;
    let guildsCount = Number(guilds);

    const json = JSON.stringify({
        guilds: guildsCount,
        users: usersCount,
        shards: shardsCount
    });

    fetch('https://boticord.top/api/stats', {
        method: 'POST',
        headers: {
            'Authorization': this.token,
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(r => r.json())
        .catch(e => throw new Error(`There was an error while sending the stats: ` + e))
        .then(r => {
            return r
        })
}