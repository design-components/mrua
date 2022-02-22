<template>
  <!-- <h5 class="card-title">Special title treatment</h5> -->

  <nav>
    <div class="nav nav-tabs">
      <button v-on:click.prevent="changeCalcule('vf')" class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-vf">Velocidad Final</button>
      <button v-on:click.prevent="changeCalcule('d')" class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-d">Distancia</button>
      <button v-on:click.prevent="changeCalcule('a')" class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-a">Aceleración</button>
      <button v-on:click.prevent="changeCalcule('t')" class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-t">Tiempo</button>
    </div>
  </nav>
  <div class="tab-content py-4">
    <div class="tab-pane fade show active" id="nav-vf">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="mb-3"> <input-group :data="{id: 'vi', text: 'Velocidad Inicial'}" :select="{ option: 'speed', default: 'm/s' }"/></div>
          <div class="mb-3"> <input-group :data="{id: 'a', text: 'Aceleración'}" :select="{ option: 'acceleration', default: 'm/s2'}"/></div>
          <div class="mb-3"> <input-group :data="{id: 't', text: 'Tiempo'}" :select="{ option: 'time', default: 'seg' }" /></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="mb-3"> <input-group :data="{id: 'r', text: 'Velocidad Final'}" :select="{ option: 'speed', default: 'm/s' }" /></div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-d">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'vi', text: 'Velocidad Inicial'}" :select="{ option: 'speed', default: 'm/s' }"/></div>
          <div class="mb-3"> <input-group :data="{id: 'a', text: 'Aceleración'}" :select="{ option: 'acceleration', default: 'm/s2' }"/></div>
          <div class="mb-3"> <input-group :data="{id: 't', text: 'Tiempo'}" :select="{ option: 'time', default: 'seg' }" /></div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'r', text: 'Distancia'}" :select="{ option: 'distance', default: 'mt' }" /></div>
        </div>
        <div class="col-12 col-lg-4">
          ( a * (t*t)  ) / 2 + (vi * t)
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-a">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'vi', text: 'Velocidad Inicial'}" :select="{ option: 'speed', default: 'm/s' }"/></div>
          <div class="mb-3"> <input-group :data="{id: 'vf', text: 'Velocidad Final'}" :select="{ option: 'speed', default: 'm/s' }"/></div>
          <div class="mb-3"> <input-group :data="{id: 't', text: 'Tiempo'}" :select="{ option: 'time', default: 'seg' }" /></div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'r', text: 'Aceleración'}" :select="{ option: 'acceleration', default: 'm/s2' }" /></div>
        </div>
        <div class="col-12 col-lg-4">
          (vf - vi) / t
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-t">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'vi', text: 'Velocidad Inicial'}" :select="{ option: 'speed', default: 'm/s' }"/></div>
          <div class="mb-3"> <input-group :data="{id: 'vf', text: 'Velocidad Final'}" :select="{ option: 'speed', default: 'm/s' }"/></div>
          <div class="mb-3"> <input-group :data="{id: 'a', text: 'Aceleración'}" :select="{ option: 'acceleration', default: 'm/s2' }"/></div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'r', text: 'Tiempo'}" :select="{ option: 'time', default: 'seg' }" /></div>
        </div>
        <div class="col-12 col-lg-4">
          (vf - vi) / a
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import functions from '../helpers/functions'
  import SelectComponent from './includes/select'
  import inputGroup from './includes/input-group'
export default {
  components: {SelectComponent, inputGroup},
  data(){
    return {
      givens: {
        vf: '',
        vi: '',
        d: '',
        a: '', 
        t: '',
      },
      result: '',
      type: 'vf',
    }
  },
  methods:{ 
    changeCalcule(type){
      this.type = type
      this.calculate()
    },
    calculate(){
      let type = this.type
      switch(type){
        case 'vf': 
          this.result = this.givens.vi + (this.givens.a * this.givens.t)
        break
        case 'd':
          this.result = (this.givens.a * (this.givens.t * this.givens.t)) / 2 + (this.givens.vi * this.givens.t)
        break
        case 'a':
          this.result = (this.givens.vf - this.givens.vi) / this.givens.t
        break
        case 't':
          this.result = (this.givens.vf - this.givens.vi) / this.givens.a
        break
        default:
          this.result = null
        break
      }
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .form-select{
    background-image: none;
    padding: 0;
  }
</style>
