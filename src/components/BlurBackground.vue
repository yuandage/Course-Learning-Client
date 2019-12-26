<template>

    <div class="bk" :class="'bk'+this.bk1" ></div>

</template>

<script>
export default {
    props: ['bk'],
    data() {
        return {
            timer: null, // 定时器名称  
            bk1: 1,
            bk2:this.bk
        }
    },
    methods: {
        getBk() {
                this.bk1++;
                console.log(this.bk1);
          
        }
    },

     watch: {
            bk2: function(newVal,oldVal){
                console.log(newVal);
                 if(newVal==oldVal)
                 {
                     console.log('object');
                    this.timer = setInterval(this.getBk, 100);
                 }
                else
                     this.bk1 = newVal;  //newVal即是chartData
            }
    },
    beforeDestroy() {
        clearInterval(this.timer);
        this.timer = null;
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