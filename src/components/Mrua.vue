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
          <div class="mb-3"> <input-group :data="{id: 'vi', number: givens.vi, text: 'Velocidad Inicial'}" :select="selects.speed"/></div>
          <div class="mb-3"> <input-group :data="{id: 'a',  number: givens.a, text: 'Aceleración'}" :select="selects.acceleration"/></div>
          <div class="mb-3"> <input-group :data="{id: 't',  number: givens.t, text: 'Tiempo'}" :select="selects.time" /></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="mb-3"> <input-group :data="{id: 'r', number: result, r: true, text: 'Velocidad Final'} " :select="selects.speed" /></div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-d">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'vi', number: givens.vi, text: 'Velocidad Inicial'}" :select="selects.speed"/></div>
          <div class="mb-3"> <input-group :data="{id: 'a',  number: givens.a, text: 'Aceleración'}" :select="selects.acceleration"/></div>
          <div class="mb-3"> <input-group :data="{id: 't',  number: givens.t, text: 'Tiempo'}" :select="selects.time" /></div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'r',  number: result , text: 'Distancia'}" :select="selects.distance" /></div>
        </div>
        <div class="col-12 col-lg-4">
          ( a * (t*t)  ) / 2 + (vi * t)
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-a">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'vi', number: givens.vi, text: 'Velocidad Inicial'}" :select="selects.speed"/></div>
          <div class="mb-3"> <input-group :data="{id: 'vf', number: givens.vf, text: 'Velocidad Final'}" :select="selects.speed"/></div>
          <div class="mb-3"> <input-group :data="{id: 't',  number: givens.t, text: 'Tiempo'}" :select="selects.time" /></div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'r', number: result, r: true, text: 'Aceleración'}" :select="selects.acceleration" /></div>
        </div>
        <div class="col-12 col-lg-4">
          (vf - vi) / t
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-t">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'vi', number: givens.vi, text: 'Velocidad Inicial'}" :select="selects.speed"/></div>
          <div class="mb-3"> <input-group :data="{id: 'vf', number: givens.vf, text: 'Velocidad Final'}" :select="selects.speed"/></div>
          <div class="mb-3"> <input-group :data="{id: 'a',  number: givens.a,  text: 'Aceleración'}" :select="selects.acceleration"/></div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="mb-3"> <input-group :data="{id: 'r', number: result, r: true, text: 'Tiempo'}" :select="selects.time" /></div>
        </div>
        <div class="col-12 col-lg-4">
          (vf - vi) / a
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import functions from "./../helpers/functions"
  import SelectComponent from './includes/select'
  import inputGroup from './includes/input-group'
export default {
  components: {SelectComponent, inputGroup},
  data(){
    return {
      givens: { vf: '', vi: '', d: '', a: '', t: '', },
      selects:{
        speed:        { option: 'speed',        default: 'm/s' },
        distance:     { option: 'distance',     default: 'mts' },
        acceleration: { option: 'acceleration', default: 'm/s2' },
        time:         { option: 'time',         default: 'seg', }
      },
      result: '',
      type: 'vf',
    }
  },
  methods:{ 
    changeCalcule(type){
      this.resetData(type)
      this.calculate()
    },
    calculate(){
      let nT = this.selects.time.default != 'seg' ? functions.conversions('time', this.givens.t, 'seg', this.selects.time.default) : this.givens.t

      let nVi = this.type != 'vf' ? this.selects.speed.default != 'm/s' ? functions.conversions('speed', this.givens.vi, 'm/s', this.selects.speed.default) : this.givens.vi : this.givens.vi
      let nVf = this.type == 'a' || this.type == 't' ? this.selects.speed.default != 'm/s' ? functions.conversions('speed', this.givens.vf, 'm/s', this.selects.speed.default) : this.givens.vf : this.givens.vf
      
      switch(this.type){
        case 'vf': 
          if(nVi && this.givens.a && nT) this.result = nVi + (this.givens.a * nT)
        break
        case 'd':
          if(this.givens.a && nT && nVi) this.result = (this.givens.a * (nT * nT)) / 2 + (nVi * nT)
        break
        case 'a':
          if(nVf && nT && nVi) this.result = (nVf - nVi) / nT
        break
        case 't':
          if(nVf && this.givens.a && nVi) this.result = (nVf - nVi) / this.givens.a
        break
        default:
          this.result = ''
        break
      }
    },
    resetData(type){
      this.type = type
      this.givens = { vf: '', vi: '', d: '', a: '', t: '', },
      this.selects = {
        speed:        { option: 'speed',        default: 'm/s' },
        distance:     { option: 'distance',     default: 'mts' },
        acceleration: { option: 'acceleration', default: 'm/s2' },
        time:         { option: 'time',         default: 'seg', }
      },
      this.result = ''
      this.type = type
    },
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
