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
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="vi" placeholder="100" v-model="givens.vi">
              <label for="vi">Velocidad Inicial</label>
            </div>
            <span class="input-group-text"> M/S </span>
          </div>

          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="a" placeholder="100" v-model="givens.a">
              <label for="a">Aceleración</label>
            </div>
            <span class="input-group-text">M/S<sup>2</sup></span>
          </div>

          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="t" placeholder="100" v-model="givens.t">
              <label for="t">Tiempo</label>
            </div>
            <span class="input-group-text">Seg</span>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <span>Resultado</span>
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="vf" placeholder="100" :value="result" disabled>
              <label for="vf">Velocidad Final</label>
            </div>
            <span class="input-group-text">M/S</span>
          </div>
        </div>
      </div>

    </div>
    <div class="tab-pane fade" id="nav-d">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="vi" placeholder="100" v-model="givens.vi">
              <label for="vi">Velocidad Inicial</label>
            </div>
            <span class="input-group-text"> M/S </span>
          </div>

          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="a" placeholder="100" v-model="givens.a">
              <label for="a">Aceleración</label>
            </div>
            <span class="input-group-text">M/S<sup>2</sup></span>
          </div>
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="t" placeholder="100" v-model="givens.t">
              <label for="t">Tiempo</label>
            </div>
            <span class="input-group-text">Seg</span>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <span>Resultado</span>
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="d" placeholder="100" :value="result" disabled>
              <label for="d">Distancia</label>
            </div>
            <span class="input-group-text">mts</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-a">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="vi" placeholder="100" v-model="givens.vi">
              <label for="vi">Velocidad Inicial</label>
            </div>
            <span class="input-group-text"> M/S </span>
          </div>

          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="vf" placeholder="100" v-model="givens.vf">
              <label for="vf">Velocidad Final</label>
            </div>
            <span class="input-group-text">M/S</span>
          </div>

          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="t" placeholder="100" v-model="givens.t">
              <label for="t">Tiempo</label>
            </div>
            <span class="input-group-text">Seg</span>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <span>Resultado</span>
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="a" placeholder="100" :value="result" disabled>
              <label for="a">Aceleración</label>
            </div>
            <span class="input-group-text">M/S<sup>2</sup></span>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-t">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="vi" placeholder="100" v-model="givens.vi">
              <label for="vi">Velocidad Inicial</label>
            </div>
            <span class="input-group-text"> M/S </span>
          </div>

          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="vf" placeholder="100" v-model="givens.vf">
              <label for="vf">Velocidad Final</label>
            </div>
            <span class="input-group-text">M/S</span>
          </div>

          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="a" placeholder="100" v-model="givens.a">
              <label for="a">Aceleración</label>
            </div>
            <span class="input-group-text">M/S<sup>2</sup></span>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <span>Resultado</span>
          <div class="input-group">
            <div class="form-floating">
              <input type="number" class="form-control" id="t" placeholder="100" :value="result" disabled>
              <label for="t">{{ result }}</label>
            </div>
            <span class="input-group-text">Seg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      givens: {
        vf: null,
        vi: null,
        d: null,
        a: null, 
        t: null,
      },
      result: null,
      type: 'vf',
    }
  },
  mounted(){
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.addEventListener('keyup', (e) => {
        this.calculate()
      })
    })
    
  },
  methods:{
    changeCalcule(type){
      this.type = type
      this.result = null
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

</style>
