
<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */

import Home from './pages/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style>

.nav__left {
  display: flex;
  background-color: #252525;
  list-style: none;
  color: white;
  font-size: 26px;
  text-transform: uppercase;
}

li {
  margin-right: 2rem;
  padding: 2rem;
  transition: all 0.1s;
  border-bottom: 4px solid transparent;
}

li:hover {
  border-bottom: 4px solid palevioletred;
  color: palevioletred
}

a {
  color: currentColor;
  text-decoration: none;
}

</style>
