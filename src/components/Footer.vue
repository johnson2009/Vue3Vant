<template>
    <van-tabbar
    class="bodywidth"
    v-model="active"
    @change="onChange">
    <van-tabbar-item name="home" icon="wap-home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item name="homework" icon="records" to="/homework">TODO</van-tabbar-item>
    <van-tabbar-item name="schedule" icon="todo-list-o" to="/schedule">日程</van-tabbar-item>
    <van-tabbar-item name="calendar" icon="calendar-o" to="/calendar">日历</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang='ts'>
    import {ref} from 'vue';
    import {Toast} from 'vant';

    const active = ref(0);
    const onChange = (index) => Toast('标签${index}')
</script>