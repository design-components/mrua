<template>
    <!-- <v-select  :options="['Canada', 'United States']"></v-select> -->
    <v-select v-model="option" :disabled="data.option =='speed' && $parent.data.r" v-on:close="setConversion" :options="dataSelect" :reduce="option => option.abbreviation" label="abbreviation" :select-on-key-codes="[188, 13]">
        <template #option="{abbreviation, description}">
            {{ abbreviation }} ({{ description }})
        </template>
    </v-select>
</template>

<script>
    import vSelect from "vue-select";
    import functions from '../../helpers/functions'
    export default {
        components:{
            vSelect
        },
        props: ['data'],
        data(){
            return {
                option: this.data.default,
                dataSelect: functions.selectsParameters(this.data.option)
            }
        },
        watch:{
            data: function(){
                this.option = this.data.default,
                this.dataSelect = functions.selectsParameters(this.data.option)
            },
        },
        methods:{
            setConversion(){
                if(this.data.default ==  this.option) return 
                    
                let number = functions.conversions( this.data.option, this.$parent.data.number, this.option, this.data.default)

                if(number){
                    this.$emit('getConversion', {number: number, select: this.data.option, option: this.option})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-select div{
        height: 100% !important;
    }
    .form-select{
        background-image: none;
        padding: 0;
    }
</style>