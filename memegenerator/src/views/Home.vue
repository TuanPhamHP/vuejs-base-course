<template>
  <div class="home">
    Home Works
    <p>{{ onProgress ? "Đang đợi Api" : " Đã xong api" }}</p>
    <p>Hiện nay data đang có {{ listImage ? listImage.length : 0 }} ảnh</p>
  </div>
</template>

<script>
  //  created vs mounted -- là lifecycle hooks
  //  tìm hiểu về fecthData vs data
  // import axios from "axios";
  export default {
    name: "Home",
    components: {},
    data() {
      return {
        listImage: null,
        onProgress: false,
      };
    },
    created() {
      console.log(process.env.VUE_APP_BASE_URL);
      this.getAllImage();
      this.$store.dispatch("getAllImage");
    },
    methods: {
      //  3 cách để thực hiện 1 api.
      // C1 : gọi trực tiếp api
      // getAllImage() {
      //   // axios.method.then.catch.finally
      //   // axios.config.then.catch.finally
      //   axios
      //     .get(`https://api.imgflip.com/get_memes`)
      //     .then(
      //       response => {
      //         this.listImage = [...response.data.data];
      //       },
      //       error => {
      //         console.log(error);
      //         console.log(`Lỗi api`);
      //       }
      //     )
      //     .catch(err => {
      //       console.log(err);
      //     });
      // },

      // C2 : Build hẳn 1 api repository
      async getAllImage() {
        const body = { id: 1, val: "c" };
        this.onProgress = true;
        const response = await this.$api.image.getAll(body);
        console.log(response);
      },
      // env
    },
  };
</script>
