<template>
  <div class="search9">
    <div class="search-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Search1",
  });
</script>
<style scoped>
  .search-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--grayscale-off-white);
    width: 1422.97px;
    height: 42.2px;
  }
  .search9 {
    position: relative;
    width: 100%;
    height: 12px;
    overflow: hidden;
  }
</style>
