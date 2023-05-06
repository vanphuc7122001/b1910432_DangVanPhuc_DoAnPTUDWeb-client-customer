
  <template>
    <header class="section-header">	
  <section class="header-main">
    <div class="container">
      <div class="row gy-3 align-items-center">
        <div class="col-lg-2 col-sm-4 col-4">
          <router-link to="/" class="navbar-brand">
            P Store
          </router-link> <!-- brand end.// -->
        </div>
        <div class="order-lg-last col-lg-5 col-sm-8 col-8">
          <div class="float-end">
            <router-link to="/login" class="btn btn-light" v-if="isLogin"> 
                <i class="fa fa-user"></i>  <span class="ms-1 d-none d-sm-inline-block" >Sign in  </span> 
            </router-link>
            <a href="/" class="btn btn-light" v-if="isLogout" @click="handleLogout"> 
                <i class="fa fa-user"></i>  <span class="ms-1 d-none d-sm-inline-block">Sign out  </span> 
            </a>
            <a data-bs-toggle="offcanvas" href="#offcanvas_cart" class="btn btn-light"> 
              <i class="fa fa-shopping-cart"></i> <span class="ms-1">My cart </span> 
            </a>
              </div>
        </div> <!-- col end.// -->
        <div class="col-lg-5 col-md-12 col-12">
          <form action="#" class="">
                  <div class="input-group">
                    <input type="search" class="form-control" style="width:55%" placeholder="Search">
                    <button class="btn btn-primary">
                      <i class="fa fa-search"></i>  
                    </button>
                  </div> <!-- input-group end.// -->
                </form>
        </div> <!-- col end.// -->
        
      </div> <!-- row end.// -->
    </div> <!-- container end.// -->
  </section> <!-- header-main end.// -->

  <nav class="navbar navbar-light bg-primary border-top navbar-expand-lg">
    <div class="container">
      <button class="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbar_main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link ps-0" to="/"> Trang chủ </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
              Link github
            </a>
            <ul class="dropdown-menu">
              <li> <a class="dropdown-item" href="https://github.com/vanphuc7122001/b1910432_DangVanPhuc_DoAnPTUDWeb/tree/main/server">server </a> </li>
              <li> <a class="dropdown-item" href="https://github.com/vanphuc7122001/b1910432_DangVanPhuc_DoAnPTUDWeb-client-customer">client of customer</a> </li>
              <li> <a class="dropdown-item" href="https://github.com/vanphuc7122001/b1910432_DangVanPhuc_DoAnPTUDWeb-client-admin">client of admin</a> </li>
            </ul>
          </li>
        </ul>
      </div> <!-- collapse end.// -->
    </div> <!-- container end.// -->
  </nav> <!-- navbar end.// -->
</header> <!-- section-header end.// -->
</template>


<script>
export default {
  data(){
    return {
      token : null,
      isLogin: true,
      isLogout: false
    }
  }
  ,
  methods: {
    handleLogout(){
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      this.$router.push('/')
    }
  },
  created(){
     this.token = localStorage.getItem('token')
     if(this.token){
      this.isLogin =  false,
      this.isLogout = true
     }
  }
}
</script>

<style>

</style>