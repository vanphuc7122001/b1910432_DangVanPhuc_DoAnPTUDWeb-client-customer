  <template>
   <footer class="section-footer bg-primary footer-dark mt-3">
    <div class="container">
      <section class="footer-main padding-y">
        <div class="row">
          <aside class="col-12 col-sm-12 col-lg-3">
            <article class="me-lg-4">
              <p class="mt-3"> © 2023 B1910432. <br> All rights reserved. </p>
            </article>
          </aside>
          <aside class="col-6 col-sm-4 col-lg-2">
            <h6 class="title">Cửa hàng</h6>
            <ul class="list-menu mb-4">

              <li> <a href="#">Giới thiệu về công ty</a></li>
              <li> <a href="#">Các cơ sở</a></li>
              <li> <a href="#">Tra cứu</a></li>
              <li> <a href="#">Tin tức</a></li>
            </ul>
          </aside>
          <aside class="col-6 col-sm-4 col-lg-2">
            <h6 class="title">Thông tin</h6>
            <ul class="list-menu mb-4">
              <li> <a href="#">Hổ trợ</a></li>
              <li> <a href="#">Phương thức thanh toán</a></li>
              <li> <a href="#">Hình thức vận chuyển</a></li>
              <li> <a href="#">Chính sách</a></li>
            </ul>
          </aside>

          <aside class="col-12 col-sm-12 col-lg-3">
            <h6 class="title">Phản hồi</h6>
            <p>Phản hồi từ khách hàng</p>
    
            <form class="mb-3">
              <div class="input-group">
                <input class="form-control" type="text" placeholder="Email">
                <button class="btn btn-light" type="submit">
                  P
                </button>
              </div> <!-- input-group.// -->
            </form>
          </aside>
        </div> <!-- row.// -->
      </section>  <!-- footer-top.// -->
    
      <section class="footer-bottom d-flex justify-content-lg-between border-top">
        <div>
          <i class="fab fa-lg fa-cc-visa"></i>
          <i class="fab fa-lg fa-cc-amex"></i>
          <i class="fab fa-lg fa-cc-mastercard"></i>
          <i class="fab fa-lg fa-cc-paypal"></i>
        </div>
        <nav class="dropup">
            <button class="dropdown-toggle btn d-flex align-items-center py-0" type="button" data-bs-toggle="dropdown">
              <!-- <img src="../assets/images/flag-usa.webp" class="me-2" height="20">  -->
              <span class="text-white">VietNam</span>
            </button>
        </nav>
        
      </section>
    </div> <!-- container end.// -->
    </footer>
    
    <cart-modal/>
</template>

<script>

import CartModal from './CartModal.vue';
export default {
  components: {
    CartModal
  }
}
</script>

<style>

</style>