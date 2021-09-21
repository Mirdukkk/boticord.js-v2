import { ClientOptions } from '@src/core/ClientOptions'
import { UserProfileResponse } from '@src/rest/UserProfileResponse'
import { request } from 'undici'
import { Endpoints } from '@src/core/Endpoints'
import { UserCommentsResponse } from '@src/rest/UserCommentsResponse'
import { UserBotResponse } from '@src/rest/UserBotResponse'

export class UsersManager {

  constructor(
    public options: ClientOptions
  ) {}

  /**
   * Get user profile information
   * @param id - user id
   * */
  async profile(id: string): Promise<UserProfileResponse> {
    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/profile/${id}`, {
      method: 'GET',
      headers: {
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }

  /**
   * Get user comments
   * @param id - user id
   * */
  async comments(id: string): Promise<UserCommentsResponse> {
    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/profile/${id}/comments`, {
      method: 'GET',
      headers: {
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }

  /**
   * Get user bots
   * @param id - user id
   * */
  async bots(id: string): Promise<UserBotResponse[]> {
    const response = await request(`${Endpoints.MAIN_API}/v${this.options.apiVersion}/bots/${id}`, {
      method: 'GET',
      headers: {
        Authorization: this.options.token
      }
    })

    return response.body.json()
  }
}
