<template>
    <label :for="data.id">{{ data.text }}</label>
    <div class="input-group">
        <input type="number" class="form-control" :id="data.id" placeholder="100" v-model="given" v-on:keyup="emitEvent(data.id)" v-if="data.id != 'r'"> <!--  v-model="givens.vi" -->
        <input type="number" class="form-control" :id="data.id" placeholder="100" :value="$parent.result" disabled v-else> <!--  v-model="givens.vi" -->
        <select-component class="form-select" :data="select"/> 
    </div>
</template>

<script>
    import SelectComponent from './select'
    export default {
        props: ['data', 'select'],
        components: {
            SelectComponent
        },
        data(){
            return { given: '' }
        },
        methods: {
            emitEvent(type){
                switch(type){
                    case 'vi': this.$parent.givens.vi = this.given; break;
                    case 'vf': this.$parent.givens.vf = this.given; break;
                    case 'd': this.$parent.givens.d  = this.given; break;
                    case 'a': this.$parent.givens.a  = this.given; break;
                    case 't': this.$parent.givens.t = this.given; break;
                }
                this.$parent.calculate()
            }
        }
    }
</script>

<style lang="scss" scoped>
    input{
        max-width: 100px !important;
    }
</style>