  <template>
<!-- ================ SECTION PRODUCTS ================ -->
<section class="padding-top">
<div class="container">

  <header class="section-heading">
    <h3 class="section-title">Sản phẩm mới</h3>
  </header> 

  <div class="row">
    <div class="col-lg-3 col-md-6 col-sm-6" v-for="(productItem, index) in productList" :key="index">
      <figure class="card card-product-grid">
        <product-item :productItem="productItem"/>
      </figure>
    </div> <!-- col end.// -->
<!-- col end.// -->
  </div> <!-- row end.// -->

</div> <!-- container end.// -->
</section>
<!-- ================ SECTION PRODUCTS END.// ================ -->


<!-- ================ SECTION FEATURE ================ -->
<section class="padding-top">
<div class="container">
  <div class="row gy-4">
    <aside class="col-lg-6">
      <article class="card-banner bg-gray h-100" style="min-height: 200px">
        <div class="p-3 p-lg-5"  style="max-width:70%">
          <h3> Sản phẩm tốt nhất của cửa hàng chúng tôi</h3>
          <p>Cam kết giá rẻ</p>
          <a class="btn btn-warning" href="#"> Xem thêm </a>
        </div>
        <img src="../assets/images/banners/banner-item2.webp" height="350" class="img-bg">
      </article>
    </aside> <!-- col.// -->
    <aside class="col-lg-6">

      <div class="row mb-4">
        <div class="col-6">
          <article class="card bg-primary" style="min-height: 200px">
            <div class="card-body">
              <h5 class="text-white">Công ngệ mới</h5>
              <p class="text-white-50">Nhửng tin tức công nghệ hot </p>
              <a class="btn btn-outline-light btn-sm" href="#">Xem thêm</a>
            </div>
          </article>
        </div>
        <div class="col-6">
          <article class="card bg-primary" style="min-height: 200px">
            <div class="card-body">
              <h5 class="text-white">Âm thanh chất lượng</h5>
              <p class="text-white-50">Tất cả nhửng gì dành cho âm nhạc</p>
              <a class="btn btn-outline-light btn-sm" href="#">Xem thêm</a> 
            </div>
          </article>
        </div>
      </div> <!-- row.// -->

      <article class="card bg-success" style="min-height: 200px">
        <div class="card-body">
          <h5 class="text-white">Mua 2 tặng 1 phần quà đặt biệt</h5>
          <p class="text-white-50" style="max-width:400px;">Mua 1 tặng 1 lưu chọn cửa hàng chúng tôi tiết kiệm tiền ngay </p>
          <a class="btn btn-outline-light btn-sm" href="#">Xem thêm</a> 
        </div>
      </article>

    </aside> <!-- col.// -->
  </div> <!-- row.// -->
</div> <!-- container end.// -->
</section>
<!-- ================ SECTION FEATURE END.// ================ -->

<!-- ================ SECTION PRODUCTS ================ -->
<section class="padding-top">
<div class="container">

  <header class="section-heading">
    <h3 class="section-title">Đã xem gần đây</h3>
  </header> 

  <div class="row gy-3">
    <div class="col-lg-2 col-md-4 col-4">
      <a href="#" class="img-wrap"> 
        <img height="200" width="200" class="img-thumbnail" src="../assets/images/items/1.webp"> 
      </a>
    </div> <!-- col.// -->
    <div class="col-lg-2 col-md-4 col-4">
      <a href="#" class="img-wrap"> 
        <img height="200" width="200" class="img-thumbnail" src="../assets/images/items/2.webp"> 
      </a>
    </div> <!-- col.// -->
    <div class="col-lg-2 col-md-4 col-4">
      <a href="#" class="img-wrap"> 
        <img height="200" width="200" class="img-thumbnail" src="../assets/images/items/3.webp"> 
      </a>
    </div> <!-- col.// -->
    <div class="col-lg-2 col-md-4 col-4">
      <a href="#" class="img-wrap"> 
        <img height="200" width="200" class="img-thumbnail" src="../assets/images/items/4.webp"> 
      </a>
    </div> <!-- col.// -->
    <div class="col-lg-2 col-md-4 col-4">
      <a href="#" class="img-wrap"> 
        <img height="200" width="200" class="img-thumbnail" src="../assets/images/items/5.webp"> 
      </a>
    </div> <!-- col.// -->
    <div class="col-lg-2 col-md-4 col-4">
      <a href="#" class="img-wrap"> 
        <img height="200" width="200" class="img-thumbnail" src="../assets/images/items/6.webp"> 
      </a>
    </div> <!-- col.// -->
  </div> <!-- row end.// -->

</div> <!-- container end.// -->
</section>
<!-- ================ SECTION PRODUCTS END.// ================ -->

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapActions } = createNamespacedHelpers('product')
import ProductItem from '../components/ProductItem.vue';


export default {
  components: {
    ProductItem
  },
  computed: {
    ...mapState({
      productList: (state) => state.productList
    })
  },

  methods: {
    ...mapActions({
      getAllProduct: 'actionGetAllProduct',
    })
  },

  created() {
    this.getAllProduct();
  }
}
</script>

<style>

</style>