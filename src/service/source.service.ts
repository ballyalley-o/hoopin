import axios from 'axios'
import { SPORTSDATA_DIR, sportsdataHeaders } from 'config/dir/sportsdata'

export const sourceService = {
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
