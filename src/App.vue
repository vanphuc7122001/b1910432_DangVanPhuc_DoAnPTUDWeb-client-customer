

<template>
  <the-header/>
  <router-view></router-view>
<the-footer/>
</template>

<script>
 import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style>

</style>