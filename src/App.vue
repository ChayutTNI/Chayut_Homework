<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/Profile' }">Profile</router-link>
    <router-link class="link" :to="{ path: '/Contact' }">Contact</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>



<style>
#app {
  margin: 5px;
  color: white;
}

.link {
  display: inline-block;

  padding: 10px;

  text-decoration: none;

  color: white;
}

.router-link-exact-active {
  text-align: Left;
  background-color: green;
  width: 45px;
  height: 20px;
}
</style>
