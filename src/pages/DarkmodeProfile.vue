<template>
  <div class="darkmode-profile">
    <div class="darkmode-profile-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "DarkmodeProfile",
  });
</script>
<style scoped>
  .darkmode-profile-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--grayscale-off-white);
    width: 1422.97px;
    height: 42.2px;
  }
  .darkmode-profile {
    position: relative;
    width: 100%;
    height: 12px;
    overflow: hidden;
  }
</style>
