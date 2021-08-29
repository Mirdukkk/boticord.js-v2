import { BotiCordError } from "../../struct/errors/BotiCordError";
import fetch from "node-fetch";

export default async function (query: string) {
    try {
        return await fetch('https://boticord.top/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({ term: String(query) })
        })
            .then(r => r.json());
    } catch (e) {
        throw new BotiCordError('There was an error while search the bot:\n' + e);
    }
}