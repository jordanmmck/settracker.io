<template>
  <div id="container">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
    <hr />
    <div class="progress" style="height: 25px;">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
    <hr />
    <div class="progress" style="height: 20px;">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
