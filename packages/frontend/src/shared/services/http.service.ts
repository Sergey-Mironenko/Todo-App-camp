import axios from 'axios';

export class HttpSerivce {
  constructor(private baseUrl = "http://localhost:3030", private fetchingService = axios, private apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion
  }

  private getFullApiUrl(url) {
    return `${this.baseUrl}/${url}`;
  }

  async get(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
      }
    }
    return await this.fetchingService.get(this.getFullApiUrl(config.url), config);
  }

  async post(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
      }
    }

    return await this.fetchingService.post(this.getFullApiUrl(config.url), config.data, config);
  }

  async put(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
      }
    }
    return await this.fetchingService.put(this.getFullApiUrl(config.url), config.data, config);
  }

  async patch(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
      }
    }
    return await this.fetchingService.patch(this.getFullApiUrl(config.url), config.data, config);
  }

  async delete(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
      }
    }
    return await this.fetchingService.patch(this.getFullApiUrl(config.url), config.data, config);
  }
}

export const httpSerivce = new HttpSerivce();
export default httpSerivce;
