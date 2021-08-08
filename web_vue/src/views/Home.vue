<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="hello" :msg="msg" @h_click="click()">
            <p slot="center">插槽</p>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      lxl:"lxl",
      msg:"111"
    }
  },
  methods:{
    click(){
      console.log(11111)
    }
  }
}
</script>
