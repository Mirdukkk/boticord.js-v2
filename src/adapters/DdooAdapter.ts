import { Adapter } from '@src/adapters/Adapter'
import { Client } from 'discordoo'

export class DdooAdapter implements Adapter {

  constructor(
    public client: Client
  ) {}

  getServers(): Promise<number> {
    return this.client.guilds.cache.size()
  }

  async getShards(): Promise<number> {
    return this.client.internals.sharding.totalShards
  }

  getUsers(): Promise<number> {
    return this.client.users.cache.size()
  }

}

export class ShardedDdooAdapter implements Adapter {

  constructor(
    public client: Client
  ) {}

  getServers(): Promise<number> {
    return this.client.guilds.cache.size({ shard: 'all' })
  }

  async getShards(): Promise<number> {
    return this.client.internals.sharding.totalShards
  }

  getUsers(): Promise<number> {
    return this.client.users.cache.size({ shard: 'all' })
  }

}
