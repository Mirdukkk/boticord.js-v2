/** Response object from /bots/:userId endpoint */
export interface UserBotResponse {
  /** Bot's id */
  id: string
  /** Bot's short code */
  shortCode: string | null
}
