<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div>
            <el-button @click="clik_bt">el-button</el-button>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <p>{{$store.state.counter}}</p>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        methods: {
            test: () => new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({k: "hello word!"});
                    reject("yes");
                }, 1000)
                // throw "sb";

            }).then(results => {
                console.log(results)
            })
                .catch(err => {
                    console.log(err)
                }),
            clik_bt(){this.$store.commit('add')}
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
