import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_ZzRIDU6BSdGnKgm1arOu0wjuEXvO2Q2aBrzOtumndiJWMcLS5mJWL7Dm37QM1BRo';

const BASE_URL = `https://api.thecatapi.com/v1/`;
const ENDPOINT = `breeds`;
const ENDPOINT_ID = `images/search`;

export async function fetchBreeds() {
  try {
    const resp = await axios.get(`${BASE_URL}${ENDPOINT}`);
    return resp.data;
  } catch (err) {
    console.log(`err`, err);
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const respId = await axios.get(
      `${BASE_URL}${ENDPOINT_ID}?breed_ids=${breedId}`
    );
    return respId.data[0];
  } catch (err) {
    console.log(`err`, err);
  }
}
