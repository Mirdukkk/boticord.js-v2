/** Response object from /profile/:userId endpoint */
export interface UserProfileResponse {
  /** Id of this user */
  id: string
  /** User's custom status */
  status: string | null
  /** User's badge (like STAFF). Empty string when nothing */
  badge: string
  /** User's website link */
  site: string | null
  /** User's vk profile link */
  vk: string | null
  /** User's steam profile link */
  steam: string | null
  /** User's youtube channel link */
  youtube: string | null
  /** User's twitch channel link */
  twitch: string | null
  /** User's git profile link */
  git: string | null
}
