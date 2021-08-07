<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link :to="{path: '/Home/'+lxl,query:{name:1,age:2}}">lxl</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      lxl:"lxl"
    }
  }
}
</script>
