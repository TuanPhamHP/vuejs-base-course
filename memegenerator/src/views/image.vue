<template>
  <div>
    Image Work
    <img v-if="matchImage" :src="matchImage.url" alt="" />
    <button v-if="matchImage" @click="handleGenerateImage" class="btn btn-info">Test Submit Api</button>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        currentParams: null,
        matchImage: null,
      };
    },
    computed: {
      ...mapState({
        // selectedImage: state => state.selectedImage,
        fakeListDb: state => state.image,
      }),
    },
    created() {
      this.currentParams = this.$route.params;
      // if (!this.selectedImage || !this.selectedImage.url) {
      //   alert("Không có anh được chọn");
      //   this.$router.push("/");
      // }
    },
    watch: {
      currentParams: {
        deep: true,
        handler() {
          if (this.currentParams) {
            const matchImg = this.fakeListDb.filter(o => o.id === this.currentParams.image_id);
            matchImg.length
              ? (() => {
                  this.matchImage = matchImg[0];
                })()
              : (() => {
                  alert("Không có ảnh được chọn");
                  this.$router.push("/");
                })();
          }
        },
      },
    },
    methods: {
      async handleGenerateImage() {
        const body = {
          template_id: this.matchImage ? this.matchImage.id : "",
          username: "TuanPham5",
          password: "becareful123",
          text0: "One does not simply",
          text1: "One does not simply",
        };
        const response = await this.$api.image.createNewImage(body);
        console.log(response);
      },
    },
  };
</script>

<style></style>
