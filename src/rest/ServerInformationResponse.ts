/** Response object from /server/:shortCode /server/:serverId endpoint */
export interface ServerInformationResponse {
  /** Id of the server */
  id: string
  /** Server's short code */
  shortCode: string | null
  /** --NOT-DOCUMENTED-- */
  status: string
  /** Server's links */
  links: []
  /** Additional server info */
  information: {
    /** Server's name */
    name: string
    /** Server's avatar URL (https://cdn.discordapp.com) */
    avatar: string
    /** Members information [ all_members, online_members ] */
    members: [ number, number ]
    /** Server Owner tag (cipherka#8404) */
    owner: string
    /** Bump count */
    bumps: number
    /** Server's tags */
    tags: []
    /** Server's links */
    links: {
      /** Discord invitation link */
      invite: string | null
      /** Server's own website */
      site: string | null
      /** Server's youtube channel */
      youtube: string | null
      /** Server's twitch channel */
      twitch: string | null
      /** Server's steam profile */
      steam: string | null
      /** Server's vk profile */
      vk: string | null
    }
    /** Server's short description */
    shortDescription: string | null
    /** Server's badge. Empty string when nothing */
    badge: string
  }
}
