import 'isomorphic-unfetch';

function fetchJson(url, opts) {
  return fetch(url, opts)
    .then(res => res.json())
    .catch(e => console.log('Fetch failed', e));
}

export default fetchJson;
