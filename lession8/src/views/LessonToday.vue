<template>
  <div>
    <p>đây là view lesson today :</p>
    <p>Hiện tại là {{ date }}</p>
    <!-- 
      State : được khởi tạo ở chính components
      actions : CRUD với state .

      Props : là state từ components này truyền qua components khác
      VD : Component A có data: {color : #ff0000}
      Component A truyền {color : #ff0000} cho B
      Tại A thì user có quyền CRUD với {color : #ff0000} // State
      Nhưng tại B thì user chỉ có quyền Read với {color : #ff0000} // Props
      C : Create
      R : Read 
      U : Update 
      D : Delete
     -->
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
