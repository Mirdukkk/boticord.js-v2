/** Success response object for /server endpoint */
export interface ServerUpdateResponse {
  /** Id of the server */
  serverID: string
  /** Response type: 0 = just stats update; 1 = server bump */
  up: 0 | 1
  /** Whether server info updated success or not */
  updated: boolean
  /** Server bump message (on russian language) */
  message: string
}
