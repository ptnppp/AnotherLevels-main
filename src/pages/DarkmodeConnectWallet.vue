<template>
  <div class="darkmode-connect-wallet">
    <div class="darkmode-connect-wallet-child" />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "DarkmodeConnectWallet",
  });
</script>
<style scoped>
  .darkmode-connect-wallet-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--grayscale-off-white);
    width: 1422.97px;
    height: 42.2px;
  }
  .darkmode-connect-wallet {
    position: relative;
    width: 100%;
    height: 12px;
    overflow: hidden;
  }
</style>
