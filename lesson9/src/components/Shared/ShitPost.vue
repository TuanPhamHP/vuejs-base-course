<template>
  <div class="w-100 row mx-0">
    <div v-for="task in todoList" :key="task.id" class="alert col-xl-4 col-lg-6 col-md-6" :class="task.status === 1 ? 'alert-primary' : 'alert-success'" role="alert">
      <p class="title font-weight-bold mb-2">{{ task.title }} - {{ getCateById(task.category) }}</p>
      <span class="timmer">{{ parseDate(task.created_at) }}</span>
      <button class="btn btn-info" @click="setNewAvatar">Click me to force state change</button>
      <p>Created by: {{ userInit.name }}</p>
      <p>{{ counter }}</p>
      <img :src="avatarUser" alt="" />
      <p class="content-p mt-3">{{ task.content }}</p>

      <div class="button-group">
        <!-- <button type="button" class="btn btn-success" @click="updateTask('finish', task)">
          {{ task.status === 1 ? "Hoàn Thành" : "Đặt lại" }}
        </button> -->
        <!-- <button @click="updateText">test emit từ con vào cha</button> -->
        <button v-if="task.status === 1" type="button" class="btn btn-success" @click="updateTask('finish', task)">Hoàn Thành</button>
        <button v-else type="button" class="btn btn-success" @click="updateTask('redo', task)">Đặt lại</button>
        <button type="button" class="btn btn-danger ml-3" @click="updateTask('remove', task)">Xóa</button>
      </div>
    </div>
  </div>
</template>

<script>
  // Khi truyền 1 sự kiện từ components này sang components khác thì gọi là event bus
  // VD quan hệ 2 thằng A - B là cha con thì sẽ có 2 dạng event bus
  // D1 : từ cha -> con
  // D2 : từ con -> cha

  import { tDate } from "validation_t/src";
  import { mapState } from "vuex";

  export default {
    props: ["todoList", "categories", "handleFinishTask", "handleUpdateTask"],
    data() {
      return {
        avatar: "",
      };
    },
    computed: {
      ...mapState({
        avatarUser: state => state.avatar,
        userInit: state => state.userInit,
        listProductByIds: state => state.products.listProductByIds,
        counter: state => state.counter,
      }),
      counterComputed() {
        return Math.random();
      },
    },
    mounted() {
      console.log(this.$store, " store");
    },
    methods: {
      setNewAvatar() {
        console.log("https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/10/meme-hai-huoc-moi-nhat-142-696x385.jpg?fit=696%2C20000&quality=95&ssl=1");
      },
      parseDate(_date) {
        // default - optional
        let txt = "";
        let customDate = tDate.formatDateCustomize(_date);
        txt = `${customDate.day},${customDate.dd} - ${customDate.MMM}, ${customDate.yyyy}`;
        return txt;
      },
      getCateById(_cateId) {
        return this.categories.filter(o => {
          return o.id === _cateId;
        }).length
          ? this.categories.filter(o => {
              return o.id === _cateId;
            })[0].text
          : "Không có danh mục";
      },
      updateTask(_type, _task) {
        this.handleUpdateTask(_type, _task);
      },
      updateText() {
        let txt = Math.random();
        this.$emit("handleUpdateText", txt);
        // param1 : Tên của custom-event mà thằng con sẽ trigger
        // param2(optional) : biến truyền vào nếu có
      },
    },
  };
  // CRUD
</script>

<style></style>
