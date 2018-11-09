<template>
  <div>
    <div class="title">
      <h1>This is the admin/new route</h1>
      <product-form
        @save-product="addProduct"
        :model="model"
        :manufacturers="manufacturers"
      ></product-form>
    </div>
  </div>
</template>

<script>
import ProductForm from '@/components/products/ProductForm';
export default {
  data () {
    return {
      model: {},
      manufacturers: [
        {
          _id: 'same',
          name: 'Samsung'
        },
        {
          _id: 'apple',
          name: 'Apple'
        },
      ],
    };
  },
  methods: {
    addProduct (model) {
      console.log('model :', model);
    }
  },
  components: {
    'product-form': ProductForm
  }
}
</script>

<style>

</style>
