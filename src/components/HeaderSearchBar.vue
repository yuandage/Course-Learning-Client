<template>
    <div class="sample-search-bar">
       <input v-model="searchText" class="input-search" @keydown.enter="doSearch" @input="doSearch">
       <button class="btn-search" @click="doSearch" >
        <img class="icon-search" src="@/assets/icon_search.svg">
       </button>
    </div>
</template>
<script>

export default {
  props: ['search'],
  data () {
    return {
      searchText: this.search
    }
  },
  methods: {
    doSearch () {
      console.log('search doSearch')
    }
  }
}
</script>

<style >

.sample-search-bar{
    width:300px;
    position: relative;
    display: inline-block
}
.input-search{
    outline:none;
    width:100%;
    height:40px;
    border:none;
    box-sizing: border-box;
    vertical-align: bottom;
    font-size:1.2em;
    padding:20px 20px;
    border-radius: 23px;
    background-color: rgba(0,0,0,0.1);
}

.btn-search{
    cursor:pointer;
    outline:none;
    width:60px;
    height:85px;
    right:0;
    position: absolute;
    background: transparent;
    border:none;
}
.icon-search{
    width:20px;
    height:20px;
}
</style>
