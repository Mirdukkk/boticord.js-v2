import { BotiCordError } from '../../struct/errors/BotiCordError';
import fetch from 'node-fetch';
import { BotiCordAPI } from "../../index";

export default async function (api: BotiCordAPI) {
    const guildsCount = api.adapter.getGuilds();
    const usersCount = api.adapter.getUsers();
    const shardsCount = api.adapter.getShards();

    const json = JSON.stringify({
        guilds: guildsCount,
        users: usersCount,
        shards: shardsCount
    });

    try {
        return await fetch('https://boticord.top/api/stats', {
            method: 'POST',
            headers: {
                'Authorization': api.token,
                'Content-Type': 'application/json'
            },
            body: json
        })
            .then((r: { json: () => {}; }) => r.json());
    } catch (e) {
        throw new BotiCordError('There was an error while sending the stats:\n' + e)
    }

}