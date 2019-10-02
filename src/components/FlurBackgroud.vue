<template>
 
    <div class="bk" :class="this.$store.state.bk"></div>

</template>

<script>

export default {
     data () {
    return {
    }
  },
 
  methods:{
  }
 

}

</script>


<style>

.bk {
    z-index: -10;
    opacity: 0.3;
    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter: blur(100px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='100');
    width: 100%;
    min-width: 1200px;
    height: 100%;
    position: absolute;
    top: 0px;
    background-image: url(../assets/carousel-1.jpg);
    background-size: cover;
    transition: all .3s;
}

.bk1{
    background-image: url(../assets/carousel-1.jpg);
}

.bk2{
    background-image: url(../assets/carousel-2.jpg);
}

.bk3{
    background-image: url(../assets/carousel-3.jpg);
}

.bk4{
    background-image: url(../assets/carousel-4.jpg);
}

.bk5{
    background-image: url(../assets/carousel-5.jpg);
}

.bk6{
    background-image: url(../assets/carousel-6.jpg);
}

</style>