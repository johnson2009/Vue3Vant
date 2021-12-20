<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
  </div>
  <h1>WorkList</h1>

  <van-row justify="center" v-for="(score,index) in examScores" :key="index">
      <van-col span="8">
       <span>{{score.ExamTypeName}}</span>
      </van-col>
      <van-col span="8">
       <span>{{score.ExamDate}}</span>
      </van-col>
      <van-col span="8">
       <span>{{score.Score}}</span>
      </van-col>
    </van-row>

<van-calendar v-model:show="show" @confirm="onConfirm" />
</template>

<script setup lang="ts">
import { defineComponent, Component } from "vue";

import {ref} from 'vue';

const examScores = [
    {ID: 1, ExamTypeName: "汉语言笔试", ExamDate: "2021-08-10", Score: 70},
    {ID: 2, ExamTypeName: "汉语言笔试", ExamDate: "2021-08-10", Score: 60},
    {ID: 3, ExamTypeName: "汉语言笔试", ExamDate: " 2020-03-10", Score: 67},
    {ID: 4, ExamTypeName: "汉语言笔试", ExamDate: "2019-08-10", Score: 78},
  ];

/* export default defineComponent({
  name: "WorkList",
  
}); */
</script>
