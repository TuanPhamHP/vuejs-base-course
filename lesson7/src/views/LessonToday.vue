<template>
  <!-- code html tại đây -->
  <!-- Tạo mới router view -->
  <!-- B1 : tạo ra components -->
  <!-- B2 : export components và import lại vào router -->
  <!-- B3 : tạo mới router và gán router với components vừa export -->

  <!-- Tạo mới và sử dụng components -->
  <!-- B1 : Tạo file components (dạng SFC/OFC) -->
  <!-- B2 : export components và import lại vào Components khác -->
  <!-- B3 : truyền props/slot tùy ý -->
  <div>
    <p>đây là view lesson today :</p>
    <p>Hiện tại là {{ date }}</p>
  </div>
</template>

<script>
  // vue && js
  export default {
    data() {
      return {
        date: new Date(),
      };
    },
  };
</script>

<style></style>
