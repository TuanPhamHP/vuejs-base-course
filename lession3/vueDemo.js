let app = new Vue({
  el: "#root",
  data() {
    return {
      message: "Hello Vue!",
      counter: 1,
      form: {
        username: "",
        password: "",
        policy: false,
      },
      checkboxList: [],
      ableToSee: false,
      error: {
        username: "",
      },
      accounts: [
        {
          username: "admin",
          password: "admin123",
          fullName: "Admin",
        },
        {
          username: "admin2",
          password: "admin1234",
          fullName: "Admin 2",
        },
        // dummy data
      ],
    };
  },
  computed: {
    replaceBlankComputed() {
      return this.message.replaceAll(" ", "");
    },
  },
  methods: {
    replaceBlankMethods(_msg) {
      return _msg.replaceAll(" ", "");
    },
    triggerKey(e, c) {
      console.log(e);
      console.log(c);
      // console.log(e.keyCode);
    },
    handleClickMessage(e, message) {
      console.log(e);
      alert(`message clicked : ${message}`);
    },
    togglePasswordType() {
      this.ableToSee = !this.ableToSee;
    },
    isValidForm() {
      this.error = {};
      // trả ra 1 giá trị boolean để kiểm tra có thỏa mãn điều kiện submit không
      // kiểm tra 1 chuỗi có chứa 1 chuỗi khác hay không
      // let b = 'abc'
      // b.includes('bc') => true
      // b.includes('d') => false
      // b.includes(' ') => false

      if (this.form.username.length < 6 || this.form.username.includes(" ")) {
        this.error.username = "Username nhỏ hơn 6 ký tự hoặc chứa khoảng trống. Hãy thử lại !";
        return false;
      }
      if (this.form.password.length < 6 || this.form.password.includes(" ")) {
        return false;
      }
      if (!this.form.policy) {
        return this.form.policy;
      }

      return true;
    },
    onSubmit(event) {
      event.preventDefault();
      const isValid = this.isValidForm();
      console.log(this.checkboxList);
      if (isValid) {
        console.log("form thỏa mãn điều kiện");
      } else {
        console.log("form không thỏa mãn điều kiện");
      }
    },
  },
});

// event handling
// syntax : v-on:evenname="methodname" || @eventname="methodname"
// conditional rendering  +  conditional attributes

// computed
// bắt buộc 1 methods trong computed phải trả ra 1 giá trị .
// rendering . input , output

// v-show : toggle style : display:none;
// v-if : chỉ xuất hiện element nếu condition là true
// click, blur, focus ...
//
//
