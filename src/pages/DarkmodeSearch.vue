<template>
  <div class="darkmode-search">
    <div class="darkmode-search-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "DarkmodeSearch",
  });
</script>
<style scoped>
  .darkmode-search-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--grayscale-off-white);
    width: 1422.97px;
    height: 42.2px;
  }
  .darkmode-search {
    position: relative;
    width: 100%;
    height: 12px;
    overflow: hidden;
  }
</style>
