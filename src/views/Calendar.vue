<template>
  <div class="home">
    <Header title="我的日历" />
    <div>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
<van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
  <h1>Schedule</h1>
      <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import WorkList from "@/components/WorkList.vue";
import Footer from '@/components/Footer.vue';
import Header from "@/components/Header.vue";
import { ref } from 'vue';

const date = ref('');
    const show = ref(false);

    const formatDate = (date) => '${date.getMonth() + 1}/${date.getDate()}';
    const onConfirm = (value) => {
      show.value = true;
      date.value = formatDate(value);
    }
</script>
