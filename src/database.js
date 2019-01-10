import fetchJson from './fetchJson';

const dev = process.env.NODE_ENV !== 'production';

const sortByDate = (a, b) =>
  new Date(b.updatedDateTime) - new Date(a.updatedDateTime);

class Database {
  constructor(options = {}) {
    const devUrl = options.devUrl || 'http://127.0.0.1:8080';
    const prodUrl = options.prodUrl || 'http://192.168.1.10:8080';

    this.options = options;
    this.url = dev ? devUrl : prodUrl;
  }

  fetchVisitors() {
    return fetchJson(`${this.url}/getVisitors`);
  }

  fetchCurrentVisitor() {
    return this.fetchVisitors().then(data => data && data.sort(sortByDate)[0]);
  }

  fetchStats() {
    return fetchJson(`${this.url}/getAnalytics`);
  }

  fetchLowInventory() {
    return fetchJson(`${this.url}/getLowInventory`);
  }

  fetchCart(id) {
    return fetchJson(`${this.url}/getCart?id=${id}`);
  }

  fetchItemsReturned() {
    return fetchJson(`${this.url}/getItemsReturned`);
  }

  fetchPromotions() {
    return fetchJson(`${this.url}/getPromotions`);
  }
}

export default Database;
