<template>
  <div class="home">
    <Navbar></Navbar>
    <Header></Header>
    <Products></Products>
    <AboutUs></AboutUs>
    <Login></Login>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
  export default {
    name: "Home",
    props: {
      msg: String
    },
    components: {
      Login
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
