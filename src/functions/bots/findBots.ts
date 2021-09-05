import { BotiCordError } from "../../struct/errors/BotiCordError";
import fetch from "node-fetch";
import config from "../../config";

export default async function (query: string) {
    try {
        return await fetch(config.hostname + 'search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({ term: String(query) })
        })
            .then((r: { json: () => any; }) => r.json());
    } catch (e) {
        throw new BotiCordError('There was an error while search the bot:\n' + e);
    }
}
