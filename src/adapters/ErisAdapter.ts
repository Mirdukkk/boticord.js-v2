import { Adapter } from '@src/adapters/Adapter'
import { Client } from 'eris'

export class ErisAdapter implements Adapter {

  constructor(
    public client: Client
  ) {}

  async getServers(): Promise<number> {
    return this.client.guilds.size
  }

  async getShards(): Promise<number> {
    return this.client.shards.size
  }

  async getUsers(): Promise<number> {
    return this.client.users.size
  }

}
