<template>
  <div class="login-box">
    <div>登录到 kanban</div>
    <div><Input v-model="value" placeholder="用户名" style="width: 300px"></Input></div>
    <div><Button type="primary" @click="login">登录</Button></div>
  </div>
</template>
<style>
@import './login.css';
</style>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        },
        methods: {
            login () {
                this.$router.push('/login')
            }
        }
    }
</script>