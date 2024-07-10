import { HttpSerivce } from './http.service';

class UserService extends HttpSerivce {
  constructor() {
    super();
  }

  async loginUser(fields) {
    const response = await this.post({
      url: 'api/user/auth',
      data: {...fields},
    });

    return response.data;
  }

  async verifyUser(fields) {
    const response = await this.post({
      url: 'api/user/verify',
      data: {...fields},
    });

    return response.data;
  }

  async resetUser(fields, token) {
    const response = await this.post({
      url: `api/user/reset/${token}`,
      data: {...fields},
    });

    return response.data;
  }

  async registerUser(fields) {
    const response = await this.post({
      url: 'api/user/register',
      data: {...fields},
    });

    return response.data;
  }

  async activateUser(token) {
    const response = await this.get({
      url: `api/user/activate/${token}`,
    });

    return response.data;
  }

  async changeData(fields) {
    this.interceptors();

    const response = await this.post({
      url: 'api/user/update',
      data: {...fields},
    });

    return response.data;
  }
}

export const userService = new UserService();
export default UserService;
