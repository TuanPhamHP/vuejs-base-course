<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/baihoc">Bai hoc</router-link>
    </div>
    <!-- <div>
      c1 SPA : Single Page Application Điểm mạnh : Tốc độ nhanh . Mượt . Điểm yếu : Không hỗ trở tốt cho SEO = Search Engine Optimization Phù hợp dùng cho 1 : các ứng dụng social 2 : các trang phi lợi
      nhuận 3 : các trình quản lý nội bộ 4 : các ứng dụng phục vụ cho 1 nhóm xác định
    </div>
    <div>c2 Kiến trúc của vue : MVVM M : Model. V : View. VM : View Model. 1 kiến trúc khác là MVC M : Model. V : View. C : Controller</div>
    <div>c3 OFC = One file components SFC = Single file components</div> -->
    <!--  -->
    <router-view />

    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Layouts/Footer";
  export default {
    components: {
      Footer,
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
