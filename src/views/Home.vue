<template>
  <div class="home">
    <van-nav-bar
    title="首页"
    fixed=true
    >
    </van-nav-bar>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>
      <WorkList />
      <Hello />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import WorkList from "@/components/WorkList.vue";
import Hello from "@/components/Hello.vue";
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
