<template>
  <div id="header">
    <h1 id="title">
      <router-link to="/eth" active-class="active">SetTracker</router-link>
    </h1>
    <nav id="nav">
      <router-link to="/eth" active-class="active">ETH</router-link>
      <router-link to="/link" active-class="active">LINK</router-link>
      <router-link to="/btc" active-class="active">BTC</router-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
#header {
  background: rgb(248, 226, 255);
  #title {
    padding-top: 20px;
    a {
      color: rgb(39, 39, 39);
      text-decoration: none;
    }
  }
  #nav {
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    a {
      font-weight: bold;
      color: #1400c7;
      margin: 0 25px;

      &.router-link-exact-active {
        color: #c32aff;
      }
    }
  }
}
</style>
