<template>
  <div class="container">
    <div class="row">
      <div class="form-login col-12 ">
        <div class="form-group">
          <label for="exampleInputEmail1" class="d-block text-left">Email</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            :rules="rules.email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            @blur="listCheck.push('email')"
            @keyup.exact.13="handleEnterEmail"
          />
          <small v-if="listCheck.includes('email')" class="text-danger error-msg">
            {{ emailError }}
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="d-block text-left">Mật khẩu</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" ref="passwordIp" placeholder="Password" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Nhớ đăng nhập</label>
        </div>
        <button type="submit" class="btn btn-primary" @click="handleLogin">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { tStr } from "validation_t/src";
  export default {
    data() {
      return {
        email: "",
        password: "",
        listCheck: [],
        rules: {
          email: ["req", "validMail"],
          password: ["req"],
        },
      };
    },
    computed: {
      emailError() {
        if (!String(this.email).trim()) {
          return "Không được để trống trường này";
        }
        if (!tStr.isEmail(this.email)) {
          return "Email không đúng định dạng";
        }
        return "";
      },
    },
    methods: {
      handleLogin() {
        this.listCheck.push("email");
        this.listCheck.push("password");

        let valid = this.validLoginForm();
        if (!valid) {
          console.log("Block login process");
          return;
        }
        console.log("LOGIN FIRED");
      },
      handleEnterEmail() {
        this.password ? this.handleLogin() : this.$refs.passwordIp ? this.$refs.passwordIp.focus() : (() => {})();
      },
      validLoginForm() {
        // Promise

        setTimeout(() => {
          console.log("valid done");
          return false;
        }, 1000);
      },
    },
  };
</script>

<style></style>
