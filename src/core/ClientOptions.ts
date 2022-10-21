export interface ClientOptions {
  /** BotiCord API token. Use prefix, if apiVersion is 2 {@link https://docs.boticord.top/topics/v1vsv2/} */
  token: string
  /** Which version of the API library will use */
  apiVersion: number
  /** Webhook X-Hook-Key header value */
  webhook?: string
}
