

<template>
  <the-header/>
  <home/>
  <the-footer/>
</template>

<script>
 import TheHeader from './components/TheHeader.vue'
import Home from './components/Home.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    Home
  }
}
</script>

<style>

</style>