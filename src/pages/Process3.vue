<template>
  <div class="process3">
    <div class="process-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Process3",
  });
</script>
<style scoped>
  .process-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--grayscale-off-white);
    width: 1936.99px;
    height: 42.2px;
  }
  .process3 {
    position: relative;
    width: 100%;
    height: 12px;
    overflow: hidden;
  }
</style>
