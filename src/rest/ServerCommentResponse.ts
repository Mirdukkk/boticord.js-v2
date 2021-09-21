export interface ServerCommentResponse {
  /** Id of user that posted this comment */
  userID: string,
  /** Comment's text */
  text: string,
  /** Comment's vote Id */
  vote: number,
  /** Whether comment was updated or not */
  isUpdated: boolean,
  /** When isUpdated === true, this will be replaced by updatedAt */
  createdAt?: number
  /** When isUpdated === false, this will be replaced by createdAt */
  updatedAt?: number
}
