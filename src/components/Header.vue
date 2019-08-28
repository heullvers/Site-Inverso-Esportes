<template>
  <div class="header">
    <div class="container">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
                <div class="header-content">
                    <h1 class="header-title">
                        Inverso Esportes
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor 
                        ducimus impedit minima neque commodi ab vel aperiam. Modi atque assumenda doloribus neque quis eius aliquid adipisci culpa aliquam nisi.
                    </p>
                    <div class="header-btn mt-5">
                        <button class="btn btn-info mr-4">Explore</button>
                        <button class="btn btn-outline-secondary">Products</button>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="../../public/imgs/header/download.svg" alt="Feature Image">
                </div>
            </div>
        </div>

    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero{
    width: 100%;
    height: 500px;
    text-align: left;
  }
    
</style>
