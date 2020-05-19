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
#title {
  a {
    color: black;
    text-decoration: none;
  }
}

#header {
  background: rgb(230, 230, 230);
}

#nav {
  padding: 20px;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 25px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
