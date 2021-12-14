<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>
      <WorkList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import WorkList from "@/components/WorkList.vue";
import Hello from "@/components/Hello.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    WorkList,
  },
});
</script>
