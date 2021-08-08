<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div>
            <el-button @click="clik_bt">el-button</el-button>
        </div>
        <HelloWorld ref="hello" :msg="msg" @h_click="click()">
            <p slot="center">插槽</p>
        </HelloWorld>
        <select name="abc" v-model="hobbies">
            <option value="苹果">苹果</option>
            <option value="橘子">橘子</option>
        </select>
        <br>
        我喜欢的水果:{{hobbies}}
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        data() {
            return {
                messages: "200ok",
                hobbies: [],
                msg: "father!",
                num: 0
            }
        },
        methods: {
            clik_bt() {
                console.log(this.$refs["hello"])
            },
            click() {
                this.num ++
            }

        },
        watch: {
            num(newvalue, oldvalue) {
                console.log(newvalue)
                console.log(oldvalue)
            }
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
