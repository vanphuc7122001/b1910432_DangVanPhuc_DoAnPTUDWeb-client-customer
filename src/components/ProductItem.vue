<template>
    <button class="img-wrap" @click="handleOpenModal">
        <!-- <span class="topbar"> <b class="badge bg-success"> Offer </b> </span> -->
        <img :src="productItem.image" />
    </button>
    <figcaption class="info-wrap border-top">
        <button href="#" class="float-end btn btn-light btn-icon" @click="handleAddCart(productItem)">
            <i class="fa fa-shopping-cart"></i>
        </button>
        <a href="#" class="title text-truncate">{{ productItem.name }}</a>
        <small class="text-muted">Sizes: S, M, XL</small>
        <div class="price-wrap">
            <span class="price">{{ productItem.price }} VND</span>
        </div>
        <!-- price-wrap.// -->
    </figcaption>

    <Teleport to="body">
        <app-modal :isOpen="isOpenModalDetail" :title="title" :handleCloseModal="handleCloseModal">
            <ProductDetail :productItem="productItem" />
        </app-modal>
    </Teleport>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";

export default {
    components: {
        ProductDetail,
    },
    props: {
        productItem: {
            type: Object,
        },
    },
    data() {
    return {
        isOpenModalDetail: false,
      title: "Chi tiết sản phẩm"
    };
  },
  methods: {
    handleOpenModal(){
      this.isOpenModalDetail = true;
    },
    handleCloseModal() {
      this.isOpenModalDetail = false;
    },
    handleAddCart(cart){
        location.reload()
        const object = {
            ...cart
        }
        let productList = localStorage.getItem('productList');
        if(productList){
            let arr = JSON.parse(productList)
            arr.push((object))
            localStorage.setItem('productList', JSON.stringify(arr))
        }else {
            localStorage.setItem('productList', JSON.stringify([object]))
        }

    }
  }
  
};
</script>

<style></style>
