import fetchJson from './fetchJson';

const dev = process.env.NODE_ENV !== 'production';

class Database {
  constructor(options = {}) {
    const devUrl = options.devUrl || 'http://127.0.0.1:8080';
    const prodUrl = options.prodUrl || 'https://nep-gateway.swenglabs.ncr.com';

    this.options = options;
    this.url = dev ? devUrl : prodUrl;
    this.org = 'vision-store';
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  getHeaders() {
    const { nepUnit, appKey } = this.options;
    return {
      'cache-control': 'no-cache',
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Authorization: `AccessToken ${this.getToken()}`,
      'nep-organization': this.org,
      'nep-enterprise-unit': nepUnit,
      'nep-application-key': appKey,
    };
  }

  fetchToken(username, password) {
    const encoded = btoa(`${username}:${password}`);

    const headers = {
      Authentication: `Basic ${encoded}`,
      'nep-application-key': this.options.appKey,
    };

    return fetchJson(`${this.url}/security/authentication/login`)
      .then(data => data && data.token)
      .then(token => {
        if (!token) return;
        this.setToken(token);
        return token;
      });
  }

  fetchVisitors(date) {
    if (!date) return;

    return fetchJson(`${this.url}/getVisitors`).then(data => data);
  }
}

export default Database;
