import { BotiCordError } from '../../struct/errors/BotiCordError';
import { Bot } from '../../struct/classes/Bot';
import fetch from 'node-fetch';
import config from "../../config";

export default async function (query: string) {
    try {
        const req = await fetch(config.apiURL + config.version + '/bot/' + String(query))
            .then((r: { json: () => any; }) => r.json());

        return new Bot(req);
    } catch (e) {
        throw new BotiCordError('There was an error while search the bot:\n' + e);
    }
}
