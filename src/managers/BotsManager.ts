import { ClientOptions } from '@src/core/ClientOptions'
import { Adapter } from '@src/adapters/Adapter'
import { BotSearchResponse } from '@src/rest/BotSearchResponse'
import { request } from 'undici'
import { Endpoints } from '@src/core/Endpoints'
import { BotInformationResponse } from '@src/rest/BotInformationResponse'
import { BotCommentResponse } from '@src/rest/BotCommentResponse'
import { BotStatisticsPayload } from '@src/rest/BotStatisticsPayload'

export class BotsManager {

  constructor(
    public adapter: Adapter,
    public options: ClientOptions
  ) {}

  /**
   * Perform bots search
   * @param query - search query
   * */
  async search(query: string): Promise<BotSearchResponse[]> {
    const response = await request(`${Endpoints.MAIN_WEBSITE}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        term: query
      }),
    })

    return response.body.json()
  }

  /**
   * Get bot information using id/short code
   * @param id - bot id or short code
   * */
  async info(id: string): Promise<BotInformationResponse> {
    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/bot/${id}`, {
      method: 'GET',
      headers: {
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }

  /**
   * Get bot comments
   * @param id - bot id
   * */
  async comments(id: string): Promise<BotCommentResponse[]> {
    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/bot/${id}/comments`, {
      method: 'GET',
      headers: {
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }

  /**
   * Post bot statistics
   * @param statsOrAdapter - adapter or raw stats
   * */
  async postStats(statsOrAdapter: Adapter | BotStatisticsPayload): Promise<boolean> {
    const body: Record<string, any> = {
      servers: 0,
      shards: 0,
      users: 0,
    }

    if ('servers' in statsOrAdapter) {
      body.servers = statsOrAdapter.servers
    }

    if ('shards' in statsOrAdapter) {
      body.shards = statsOrAdapter.shards
    }

    if ('users' in statsOrAdapter) {
      body.users = statsOrAdapter.users
    }

    if ('getServers' in statsOrAdapter) {
      body.servers = await statsOrAdapter.getServers()
    }

    if ('getShards' in statsOrAdapter) {
      body.shards = await statsOrAdapter.getShards()
    }

    if ('getUsers' in statsOrAdapter) {
      body.users = await statsOrAdapter.getUsers()
    }

    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/stats`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.options.token
      },
    })

    return (response.statusCode > 199 && response.statusCode < 300) && (await response.body.json()).ok
  }
}
