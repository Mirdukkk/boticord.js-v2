/** Response object from /search/server endpoint */
export interface ServersSearchResponse {
  /** Id of the server */
  serverID: string
  /** Server's name */
  serverName: string
  /** Server's avatar url (https://cdn.discordapp.com) */
  serverAvatar: string | null
  /** Server's custom banner url */
  imageURL: string | null
  /** Customized card id */
  customizeCard: number
  /** Server's website badge. Empty string when nothing */
  badge: string
  /** Server's description */
  description: string
  /** Discord's invitation code for the server */
  invite: string
  /** Server's tags */
  tags: string[]
}
