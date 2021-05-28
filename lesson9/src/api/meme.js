export default axios => ({
  getAll() {
    return axios.get("https://api.imgflip.com/get_memes");
  },
});
