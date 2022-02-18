<template>
  <div class="container pt-5">
    <div class="card">
      <div class="card-header  bg-primary text-white">
        Movimiento Rectilíneo Uniformemente Acelerado
      </div>
      <div class="card-body">
        <mrua/>
      </div>
    </div>
  </div>
</template>

<script>
import Mrua from './components/Mrua'

export default {
  name: 'App',
  components: {
    Mrua
  }
}
</script>

<style lang="scss">
</style>
