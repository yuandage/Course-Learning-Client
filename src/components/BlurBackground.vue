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


<!--<template>-->
<!--  <div class="bk"></div>-->
<!--</template>-->

<!--<style>-->
<!--  .bk {-->
<!--    z-index: -100;-->
<!--    opacity: 0.2;-->
<!--    width: 100%;-->
<!--    min-width: 1200px;-->
<!--    height: 100%;-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    background-color: #f44336;-->
<!--    animation: bg-color 100s infinite;-->
<!--    -webkit-animation: bg-color 200s infinite;-->
<!--  }-->

<!--  @-webkit-keyframes bg-color {-->
<!--    0% {-->
<!--      background-color: #f44336;-->
<!--    }-->
<!--    5% {-->
<!--      background-color: #e91e63;-->
<!--    }-->
<!--    10% {-->
<!--      background-color: #9c27b0;-->
<!--    }-->
<!--    15% {-->
<!--      background-color: #673ab7;-->
<!--    }-->
<!--    20% {-->
<!--      background-color: #3f51b5;-->
<!--    }-->
<!--    25% {-->
<!--      background-color: #2196f3;-->
<!--    }-->
<!--    30% {-->
<!--      background-color: #03a9f4;-->
<!--    }-->
<!--    35% {-->
<!--      background-color: #00bcd4;-->
<!--    }-->

<!--    40% {-->
<!--      background-color: #009688;-->
<!--    }-->
<!--    45% {-->
<!--      background-color: #4caf50;-->
<!--    }-->
<!--    50% {-->
<!--      background-color: #8bc34a;-->
<!--    }-->
<!--    55% {-->
<!--      background-color: #cddc39;-->
<!--    }-->
<!--    60% {-->
<!--      background-color: #ffeb3b;-->
<!--    }-->
<!--    65% {-->
<!--      background-color: #ffc107;-->
<!--    }-->
<!--    70% {-->
<!--      background-color: #ff9800;-->
<!--    }-->
<!--    75% {-->
<!--      background-color: #ff5722;-->
<!--    }-->

<!--    80% {-->
<!--      background-color: #795548;-->
<!--    }-->
<!--    85% {-->
<!--      background-color: #9e9e9e;-->
<!--    }-->
<!--    90% {-->
<!--      background-color: #607d8b;-->
<!--    }-->
<!--    95% {-->
<!--      background-color: #1a5e7e;-->
<!--    }-->

<!--    100% {-->
<!--      background-color: #f44336;-->
<!--    }-->
<!--  }-->

<!--  @keyframes bg-color {-->
<!--    0% {-->
<!--      background-color: #f44336;-->
<!--    }-->
<!--    5% {-->
<!--      background-color: #e91e63;-->
<!--    }-->
<!--    10% {-->
<!--      background-color: #9c27b0;-->
<!--    }-->
<!--    15% {-->
<!--      background-color: #673ab7;-->
<!--    }-->
<!--    20% {-->
<!--      background-color: #3f51b5;-->
<!--    }-->
<!--    25% {-->
<!--      background-color: #2196f3;-->
<!--    }-->
<!--    30% {-->
<!--      background-color: #03a9f4;-->
<!--    }-->
<!--    35% {-->
<!--      background-color: #00bcd4;-->
<!--    }-->

<!--    40% {-->
<!--      background-color: #009688;-->
<!--    }-->
<!--    45% {-->
<!--      background-color: #4caf50;-->
<!--    }-->
<!--    50% {-->
<!--      background-color: #8bc34a;-->
<!--    }-->
<!--    55% {-->
<!--      background-color: #cddc39;-->
<!--    }-->
<!--    60% {-->
<!--      background-color: #ffeb3b;-->
<!--    }-->
<!--    65% {-->
<!--      background-color: #ffc107;-->
<!--    }-->
<!--    70% {-->
<!--      background-color: #ff9800;-->
<!--    }-->
<!--    75% {-->
<!--      background-color: #ff5722;-->
<!--    }-->

<!--    80% {-->
<!--      background-color: #795548;-->
<!--    }-->
<!--    85% {-->
<!--      background-color: #9e9e9e;-->
<!--    }-->
<!--    90% {-->
<!--      background-color: #607d8b;-->
<!--    }-->
<!--    95% {-->
<!--      background-color: #1a5e7e;-->
<!--    }-->

<!--    100% {-->
<!--      background-color: #f44336;-->
<!--    }-->
<!--  }-->

<!--</style>-->
