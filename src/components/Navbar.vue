<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">INVERSO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                  <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/about" class="nav-link" href="#">Aims</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/about" class="nav-link" href="#">Management</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/about" class="nav-link" href="#">About</router-link>
              </li>
            </ul>
        </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar{
    
    margin:2%;
    margin-bottom: 0;
    
  }

  .navbar-nav{
    margin-left: 5%;
  }

  .navbar-nav li.nav-item{
    padding-right: 10%;
  }

  a.navbar-brand{
    color: #b13aef;
    font-weight: 700;
  }
</style>
