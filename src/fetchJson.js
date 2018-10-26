import 'isomorphic-unfetch';

const processResponse = res => {
  if (res.status === 200) {
    try {
      const json = res.json();
      return json;
    } catch (e) {
      console.log('Response was not valid JSON', e);
    }
  }
};

function fetchJson(url, opts) {
  return fetch(url, opts)
    .then(processResponse)
    .catch(e => console.log('Fetch failed', e));
}

export default fetchJson;
