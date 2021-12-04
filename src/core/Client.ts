import { Adapter } from '@src/adapters/Adapter'
import { ClientOptions } from '@src/core/ClientOptions'
import { EmptyAdapter } from '@src/adapters/EmptyAdapter'
import { UsersManager } from '@src/managers/UsersManager'
import { BotsManager } from '@src/managers/BotsManager'
import { ServersManager } from '@src/managers/ServersManager'
import { request } from 'undici'
import { Endpoints } from '@src/core/Endpoints'

export class Client {
  public adapter: Adapter
  public options: ClientOptions

  public users: UsersManager
  public bots: BotsManager
  public servers: ServersManager

  private _autopost?: ReturnType<typeof setInterval>

  constructor(options: ClientOptions, adapter?: Adapter) {
    this.options = options

    this.adapter = adapter ?? new EmptyAdapter()

    this.users = new UsersManager(this.options)
    this.bots = new BotsManager(this.adapter, this.options)
    this.servers = new ServersManager(this.options)
  }

  /**
   * Start statistics autopost
   * @param interval - posting interval, in ms. default - 2 * 60 * 60 * 1000 (2 hrs)
   * */
  async botStatsAutopost(interval = 2 * 60 * 60 * 1000): Promise<boolean> {
    if (this._autopost) return false

    if (this.adapter instanceof EmptyAdapter) {
      throw new Error('[BotiCord] Cannot perform autopost without adapter provided')
    }

    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/stats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.options.token
      },
      body: JSON.stringify({
        servers: await this.adapter.getServers() ?? 0,
        users: await this.adapter.getUsers() ?? 0,
        shards: await this.adapter.getShards() ?? 0
      })
    })

    if (response.statusCode === 404) {
      throw new Error('[BotiCord] Invalid API Version provided')
    }

    if (response.statusCode === 403 || response.statusCode === 401) {
      throw new Error('[BotiCord] Invalid token provided')
    }

    this._autopost = setInterval(() => {
      this.bots.postStats(this.adapter)
    }, interval)

    return true
  }

  /** Stop autoposting */
  shutdownAutopost(): boolean {
    if (!this._autopost) return false

    clearInterval(this._autopost)
    this._autopost = undefined

    return true
  }
}
