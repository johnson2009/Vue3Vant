<template>
<Header title="About" />
  <div class="about">
    <h1>This is an about page</h1>

  </div>
  <Footer />
</template>
<script setup lang="ts">
import { defineComponent } from "vue";
import WorkList from "@/components/WorkList.vue";
import Footer from '@/components/Footer.vue';
import Header from "@/components/Header.vue";
</script>