<template>
  <div class="container my-4" style="width: 500px;">
  <h4 class="text-center">Đăng Nhập</h4>

  <form @submit.prevent method="post">
    <div class="form-group mb-4">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Nhập email" name="email" required v-model="email">
    </div>
    <div class="form-group mb-4">
        <label for="password">Mật Khẩu</label>
        <input type="password" class="form-control" id="password" placeholder="Nhập password" name="password" required v-model="password">
    </div>
    <button type="submit" class="btn btn-primary w-100" @click="handleLogin">Đăng Nhập</button>
    <p>Nếu không có tài khoản đăng ký <router-link to="/signup">tại đây</router-link></p>
  </form>
</div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')

export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async handleLogin(){
      const user = {
                email : this.email,
                password : this.password
      }
      const res = await this.login(user)
      console.log(res);
      localStorage.setItem('token', res.token)
      localStorage.setItem('id', res.id)
      if(res.success) {
        alert('Login successful')
        this.$router.push("/");
      }else{
        alert('Login failed')
        this.$router.push('/');
      }
    },
    ...mapActions({
      login : "actionLogin"
    })
  }




}
</script>

<style>

</style>