<template>
    <div>
        <h2>我是首页</h2>
        <p @click="h_click">父组件的属性:{{msg}}</p>
        <slot name="center" :data="list"></slot>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: {
                type: String,
                default: "default!"
            }
        },
        methods: {
            h_click(){
                console.log(this.$root)
                this.$emit('h_click')
            }
        },
        data(){
            return {
                list:[0,1,2]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
