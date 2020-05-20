<template>
  <div class="home">{{ getData["data"]["rebalancing_sets"][0]["id"] }}</div>
</template>

<script>
export default {
  computed: {
    getData() {
      return this.$store.getters.getData;
    },
  },
};
</script>
