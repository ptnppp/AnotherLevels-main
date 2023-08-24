<template>
  <div class="for-creator10">
    <div class="for-creator-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "ForCreator2",
  });
</script>
<style scoped>
  .for-creator-child {
    position: absolute;
    top: -0.41px;
    left: 0px;
    border-radius: var(--br-33xl);
    background-color: var(--warning-default);
    width: 6639.39px;
    height: 89.27px;
  }
  .for-creator10 {
    position: relative;
    border-radius: var(--br-21xl);
    width: 100%;
    height: 89px;
    overflow: hidden;
  }
</style>
