/** Response object from /bot/:shortId | /bot/:botId endpoint */
export interface BotInformationResponse {
  /** Bot's id */
  id: string
  /** Bot's short URL code */
  shortCode: string | null
  /** Links in the Bot's profile */
  links: string[]
  /** Additional info for the bot */
  information: {
    /** Bot's bumps count */
    bumps: number
    /** Bot's invitations count */
    added: number
    /** Bot's prefix */
    prefix: string
    /** Permissions required by this bot */
    permissions: number
    /** Bot's tags */
    tags: string[]
    /** Bot's developers */
    developers: string[]
    /** Links in the Bot's profile */
    links: {
      discord: string | null
      github: string | null
      site: string | null
    }
    /** Discord API library that bot uses  */
    library: string | null
    /** Bot's description */
    description: {
      /** Bot's short description */
      short: string
      /** Bot's long description */
      long: string
    }
    /** Bot's badge Id */
    badge: number
    /** Bot's statistics */
    stats: {
      /** Bot's servers count */
      servers: number
      /** Bot's shards count */
      shards: number
      /** Bot's users count */
      users: number
    }
    /** Bot's current status (offline or online) */
    status: string
  }
}
