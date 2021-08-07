<template>
    <div class="lxl">
        <h1 v-for="(item,i) in list" :key="i">This is {{item}}</h1>
        <h1>{{$route.query.name}}</h1>
        <h1>{{$route.query.age}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'lxl',
        data() {
            return {
                list: [1, 2, 3]
            }

        }
    }
</script>

<style>

</style>