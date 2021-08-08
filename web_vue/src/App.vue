<template>
    <div id="app">
        <router-link to="/About" replace active-class="active">About</router-link>
        <router-link to="/Home" tag="button">Home</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
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
