<template>
      <aside class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_cart">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Your cart ({{ countDocument }}) </h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          
          <figure class="itemside mb-4" v-for="(productItem, index) in productList" :key="index">
            <div class="aside">
              <img :src="productItem.image" class="border img-sm rounded">
            </div>
            <figcaption class="info">
              <a href="#" class="btn btn-icon btn-light float-end" @click="handleDeleteCart(productItem._id)"><i class="fa fa-trash"></i></a>
              <p> {{ productItem.name }}</p>
              <span class="text-muted">1 x  {{ productItem.price }}</span> <br>
              <strong class="price"> {{ productItem.price }} </strong>
            </figcaption>
          </figure>
    
          
    
          <hr>
         
          <p class="mb-3 text-center"> Subtotal:  <strong class="text-danger">{{ sumMoney }}.000.000 VND</strong>  </p>
          <div class="mb-3">
            <a href="#" class="btn w-100 btn-success" v-if="isLogout" @click="handleOrder"> Checkout </a>
          </div>
          <p class="mb-3 text-center"> <img src="../assets/images/payments.webp" height="22">  </p>
    
        </div> <!-- offcanvas-body -->
    </aside> <!-- offcanvas -->
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('order')
export default {
  data(){
    return {
      token : null,
      isLogin: true,
      isLogout: false,
      productList: null
    }
  },
  computed: {
    sumMoney(){
     return this.productList.reduce((total, product) => total + (1 * parseInt(product.price)),0)
    },
    countDocument() {
      return this.productList.length 
    }
  }
  ,
  created(){
     const listProduct = localStorage.getItem("productList");
     this.productList = JSON.parse(listProduct)
     this.token = localStorage.getItem('token')
     if(this.token){
      this.isLogin =  false,
      this.isLogout = true
     }

  },
  methods: {
    handleDeleteCart(id){
      this.productList = this.productList.filter ( (product) => product._id !== id)
      localStorage.setItem('productList', JSON.stringify(this.productList))
    },
    async handleOrder(){
      const id = localStorage.getItem('id')
      const product = {
        owner: id,
        products: [
          ...this.productList
        ]
      }
      const res = await this.handleOrderProduct(product)
      console.log(res);
      if(res.success == 1){
        alert('Order successfully')
        location.reload()
        localStorage.removeItem('productList')

      }else{
        alert('Order not successfully')
      }
    },
    ...mapActions({
      handleOrderProduct: 'actionOrderProduct'
    })
  }
}
</script>

<style>

</style>