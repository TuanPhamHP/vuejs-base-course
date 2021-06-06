<template>
  <div class="home">
    Home Works
    <p>{{ onProgress ? "Đang đợi Api" : " Đã xong api" }}</p>
    <Pagination :handle-change-page="handleChangePage" :handle-change-per-pages="handleChangePerPage" :pagination="pagination"></Pagination>
    <p>Hiện nay data đang có {{ listImage ? listImage.length : 0 }} ảnh</p>
    <div class="row">
      <div class="img-wr col-3 py-2" v-for="image in listImage.slice(-40)" :key="image.id">
        <img :src="image.url" :alt="image.name" class="w-100" @click="handleSelectImage(image)" />
      </div>
    </div>

    <div v-if="onLoadingPage">
      <h1>Loading</h1>
    </div>
  </div>
</template>

<script>
  //  created vs mounted -- là lifecycle hooks
  //  tìm hiểu về fecthData vs data
  // import axios from "axios";
  import { Pagination } from "@/components/Shared";
  export default {
    name: "Home",
    components: {
      Pagination,
    },
    data() {
      return {
        listImage: [],
        onProgress: false,
        onLoadingPage: false,
        pagination: {
          count: 0,
          current_page: 1,
          links: {},
          per_page: 15,
          total: 0,
          total_pages: 100,
        },
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

        this.onLoadingPage = true;
        const response = await this.$api.image.getAll(body);
        this.onLoadingPage = false;

        if (!response) {
          return;
        }
        try {
          if (response.status >= 400) {
            // code xu li loi
            return;
          }
          this.listImage = [...response.data.data.memes];
        } catch (error) {
          console.log(error);
        }
      },

      // env
      // handleNavigateTo(`/image/${image.id}`)
      handleNavigateTo(_url) {
        // this.$router.push(_url + `?name=${null}&age=`);
        this.$router.push(_url);
      },
      handleSelectImage(_image) {
        // this.$store.commit("SETSELECTEDIMAGE", _image);
        this.handleNavigateTo(`/image/${_image.id}`);
      },
      handleChangePerPage(_val) {
        console.log(_val);
        this.pagination = {
          ...this.pagination,
          per_page: _val,
          current_page: 1,
          page: 1,
        };
      },
      handleChangePage(_val) {
        console.log(_val);
        this.pagination = {
          ...this.pagination,
          current_page: _val,
          page: _val,
        };
      },
    },
  };
</script>
