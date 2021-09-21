/** Adapters are used for adapting for different libraries */
export interface Adapter {

  /** Client's servers count */
  getServers(): Promise<number>

  /** Client's shards count */
  getShards(): Promise<number>

  /** Client's users count */
  getUsers(): Promise<number>

}
