<template>
  <div id="container">
    <div class="progress" style="height: 20px;">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{'width':val+'%'}"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >25%</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 50
    };
  }
};
</script>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.progress {
  width: 70%;
}
</style>
