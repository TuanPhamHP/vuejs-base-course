<template>
  <!-- 
  Biết cách quản lý state
  Tạo, truyền components
  Sử dụng event bus

 -->
  <div class="container">
    <p>{{ myText }}</p>
    <div class="form-group search-bar">
      <input v-model="textQuery" type="text" @keyup="handleFilterTaskByText(textQuery)" class="form-control bg-white box-3d" placeholder="Tìm kiếm nhanh ghi chú của bạn" />
    </div>
    <div class="form-group search-bar row">
      <div class="col-6">
        <label for="title" class="label-for-input font-weight-bold text-left d-block">Tiêu đề</label>
        <input id="title" v-model="formData.title" type="text" class="form-control bg-white box-3d" placeholder="Tiêu đề" />
      </div>
      <div class="col-6">
        <label class="label-for-input font-weight-bold text-left d-block">Danh mục</label>
        <select v-model="selectedCate" class="custom-select mb-3 box-3d">
          <option v-for="(item, idx) in categories" :key="idx" :value="item.id">{{ item.text }}</option>
        </select>
      </div>
      <div class="col-12">
        <label for="content" class="label-for-input font-weight-bold text-left d-block">Nội dung</label>
        <textarea id="content" v-model="formData.content" class="form-control bg-white box-3d" rows="3" placeholder="Nội dung"></textarea>
      </div>
      <div class="col-12 mt-3">
        <button type="button" class="btn btn-success w-100" @click="handleSubmit" :disabled="loadingBtn">Thêm mới</button>
      </div>
      <div class="taskList mt-4 col-12">
        <TaskList :todo-list="filterList || todoList" :categories="categories" :handle-finish-task="handleFinishTask" :handle-update-task="handleUpdateTask" @handleUpdateText="setText" />
      </div>
    </div>
  </div>
</template>

<script>
  // l1 : search local - search phía client
  // l2 : search sever
  // watching data
  // 1 : search nhưng xài computed
  // 2 : improve search module - 1 : không phân biệt hoa thường . 2 : giảm số lần search
  // 3 : tạo components để lọc theo categories - lọc kiểu &&
  import TaskList from "@/components/Shared/TaskList";
  export default {
    data() {
      return {
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
      };
    },
    components: {
      TaskList,
    },
    watch: {},
    methods: {
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
      handleFilterTaskByText(_text) {
        if (!_text) {
          this.filterList = null;
          return;
        }
        this.filterList = [
          ...this.todoList.filter(o => {
            return o.title.includes(_text);
          }),
        ];
      },
    },
  };
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
