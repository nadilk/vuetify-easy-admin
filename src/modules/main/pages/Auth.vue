<template>
  <v-container>
    <h2>Auth</h2>
    <v-btn @click="login">Login</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Auth",
  methods: {
    login() {
      this.$services.auth.login({email: "admin"});
    }
  }
}
</script>

<style scoped>

</style>
