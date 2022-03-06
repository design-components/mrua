<template>
    <label :for="data.id">{{ data.text }}</label>
    <div class="input-group">
        <input type="number" class="form-control" :id="data.id" placeholder="-" v-model="data.number" v-on:change="setNumbersInParent()" v-on:keyup="setNumbersInParent()" :disabled="data.id == 'r'"> 
        <select-component class="form-select" :data="select" v-on:getConversion="getConversion" :disabled="data.number && select.option == 'speed'  && data.r  "/> 
    </div>
</template>

<script>
    import functions from '../../helpers/functions'
    import SelectComponent from './select'
    export default {
        props: ['data', 'select'],
        components: {
            SelectComponent
        },
        methods: {
            setNumbersInParent(number = null){
                switch(this.data.id){
                    case 'vi': this.$parent.givens.vi = number ? number : this.data.number ; break;
                    case 'vf': this.$parent.givens.vf = number ? number : this.data.number ; break;
                    case 'd': this.$parent.givens.d  = number ? number : this.data.number ; break;
                    case 'a': this.$parent.givens.a  = number ? number : this.data.number ; break;
                    case 't': this.$parent.givens.t = number ? number : this.data.number ; break;
                }
                this.$parent.calculate()
            },
            getConversion(dataConversion){
                if(this.data.id == 'vi'){ /*  || this.data.id == 'vf' */
                    let number = functions.conversions( this.select.option, this.$parent.givens.vf, this.select.default == 'km/h' ? 'm/s' : 'km/h', this.select.default == 'm/s' ? 'm/s' : 'km/h')
                    this.$parent.givens.vf = number
                }else if (this.data.id == 'vf'){
                    let number = functions.conversions( this.select.option, this.$parent.givens.vi, this.select.default == 'km/h' ? 'm/s' : 'km/h', this.select.default == 'm/s' ? 'm/s' : 'km/h')
                    this.$parent.givens.vi = number
                }
                let newSelect = { option: dataConversion.select, default: dataConversion.option }
                switch(dataConversion.select){
                    case 'time': this.$parent.selects.time = newSelect; break
                    case 'distance': this.$parent.selects.distance = newSelect; break
                    case 'acceleration': this.$parent.selects.acceleration = newSelect; break
                    case 'speed': this.$parent.selects.speed = newSelect; break
                }
                this.setNumbersInParent(dataConversion.number)
            }
        }
    }
</script>

<style lang="scss" scoped>
    input{
        max-width: 100px !important;
    }
</style>