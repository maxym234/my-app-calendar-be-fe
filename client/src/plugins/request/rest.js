import { apiUrlByEnv } from './config';

let _token = null;

export class REST {
  constructor(entity = '', url = apiUrlByEnv) {
    this.URL = `${url}${entity ? `/${entity}` : ''}`;
  }

  static setToken = token => (_token = token);
  static getToken = () => _token;

  dataToURL = (data = {}) => {
    return Object.keys(data)
      .map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
      })
      .join('&');
  };

  request = async ({ url, method, isAuth, body }) => {
    const options = { method, headers: new Headers() };
    const { headers } = options;
    if (isAuth && _token) {
      headers.append('Authorization', `Bearer ${_token}`);
    }
    if (body) {
      if (body instanceof FormData) {
        options.body = body;
      } else {
        headers.append('Content-Type', 'application/json');
        options.body = JSON.stringify(body);
      }
    }

    let resultResponse;
    try {
      const response = await fetch(url, options);
      resultResponse = await response.json();

      return resultResponse;
    } catch (e) {
      throw new Error('Cannot connect to server');
    } finally {
      // console.log(
      //   `\nREST request\nURL: ${url}\nMethod: ${method}\nHeaders:${headers}\nBody: ${JSON.stringify(
      //     body
      //   )}\nResponse: ${JSON.stringify(resultResponse)}\n`
      // );
    }
  };

  get = (path = '', isAuth = false, queries) => {
    return this.request({
      url: `${this.URL}${path ? '/' : ''}${path}${
        queries ? `?${this.dataToURL(queries)}` : ''
      }`,
      method: 'GET',
      isAuth,
    });
  };

  post = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}${path ? '/' : ''}${path}`,
      method: 'POST',
      isAuth,
      body,
    });
  };

  put = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}${path ? '/' : ''}${path}`,
      method: 'PUT',
      isAuth,
      body,
    });
  };

  patch = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}${path ? '/' : ''}${path}`,
      method: 'PATCH',
      isAuth,
      body,
    });
  };

  delete = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}${path ? '/' : ''}${path}`,
      method: 'DELETE',
      isAuth,
      body,
    });
  };
}
