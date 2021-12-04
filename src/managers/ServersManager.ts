import { ClientOptions } from '@src/core/ClientOptions'
import { request } from 'undici'
import { Endpoints } from '@src/core/Endpoints'
import { ServersSearchResponse } from '@src/rest/ServersSearchResponse'
import { ServerInformationResponse } from '@src/rest/ServerInformationResponse'
import { ServerCommentResponse } from '@src/rest/ServerCommentResponse'
import { ServerUpdatePayload } from '@src/rest/ServerUpdatePayload'
import { ServerUpdateResponse } from '@src/rest/ServerUpdateResponse'

export class ServersManager {

  constructor(
    public options: ClientOptions
  ) {}

  /**
   * Perform servers search
   * @param query - search query
   * */
  async search(query: string): Promise<ServersSearchResponse[]> {
    const response = await request(`${Endpoints.MAIN_WEBSITE}/search/server`, {
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
   * Get server information using id/short code
   * @param id - server id or short code
   * */
  async info(id: string): Promise<ServerInformationResponse> {
    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/server/${id}`, {
      method: 'GET',
      headers: {
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }

  /**
   * Get server comments
   * @param id - server id
   * */
  async comments(id: string): Promise<ServerCommentResponse[]> {
    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/server/${id}/comments`, {
      method: 'GET',
      headers: {
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }

  /**
   * Post server info
   * @param info - server info
   * */
  async postInfo(info: ServerUpdatePayload): Promise<ServerUpdateResponse> {
    if (typeof info.status !== 'number' || typeof info.serverID !== 'string' || typeof info.up !== 'number') {
      throw new Error(
        '[BotiCord] Invalid server update payload. ' +
        '"status" must be a number; ' +
        '"serverID" must be string; ' +
        '"up" must be a number.'
      )
    }

    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/server`, {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }
}
