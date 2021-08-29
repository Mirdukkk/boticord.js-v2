import { BotCommentaryInterface } from "../interfaces/BotCommentaryInterface";

export class BotCommentary implements BotCommentaryInterface {
    constructor(options: any) {
        this.userID = options.userID;
        this.text = options.text;
        this.vote = options.vote;
        this.isUpdated = options.isUpdated;
        options.updatedAt ? this.updatedAt = options.updatedAt : this.createdAt = options.createdAt;
    }

    isUpdated: boolean;
    text: string;
    userID: string;
    vote: number;
    updatedAt: number | undefined;
    createdAt: number | undefined;
}