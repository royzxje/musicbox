import axios from "axios";
import {Innertube} from "youtubei.js"

class ApiService {
  search(query: string) {
    return this.call('search', {
      query,
    }) as Promise<any>
  }

  searchSuggestion(query: string) {
    return this.call('search-suggestions', {
      query,
    }) as Promise<any>;
  }

  async call(endpoint: string, data?: any) {
    const r = await axios(`/api/${endpoint}`, {
      method: 'POST',
      data,
    });
    return r.data;
  }
}

export default new ApiService();
