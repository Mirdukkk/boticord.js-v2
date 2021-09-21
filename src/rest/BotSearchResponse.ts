/** Response object from /search endpoint */
export interface BotSearchResponse {
  /** Id of the bot */
  botID: string
  /** Bot's banner url */
  imageURL: string | null
  /** Warning for this bot (like 'bot not published in the list') */
  warning: string | null
  /** Bot's tags */
  tags: string[]
  /** ¯\_(ツ)_/¯ */
  donate: number
  /** Id of the customized card */
  customizeCard: number
  /** HTML code for Bot's badge */
  badge: string
  /** Number of bot invitations */
  inviteCount: number
  /** Bot description */
  description: string
  /** Additional info for bot */
  fb: {
    /** Bot's discord username */
    username: string
    /** Bot's discord avatar */
    avatar: string
    /** Bot's status (offline or online) */
    status: string
  }
}
