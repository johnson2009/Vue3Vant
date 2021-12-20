<template>
    <van-nav-bar
    :title="title"
    :fixed="fixed"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    >
    </van-nav-bar>
</template>
<script setup lang='ts'>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const props = withDefaults(
    defineProps<{
        title:string
        fixed:boolean
    }>(),
    {
        title :"",
        fixed:true
    });

    const fixed: boolean = props.fixed;
    const onClickLeft=()=>history.back();
</script>