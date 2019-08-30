<template>
  <div class="products">
    <div class="container">
        <div class="intro">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h3>Products Page</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vero, commodi quibusdam laudantium aliquid 
              </p>
            </div>
            <div class="col-md-6">
              <img src="../../public/imgs/svg/products.svg" alt="Image Products" class="img-fluid">
            </div>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
