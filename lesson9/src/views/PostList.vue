<template>
  <!-- 
  Biết cách quản lý state
  Tạo, truyền components
  Sử dụng event bus

 -->
  <div class="container">
    <div class="form-group search-bar">
      <input v-model="formQuery.textQuery" type="text" class="form-control bg-white box-3d" placeholder="Tìm kiếm nhanh ghi chú của bạn" />
    </div>
    <div class="form-group search-bar row">
      <div class="col-12 mt-3">
        <button type="button" class="btn btn-success w-100" @click="getPost" :disabled="loadingBtn">Lấy data</button>
      </div>
      <p>Now: {{ parseDateToDMY(date) }}</p>
      <div v-html="msg"></div>
      <div class="taskList mt-4 col-12">
        <ShitPost :list-data="listData" />

        <div>
          <p v-if="errMessageReponse">{{ errMessageReponse }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex";
  import { tStr } from "validation_t/src";
  import parseDate from "../mixins/parseDate";
  // import axios from "axios";
  // l1 : search local - search phía client
  // l2 : search sever
  // watching data
  // 1 : search nhưng xài computed
  // 2 : improve search module - 1 : không phân biệt hoa thường . 2 : giảm số lần search
  // 3 : tạo components để lọc theo categories - lọc kiểu &&
  import ShitPost from "@/components/Shared/ShitPost";
  export default {
    data() {
      return {
        msg: "hello kitty", // innerHTML
        date: new Date(), // dd-mm-yyyy
        categories: [
          {
            id: 1,
            text: "Không có",
          },
          {
            id: 2,
            text: "Sở thích",
          },
          {
            id: 3,
            text: "Công việc",
          },
          {
            id: 4,
            text: "Du lịch",
          },
        ],
        statusList: [
          {
            id: 1,
            text: "Mới",
          },
          {
            id: 2,
            text: "Đã xong",
          },
          {
            id: 3,
            text: "Hủy",
          },
        ],
        formData: {},
        selectedCate: null,
        loadingBtn: false,
        todoList: [],
        filterList: null,
        myText: "Hello todo list",
        textQuery: "",
        cateQuery: [],
        formQuery: {
          textQuery: "",
          cateQuery: [],
        },
        listCounter: [{ a: 1 }],
        refQuery: null,
        listData: [],
        errMessageReponse: "",
      };
    },
    mixins: [parseDate],
    // watching data / subscribe
    components: {
      ShitPost,
    },
    computed: {
      ...mapState({
        counter: state => state.counter,
      }),
      ...mapGetters({
        name: "getUserName",
      }),
    },

    watch: {
      //  c1 : methods --- key : fn()
      textQuery(newValue, oldValue) {
        // cung cấp 2 biến : optional
        console.log(newValue, oldValue);
        // param1 : newValue - giá trị mới - sau thay đổi
        // param2 : oldValue - giá trị cũ - trước thay đổi

        if (this.refQuery) {
          clearTimeout(this.refQuery);
        }

        this.refQuery = setTimeout(() => {
          this.handleFilterTaskByText(this.textQuery);
          this.refQuery = null;
        }, 700);
      },
      formQuery: {
        deep: true,
        handler() {
          if (this.refQuery) {
            clearTimeout(this.refQuery);
          }

          this.refQuery = setTimeout(() => {
            this.handleFilterTask();
            this.refQuery = null;
          }, 700);
        },
      },

      // listCounter() {
      //   console.log(this.listCounter);
      // },
      // c2 : object --- key : Object
      listCounter: {
        deep: true, // deep watch or not
        handler() {
          console.log(this.listCounter);
        },
      },
    },
    mounted() {
      const a = "Điệp";
      const b = tStr.removeAscent(a);
      console.log(b.includes("diep"));
    },
    methods: {
      ...mapActions({
        setcounter: "SETCOUNTER",
      }),
      handleSubmit() {
        this.loadingBtn = true;
        let params = { ...this.formData }; // spread ES6
        params.category = this.selectedCate;
        params.created_at = new Date();
        params.status = 1;
        // 1 : mới - 2 : Đã hoàn thành
        params.id = new Date().getTime();
        //  Mọi người tự valid data

        // Fake call api lên sever với khoảng chờ là 1s
        setTimeout(() => {
          this.loadingBtn = false;
          let randomResponse = Math.floor(Math.random() * 10) % 2;
          if (randomResponse) {
            this.resetForm();
            this.todoList.push(params);
            console.log("call api thành công");
          } else {
            console.log("call api thất bại");
          }
        }, 1000);
      },
      resetForm() {
        this.formData = {};
        this.selectedCate = null;
      },
      handleUpdateTask(type, payload) {
        // ví dụ cực kì cơ bản của kiến trúc flux - được sử dụng nhiều trong các state management
        // combine vào 1 hàm và xử lý
        switch (type) {
          case "finish":
            this.handleFinishTask(payload);
            break;
          case "redo":
            this.handleRedoTask(payload);
            break;
          case "remove":
            this.handleRemoveTask(payload);
            break;
          default:
            // exception
            break;
        }
      },
      handleFinishTask(_task) {
        if (!_task) {
          return;
        }
        let ar1 = [...this.todoList];
        // copy -> filter -> thay đổi phần tử đó -> filter -> change
        // copy -> tìm index -> splice tại vị trí đó
        ar1.forEach(o => {
          if (o.id === _task.id) {
            o.status = 2;
          }
        });
        this.todoList = [...ar1];
      },
      handleRedoTask(_task) {
        console.log("on redo");
        if (!_task) {
          return;
        }
        let ar1 = [...this.todoList];
        ar1.forEach(o => {
          if (o.id === _task.id) {
            o.status = 1;
          }
        });
        this.todoList = [...ar1];
      },
      handleRemoveTask(_task) {
        if (!_task) {
          return;
        }
        this.todoList = [
          ...this.todoList.filter(o => {
            return o.id !== _task.id;
          }),
        ];
      },
      setText(_value) {
        this.myText = _value;
        console.log(_value);
      },
      // debounce - 1 function sẽ được thực thi sau 1 khoảng thời gian nếu không bị trigger lại lần nữa.
      // throttle
      handleFilterTaskByText(_text) {
        // 700 - 1200 ms
        //
        console.log("filter triggered");
        if (!_text) {
          this.filterList = null;
          return;
        }
        this.filterList = [
          ...this.todoList.filter(o => {
            return o.title.includes(_text);
          }),
        ];
        // tìm theo cate
      },
      onPushRandomNumber() {
        console.log(Math.random());
        this.listCounter[0].a = Math.random();
      },
      handleFilterTask() {
        console.log("imma filting task with ", this.formQuery);
      },
      handleResetFilter() {
        this.formQuery = {
          textQuery: "",
          cateQuery: [],
        };
      },

      // fetching data
      // getPost() {
      //   this.errMessageReponse = "";
      //   console.log(process.env.VUE_APP_BASE_URL);
      //   axios.get("https://api.imgflip.com/get_memes").then(response => console.log(response.data));
      // },
      async getPost() {
        const response = await this.$api.meme.getAll();
        console.log(response);
      },
    },
  };

  // 1 call api
  // success : push data,

  // fail :
  // 1 : thông báo bằng snackbar. -> nút, hành động thay đổi dữ liệu (C,U,D)
  // 2 : Thông báo tại components. -> bảng biểu. khi data không hợp lệ, 4xx , 5xx
  // v-directive
</script>

<style>
  .box-3d {
    box-shadow: 1px 2px 1px 1px rgb(163 160 160);
  }
  .label-for-input {
    font-size: 18px;
  }
  .text-left {
    text-align: left;
  }
</style>
