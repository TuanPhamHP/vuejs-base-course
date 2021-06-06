const BASE_URL = process.env.VUE_APP_BASE_URL;
// https://cors-anywhere.herokuapp.com/
export default axios => ({
  getAll(query = {}) {
    return axios
      .get(`${BASE_URL}/get_memes`, {
        params: query,
      })
      .then(
        res => {
          return res;
        },
        err => {
          return err;
        }
      );
    // chỉ trả về 1 request . luôn là promise
  },
  createNewImage(_params) {
    // post | put
    return axios
      .post(`${BASE_URL}/caption_image`, _params, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .then(
        res => {
          return res;
        },
        err => {
          return err;
        }
      );
  },
});
