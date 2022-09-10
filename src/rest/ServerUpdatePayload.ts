/** Payload for server info update at /server endpoint */
export interface ServerUpdatePayload {
  /** Id of the server */
  serverID: string
  /** Request type: 0 = just stats update; 1 = server bump */
  up: 0 | 1
  /** Server status: 0 = monitoring bot added to the server; 1 = monitoring bot does not added */
  status: 0 | 1
  /** Id of the user, that up the server */
  upUserID: string
  /** Channel id where server has been up */
  upChannelID: string
  /** Channel name where server has been up */
  upChannelName: string
  /** New server name */
  serverName?: string
  /** New server avatar */
  serverAvatar?: string
  /** New server owner */
  serverOwnerID?: string
  /** New server owner tag */
  serverOwnerTag?: string
  /** New all members count */
  serverMembersAllCount?: number
  /** New online members count */
  serverMembersOnlineCount?: string
}
