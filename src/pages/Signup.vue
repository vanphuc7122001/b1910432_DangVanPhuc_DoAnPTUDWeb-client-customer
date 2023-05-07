<template>
    <div class="container my-4" style="width: 500px;">
        <h4 class="text-center">Đăng ký</h4>

        <form @submit.prevent method="post">
            <div class="form-group mb-3">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Nhập name" name="email" required v-model="name">
            </div>
            <div class="form-group mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Nhập email" name="email" required v-model="email">
            </div>
            <div class="form-group mb-3">
                <label for="password">Mật Khẩu</label>
                <input type="password" class="form-control" id="password" placeholder="Nhập password" name="password"
                    required v-model="password">
            </div>
            <div class="form-group mb-3">
                <label for="phone">Phone number</label>
                <input type="text" class="form-control" id="name" placeholder="Nhập name" name="email" required v-model="phone_number">
            </div>
            <div class="form-group mb-3">
                <label for="adress">Adress</label>
                <input type="text" class="form-control" id="name" placeholder="Nhập name" name="email" required v-model="address">
            </div>
            <button type="submit" class="btn btn-primary w-100" @click="handleSubmit">Đăng Ký</button>
        </form>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')

export default {
    data() {
        return {
           name: "",
           email: "",
           password: "",
           phone_number: "",
           address: ''
        }
    } ,
    methods: {
        async handleSubmit(){
            const user = {
                name : this.name,
                email : this.email,
                password : this.password,
                phone_number : this.phone_number,
                address : this.address,
            }

            console.log(user);
            const res = await this.registerUser(user)
            if(res.success){
                alert('Register user successfully')
                this.$router.push("/");
            }else{
                alert('Register user failed')
                this.$router.push("/");
            }
        },
        ...mapActions({
            registerUser : "actionRegister"
        })
    }

}
</script>

<style></style>