/** Payload for /stats endpoint */
export interface BotStatisticsPayload {
  /** Bot's servers count */
  servers: number
  /** Bot's shards count */
  shards?: number
  /** Bot's users count */
  users?: number
}
