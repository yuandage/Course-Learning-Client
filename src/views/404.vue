<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404" height="390" width="710">

      <div class="bullshit">
        <div class="bullshit__oops bullshit-margin">OOPS!</div>
       
        <div class="bullshit__headline bullshit-margin" >{{ message }}</div>
        <a href="/" class="bullshit__return-home bullshit-margin">Back to home</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Page404',
    computed: {
      message() {
        return 'The webmaster said that you can not enter this page...'
      }
    }
  }
</script>

<style>
  .wscn-http404-container {
    width: 1200px;
    margin: 0 auto;
  }

  .wscn-http404 {
    display: flex;
    justify-content: center;
    overflow: hidden;

  }

  .wscn-http404 img {
    margin-top: 150px;
  }

  .bullshit {
    width: 400px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

   .bullshit a{
     color: #00b5e5;
     text-decoration: none;
   }

  .bullshit-margin{
    margin: 10px 0;
  }
</style>