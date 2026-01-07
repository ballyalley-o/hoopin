import axios from 'axios'
import { SPORTSDATA_DIR, sportsdataHeaders } from 'config/dir/sportsdata'
import { slugigy } from 'utility'

export const sourceService = {
  async getPlayerActiveAll() {
    const url      = SPORTSDATA_DIR.PLAYERS_ACTIVE
    const { data } = await axios.get(url, { headers: sportsdataHeaders() })
    return data
  },
  async getPlayerDetailAll() {
    const url      = SPORTSDATA_DIR.PLAYER_DETAILS
    const { data } = await axios.get(url, { headers: sportsdataHeaders() })
    return data
  },
  async getPlayerInjuredAll() {
    const url      = SPORTSDATA_DIR.INJURED_PLAYERS
    const { data } = await axios.get(url, { headers: sportsdataHeaders() })
    return data
  },
  async getAllStarAll(season: string) {
    const url      = SPORTSDATA_DIR.ALL_STARS(season ?? new Date().getFullYear())
    const { data } = await axios.get(url, { headers: sportsdataHeaders() })
    return data
  },
  /**
   * Fetch NBA free agents from SportsData.io.
   * Returns the API payload directly.
   */
  async getFreeAgents() {
    const url      = SPORTSDATA_DIR.PLAYERS_FREEAGENTS
    const { data } = await axios.get(url, { headers: sportsdataHeaders() })
    return data
  }
}
