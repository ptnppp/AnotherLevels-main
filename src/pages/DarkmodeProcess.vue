<template>
  <div class="darkmode-process">
    <div class="darkmode-process-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "DarkmodeProcess",
  });
</script>
<style scoped>
  .darkmode-process-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--grayscale-off-white);
    width: 1943.84px;
    height: 42.2px;
  }
  .darkmode-process {
    position: relative;
    width: 100%;
    height: 12px;
    overflow: hidden;
  }
</style>
