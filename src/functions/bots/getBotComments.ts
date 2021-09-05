import { BotiCordError } from "../../struct/errors/BotiCordError";
import { BotCommentary } from "../../struct/classes/BotCommentary";
import fetch from 'node-fetch';
import config from "../../config";

export default async function getBotComments(id: string) {
    const searchID = String(id);
    let comments = [];
    try {
        const req =  await fetch(`${config.apiURL}/bot/${searchID}/comments`)
            .then((r: { json: () => any; }) => r.json());

        for(const comment of req) {
            const commentary = new BotCommentary(comment);
            comments.push(commentary);
        }

        return comments;
    } catch (e) {
        throw new BotiCordError('There was an error while get the bot\'s comments:\n' + e);
    }
}
