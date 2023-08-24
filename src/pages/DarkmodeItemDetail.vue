<template>
  <div class="darkmode-item-detail">
    <div class="darkmode-item-detail-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "DarkmodeItemDetail",
  });
</script>
<style scoped>
  .darkmode-item-detail-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--grayscale-off-white);
    width: 1422.97px;
    height: 42.2px;
  }
  .darkmode-item-detail {
    position: relative;
    width: 100%;
    height: 12px;
    overflow: hidden;
  }
</style>
