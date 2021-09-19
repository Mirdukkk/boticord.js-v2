import { Adapter } from '@src/adapters/Adapter'

export class EmptyAdapter implements Adapter {
  getServers(): Promise<number> {
    return Promise.resolve(0)
  }

  getShards(): Promise<number> {
    return Promise.resolve(0)
  }

  getUsers(): Promise<number> {
    return Promise.resolve(0)
  }
}
