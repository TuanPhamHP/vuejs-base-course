let myRoot = new Vue({
  el: "#root",
  data() {
    return {
      message: "Hello Vue",
      counter: 1,
      nullable: null,
      bl: false,
      vehical: null,
      listVehical: [
        {
          id: 1,
          text: "Xe máy",
        },
        {
          id: 2,
          text: "Ô tô",
        },
        {
          id: 3,
          text: "Xe Bus",
        },
      ],
    };
  },

  methods: {
    getData() {
      return "get data works";
    },
    getVehicalText(_id) {
      if (!_id) {
        return "giá trị không phù hợp";
      }
      let ar = this.listVehical.filter(o => {
        return o.id === +_id;
      });
      return ar.length ? ar[0].text : "Không có dữ liệu khớp";
    },
    setMessage(_message) {
      this.message = _message;
    },
  },
});

// Class
// new : là câu lệnh khởi tạo 1 instance của Class
// VD : Lớp Người Việt Nam
// let Người Hà Nội = new Người Việt Nam
// ngôn ngữ :  Tiếng việt,
// Giọng bản xứ

// state
// this -> đại diện cho object chứa nó .
// re-render : khi state của vue thay đổi thì vue instance luôn re-render
// Binding :

// 1 : Khi input change thì message không được update theo
// 2 : Khi message change thì input đã được update theo
// đây gọi là ràng buộc 1 chiều . One way binding

// Ràng buộc 2 chiều : Two way binding
