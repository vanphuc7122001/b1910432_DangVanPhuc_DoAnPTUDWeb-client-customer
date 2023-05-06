<template>
  <section class="container text-center">
    <div class="row">
      <div class="col-sm-4">
        <img :src="productItem.image" class="img-thumbnail" alt="" />
      </div>
      <div class="col-sm-8">
        <div class="alert alert-success">
          <b>Name: </b> <span>{{ productItem.name }}</span>
        </div>
        <div class="alert alert-success">
          <b>Description: </b> <span>{{ productItem.desc }}</span>
        </div>
        <div class="alert alert-success">
          <b>Content: </b> <span>{{ productItem.content }}</span>
        </div>
        <div class="alert alert-success">
          <b>Price: </b> <span>{{ productItem.price }} VNĐ</span>
        </div>
        <div class="alert alert-success">
          <b> Inventory number: </b>
          <span>{{ productItem.quantity }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    productItem: {
      type: Object,
    },
  },
};
</script>

<style>
</style>