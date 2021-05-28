const BASE_URL = process.env.VUE_APP_BASE_URL;
export default axios => ({
  getAll(_params = {}) {
    return axios
      .get(`${BASE_URL}/get_memes`, {
        params: _params,
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
    return axios.post("https://api.imgflip.com/get_memes", _params).then(
      res => {
        return res;
      },
      err => {
        return err;
      }
    );
  },
});
