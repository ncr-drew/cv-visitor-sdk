import fetchJson from './fetchJson';

const dev = process.env.NODE_ENV !== 'production';

class Database {
  constructor(options = {}) {
    const devUrl = options.devUrl || 'http://127.0.0.1:8080';
    const prodUrl = options.prodUrl || 'http://192.168.1.10:8080';

    this.options = options;
    this.url = dev ? devUrl : prodUrl;
  }

  getHeaders() {
    return {
      'cache-control': 'no-cache',
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    };
  }

  fetchVisitors(date) {

    return fetchJson(`${this.url}/getVisitors`).then(data => data);
  }
}

export default Database;
