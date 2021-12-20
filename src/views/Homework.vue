<template>
  <div class="home">
    <Header title="我的TODO" />
    <div>
    <van-button type="success">主要按钮</van-button>
  </div>
  <h1>WorkList</h1>

      <WorkList />
      <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import WorkList from "@/components/WorkList.vue";
import Footer from '@/components/Footer.vue';
import Header from "@/components/Header.vue";



/* export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    WorkList,
  },
}); */
</script>
