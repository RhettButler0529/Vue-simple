<template>
  <div class="container">
<!--    <nav class="navbar navbar-expand-lg navbar-light bg-light ">-->
<!--      <ul class="navbar-nav mr-auto">-->
<!--        <li class="nav-item">-->
<!--          <router-link to="/login" class="nav-link">Login</router-link>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <router-link to="/new_repair" class="nav-link">New Repair</router-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style>
</style>
