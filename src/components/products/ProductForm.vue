<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5">
      <div class="form-group">
        <label>Name</label>
        <input 
          type="text"
          placeholder="name"
          v-model="model.name"
          name="name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="">Price</label>
        <input 
          type="number" 
          name="price" 
          placeholder="Price"
          v-model="model.price"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="">Manufacturer</label>
        <select
          type="text" 
          name="manufacturer" 
          placeholder="Manufacturer"
          v-model="model.manufacturer"
          class="form-control"
        >
          <template v-for="manufacturer in manufacturers">
            <option
            :key="manufacturer._id" 
            :value="manufacturer._id"
            >{{ manufacturer.name }}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="form-group">
        <label for="">Image</label>
        <input 
          type="text"
          class="form-control"
          placeholder="Image"
          v-model="model.image"
          name="image"
        />
      </div>
      <div class="form-group">
        <label for="">Description</label>
        <textarea 
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          name="description"
        ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <font-awesome-icon icon="edit"></font-awesome-icon>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'isEditing', 'manufacturer'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model);
    }
  }
}
</script>

<style>

</style>
