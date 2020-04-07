<template>
  <div class="bk" :style="{backgroundImage:bg }"></div>
</template>

<script>
export default {
  data() {
    return {
      timer: null, // 定时器名称  
      bk: 1
    }
  },
  computed: {
    bg() {
      return 'url(' + require('@/assets/carousel-' + this.bk + '.jpg') + ')' 
    }
  },
  created() {
    this.timer = setInterval(this.getBk, 4000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    getBk() {
      if (this.bk === 6)
        this.bk = 1
      else
        this.bk++
    }
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
        background-size: cover;
        transition: all 1s;
    }

</style>
