import { BotiCordError } from '../../struct/errors/BotiCordError';
import { Bot } from '../../struct/classes/Bot';
import fetch from 'node-fetch';

export default async function (query: string) {
    try {
        const req = await fetch('https://api.boticord.top/v1/bot/' + String(query))
            .then(r => r.json());

        return new Bot(req);
    } catch (e) {
        throw new BotiCordError('There was an error while search the bot:\n' + e);
    }
}