<template>
  <div class="for-user10">
    <div class="for-user-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "ForUser2",
  });
</script>
<style scoped>
  .for-user-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-33xl);
    background-color: var(--grayscale-off-white);
    width: 9299.17px;
    height: 89.27px;
  }
  .for-user10 {
    position: relative;
    border-radius: var(--br-21xl);
    width: 100%;
    height: 90px;
    overflow: hidden;
  }
</style>
