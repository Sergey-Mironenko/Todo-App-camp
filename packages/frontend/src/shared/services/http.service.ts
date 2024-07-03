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

  private populateTokenToHeaderConfig() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      return {
        'Authorization': `Bearer ${accessToken}`,
      };
    }

    return {};
  }

  async get(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      }
    }
    return await this.fetchingService.get(this.getFullApiUrl(config.url), config);
  }

  async post(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      }
    }

    return await this.fetchingService.post(this.getFullApiUrl(config.url), config.data, config);
  }

  async put(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      }
    }
    return await this.fetchingService.put(this.getFullApiUrl(config.url), config.data, config);
  }

  async patch(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      }
    }
    return await this.fetchingService.patch(this.getFullApiUrl(config.url), config.data, config);
  }

  async delete(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      }
    }
    return await this.fetchingService.patch(this.getFullApiUrl(config.url), config.data, config);
  }
}

export const httpSerivce = new HttpSerivce();
export default httpSerivce;
