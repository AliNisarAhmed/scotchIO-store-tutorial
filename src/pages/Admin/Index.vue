<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div>
          <ul class="admin-menu">
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">new Product</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'Welcome to the admin page',
    };
  },
}
</script>

<style>

</style>
