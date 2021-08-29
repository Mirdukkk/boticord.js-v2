import { BotiCordError } from "../../struct/errors/BotiCordError";
import { BotCommentary } from "../../struct/classes/BotCommentary";
import fetch from 'node-fetch';

export default async function getBotComments(id: string) {
    const searchID = String(id);
    let comments = [];
    try {
        const req =  await fetch(`https://api.boticord.top/v1/bot/${searchID}/comments`)
            .then(r => r.json());

        for(const comment of req) {
            const commentary = new BotCommentary(comment);
            comments.push(commentary);
        }

        return comments;
    } catch (e) {
        throw new BotiCordError('There was an error while get the bot\'s comments:\n' + e);
    }
}