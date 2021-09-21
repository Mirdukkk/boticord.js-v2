import { BotCommentResponse } from '@src/rest/BotCommentResponse'
import { ServerCommentResponse } from '@src/rest/ServerCommentResponse'

/** Response object from /profile/:userId/comments endpoint */
export interface UserCommentsResponse {
  /** User's comments left under bots pages */
  bots: BotCommentResponse[]
  /** User's comments left under servers pages */
  servers: ServerCommentResponse[]
}
