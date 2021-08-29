export interface BotCommentaryInterface {
    userID: string,
    text: string,
    vote: number,
    isUpdated: boolean,
    createdAt?: number,
    updatedAt?: number
}