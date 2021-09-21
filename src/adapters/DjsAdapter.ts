import { Adapter } from '@src/adapters/Adapter'
import { Client, ShardingManager } from 'discord.js'

export class DjsAdapter implements Adapter {

  constructor(
    public client: Client
  ) {}

  async getServers(): Promise<number> {
    return this.client.guilds.cache.size
  }

  async getShards(): Promise<number> {
    return this.client.ws.shards.size
  }

  async getUsers(): Promise<number> {
    return this.client.users.cache.size
  }

}

export class ShardedDjsAdapter implements Adapter {

  constructor(
    public manager: ShardingManager
  ) {}

  async getServers(): Promise<number> {
    const results = await this.manager.broadcastEval(client => client.guilds.cache.size)

    return results.reduce((prev, curr) => prev + curr, 0)
  }

  async getShards(): Promise<number> {
    return this.manager.shards.size
  }

  async getUsers(): Promise<number> {
    const results = await this.manager.broadcastEval(client => client.users.cache.size)

    return results.reduce((prev, curr) => prev + curr, 0)
  }

}
