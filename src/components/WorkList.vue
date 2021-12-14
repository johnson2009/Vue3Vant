<template>
  <div>
      <van-button type="primary">主要按钮</van-button>
  </div>
  <h1>
      WorkList
  </h1>

</template>

<script lang="ts">
import { defineComponent, Component} from "vue";

const examScores=[
    {
        "ExamTypeName": "汉语言笔试",
        "ExamDate": "2021-08-10",
        "Score": 70
    },
    {
        "ExamTypeName": "汉语言笔试",
        "ExamDate": "2021-08-10",
        "Score": 60
    },
    {
        "ExamTypeName":" 汉语言笔试",
        "ExamDate":" 2020-03-10",
        "Score": 67
    },
    {
        "ExamTypeName":" 汉语言笔试",
        "ExamDate": "2019-08-10",
        "Score": 78
    },
];

export default defineComponent({
  name: "WorkList"
});
</script>


